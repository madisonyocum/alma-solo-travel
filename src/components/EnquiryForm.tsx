"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, type UseFormRegister, type FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Check, Info, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const interestOptions = [
  "Food",
  "Wellness",
  "Art & design",
  "Beaches",
  "Nightlife",
  "History",
  "Nature",
  "Shopping",
  "Local culture",
  "Photography",
] as const;

const schema = z.object({
  // Step 1
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  ageRange: z.string().optional(),
  country: z.string().min(2, "Please enter your country of residence."),
  firstSoloTrip: z.enum(["yes", "no"], {
    errorMap: () => ({ message: "Please choose an option." }),
  }),
  // Step 2
  destination: z.string().min(2, "Tell us a destination, or that you're open to ideas."),
  dates: z.string().optional(),
  tripLength: z.string().optional(),
  departureCity: z.string().optional(),
  numDestinations: z.string().optional(),
  budget: z.string().optional(),
  currency: z.string().min(1, "Please choose a currency."),
  // Step 3
  style: z.enum(["Budget", "Comfortable", "Boutique", "Luxury", "Mixed"], {
    errorMap: () => ({ message: "Please choose a style." }),
  }),
  interests: z.array(z.string()).min(1, "Please choose at least one interest."),
  // Step 4
  support: z.enum(["Edit", "Journey", "Concierge", "Unsure"], {
    errorMap: () => ({ message: "Please choose a level of support." }),
  }),
  // Step 5
  special: z.string().optional(),
  worried: z.string().optional(),
  accessibility: z.string().optional(),
  hearAbout: z.string().optional(),
  // Review
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please accept the privacy notice to continue." }),
  }),
});

export type EnquiryValues = z.infer<typeof schema>;

const STORAGE_KEY = "alma-enquiry-draft";

const steps = [
  { id: "about", label: "About you" },
  { id: "journey", label: "Your journey" },
  { id: "style", label: "Your style" },
  { id: "support", label: "Support" },
  { id: "details", label: "Final details" },
  { id: "review", label: "Review" },
] as const;

// Fields validated when leaving each step.
const stepFields: (keyof EnquiryValues)[][] = [
  ["name", "email", "country", "firstSoloTrip"],
  ["destination", "currency"],
  ["style", "interests"],
  ["support"],
  [],
  ["consent"],
];

export function EnquiryForm({
  defaultService,
  defaultDestination,
  defaultDates,
  defaultTripLength,
}: {
  defaultService?: string;
  defaultDestination?: string;
  defaultDates?: string;
  defaultTripLength?: string;
}) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const liveRef = useRef<HTMLParagraphElement>(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    reset,
    setValue,
    getValues,
    formState: { errors, submitCount },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { interests: [], currency: "EUR" },
  });

  // Restore autosaved draft on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const draft = JSON.parse(raw) as Partial<EnquiryValues>;
        reset({ interests: [], currency: "EUR", ...draft, consent: undefined as never });
      }
    } catch {
      /* ignore malformed drafts */
    }
    if (defaultService) {
      const map: Record<string, EnquiryValues["support"]> = {
        edit: "Edit",
        journey: "Journey",
        concierge: "Concierge",
      };
      if (map[defaultService]) setValue("support", map[defaultService]);
    }
    // Pre-fill from the homepage hero search.
    if (defaultDestination) setValue("destination", defaultDestination);
    if (defaultDates) setValue("dates", defaultDates);
    if (defaultTripLength) setValue("tripLength", defaultTripLength);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Autosave to localStorage on every change.
  useEffect(() => {
    const sub = watch((values) => {
      try {
        const { consent: _c, ...rest } = values;
        void _c;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(rest));
      } catch {
        /* storage may be unavailable */
      }
    });
    return () => sub.unsubscribe();
  }, [watch]);

  async function next() {
    const fields = stepFields[step];
    const valid = fields.length === 0 ? true : await trigger(fields);
    if (valid) {
      setStep((s) => Math.min(s + 1, steps.length - 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
      requestAnimationFrame(() => liveRef.current?.focus());
    }
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function onSubmit(values: EnquiryValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      localStorage.removeItem(STORAGE_KEY);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <SuccessState onReset={() => { reset(); setStep(0); setStatus("idle"); }} />;
  }

  return (
    <div className="flex w-full max-w-7xl flex-col rounded-3xl border border-border bg-paper lg:min-h-170 lg:flex-row">
      {/* ── Left sidebar ── */}
      <aside className="flex flex-col justify-between rounded-t-3xl bg-deep-olive px-8 py-10 text-surface lg:sticky lg:top-26 lg:w-80 lg:shrink-0 lg:rounded-t-none lg:rounded-l-3xl xl:w-96 xl:px-12">
        <div>
          <p className="eyebrow text-sun">Begin your journey</p>
          <h1 className="mt-4 font-serif text-3xl leading-[1.05] text-surface xl:text-4xl">
            Tell us about the trip you have in mind.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-surface/70">
            {stepDescriptions[step]}
          </p>

          {/* Mobile: compact step indicator */}
          <div className="mt-6 flex items-center gap-3 lg:hidden">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-surface bg-surface text-xs font-semibold text-deep-olive">
              {step + 1}
            </span>
            <span className="font-sans text-lg font-medium text-surface">
              {steps[step].label}
            </span>
            <span className="ml-auto font-sans text-sm text-surface/50">
              {step + 1} of {steps.length}
            </span>
          </div>

          {/* Desktop: full step list */}
          <nav aria-label="Form steps" className="mt-10 hidden lg:block">
            <ol className="flex flex-col gap-1">
              {steps.map((s, i) => {
                const done = i < step;
                const current = i === step;
                return (
                  <li key={s.id} className="flex items-center gap-4 py-2.5">
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors",
                        done
                          ? "border-sun bg-sun text-deep-olive"
                          : current
                            ? "border-surface bg-surface text-deep-olive"
                            : "border-surface/30 bg-transparent text-surface/40",
                      )}
                    >
                      {done ? <Check className="h-4 w-4" aria-hidden="true" /> : i + 1}
                    </span>
                    <span
                      className={cn(
                        "font-sans text-lg transition-colors",
                        current ? "font-medium text-surface" : done ? "text-surface/70" : "text-surface/40",
                      )}
                    >
                      {s.label}
                    </span>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>

        <p className="mt-6 text-xs text-surface/50 lg:mt-8">
          Your answers save automatically as you go.
        </p>
      </aside>

      {/* ── Right form panel ── */}
      <main className="flex flex-1 flex-col px-6 py-12 sm:px-10 lg:px-12 xl:px-14">
        <p ref={liveRef} tabIndex={-1} className="sr-only" aria-live="polite">
          {steps[step].label}, step {step + 1} of {steps.length}
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mx-auto flex w-full max-w-2xl flex-1 flex-col"
        >
          <fieldset className="border-0 p-0">
            <legend className="mb-8 font-serif text-3xl sm:text-4xl">
              {stepTitles[step]}
            </legend>

            {step === 0 && <StepAbout register={register} errors={errors} />}
            {step === 1 && <StepJourney register={register} errors={errors} />}
            {step === 2 && (
              <StepStyle
                register={register}
                errors={errors}
                selected={watch("interests") ?? []}
              />
            )}
            {step === 3 && <StepSupport register={register} errors={errors} />}
            {step === 4 && <StepDetails register={register} errors={errors} />}
            {step === 5 && (
              <ReviewStep values={getValues()} register={register} errors={errors} submitCount={submitCount} />
            )}
          </fieldset>

          {status === "error" && (
            <p role="alert" className="mt-6 text-sm text-terracotta">
              Something went wrong sending your enquiry. Please try again, or email
              hello@almasolotravel.com.
            </p>
          )}

          <div className="mt-auto flex items-center justify-between gap-4 pt-8">
            {step > 0 ? (
              <button
                type="button"
                onClick={back}
                className="inline-flex min-h-11 items-center gap-2 px-2 text-sm text-ink hover:text-terracotta"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
              </button>
            ) : (
              <span />
            )}

            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={next}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-deep-olive px-7 font-sans text-sm font-medium tracking-wide text-surface transition-colors hover:bg-ink"
              >
                Continue <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-deep-olive px-7 font-sans text-sm font-medium tracking-wide text-surface transition-colors hover:bg-ink disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>Send enquiry</>
                )}
              </button>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}

const stepTitles = [
  "About you",
  "Your journey",
  "Your style",
  "How much support would you like?",
  "A few final details",
  "Review your enquiry",
];

const stepDescriptions = [
  "A few quick details so we can tailor everything to you.",
  "Tell us where you'd like to go, when, and for how long.",
  "Help us understand how you like to travel and what excites you.",
  "Choose how much involvement you'd like from Alma.",
  "Anything extra that would help us plan the perfect trip.",
  "Check everything looks right before you send.",
];

// ---------------------------------------------------------------------------
// Shared field primitives
// ---------------------------------------------------------------------------

type RegisterT = UseFormRegister<EnquiryValues>;
type ErrorsT = FieldErrors<EnquiryValues>;

function Field({
  label,
  name,
  errors,
  optional,
  children,
}: {
  label: string;
  name: keyof EnquiryValues;
  errors: ErrorsT;
  optional?: boolean;
  children: React.ReactNode;
}) {
  const error = errors[name];
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-sans text-sm font-medium text-ink">
        {label}
        {optional && <span className="ml-1 text-muted-ink">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} role="alert" className="text-xs text-terracotta">
          {error.message as string}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "h-12 w-full rounded-xl border border-border-strong bg-paper px-4 font-sans text-base text-ink outline-none transition-colors placeholder:text-muted-ink/60 focus:border-deep-olive";

function TextInput({
  name,
  register,
  errors,
  type = "text",
  autoComplete,
  placeholder,
}: {
  name: keyof EnquiryValues;
  register: RegisterT;
  errors: ErrorsT;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <input
      id={name}
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      aria-invalid={!!errors[name]}
      aria-describedby={errors[name] ? `${name}-error` : undefined}
      className={inputClass}
      {...register(name)}
    />
  );
}

function Select({
  name,
  register,
  errors,
  options,
}: {
  name: keyof EnquiryValues;
  register: RegisterT;
  errors: ErrorsT;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      id={name}
      aria-invalid={!!errors[name]}
      aria-describedby={errors[name] ? `${name}-error` : undefined}
      className={cn(inputClass, "appearance-none pr-10")}
      {...register(name)}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

/** Accessible radio-card group. */
function RadioGroup({
  name,
  register,
  errors,
  options,
  columns = 2,
}: {
  name: keyof EnquiryValues;
  register: RegisterT;
  errors: ErrorsT;
  options: { value: string; label: string; hint?: string }[];
  columns?: number;
}) {
  return (
    <div
      role="radiogroup"
      aria-describedby={errors[name] ? `${name}-error` : undefined}
      className={cn(
        "grid gap-3",
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1",
      )}
    >
      {options.map((o) => (
        <label
          key={o.value}
          className="group flex cursor-pointer items-start gap-3 rounded-2xl border border-border-strong bg-paper p-4 transition-colors hover:border-deep-olive has-checked:border-deep-olive has-checked:bg-deep-olive/8 has-focus-visible:outline-2 has-focus-visible:outline-deep-olive"
        >
          <input
            type="radio"
            value={o.value}
            className="mt-1 h-4 w-4 accent-deep-olive"
            {...register(name)}
          />
          <span>
            <span className="block font-sans text-sm font-medium text-ink">
              {o.label}
            </span>
            {o.hint && (
              <span className="mt-0.5 block text-xs text-muted-ink">{o.hint}</span>
            )}
          </span>
        </label>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Steps
// ---------------------------------------------------------------------------

function StepAbout({ register, errors }: { register: RegisterT; errors: ErrorsT }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="Name" name="name" errors={errors}>
        <TextInput name="name" register={register} errors={errors} autoComplete="name" />
      </Field>
      <Field label="Email" name="email" errors={errors}>
        <TextInput
          name="email"
          type="email"
          register={register}
          errors={errors}
          autoComplete="email"
        />
      </Field>
      <Field label="Age range" name="ageRange" errors={errors} optional>
        <Select
          name="ageRange"
          register={register}
          errors={errors}
          options={[
            { value: "", label: "Prefer not to say" },
            { value: "Late 20s", label: "Late 20s" },
            { value: "30s", label: "30s" },
            { value: "40s", label: "40s" },
            { value: "50+", label: "50+" },
          ]}
        />
      </Field>
      <Field label="Country of residence" name="country" errors={errors}>
        <TextInput
          name="country"
          register={register}
          errors={errors}
          autoComplete="country-name"
        />
      </Field>
      <Field label="Is this your first solo trip?" name="firstSoloTrip" errors={errors}>
        <RadioGroup
          name="firstSoloTrip"
          register={register}
          errors={errors}
          options={[
            { value: "yes", label: "Yes, my first" },
            { value: "no", label: "No, I've travelled solo before" },
          ]}
        />
      </Field>
    </div>
  );
}

function StepJourney({ register, errors }: { register: RegisterT; errors: ErrorsT }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="Destination, or open to ideas" name="destination" errors={errors}>
        <TextInput
          name="destination"
          register={register}
          errors={errors}
          placeholder="e.g. Andalucía, or open to suggestions"
        />
      </Field>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Proposed dates" name="dates" errors={errors} optional>
          <TextInput
            name="dates"
            register={register}
            errors={errors}
            placeholder="e.g. late September"
          />
        </Field>
        <Field label="Trip length" name="tripLength" errors={errors} optional>
          <TextInput
            name="tripLength"
            register={register}
            errors={errors}
            placeholder="e.g. 7–9 nights"
          />
        </Field>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Departure city" name="departureCity" errors={errors} optional>
          <TextInput name="departureCity" register={register} errors={errors} />
        </Field>
        <Field label="Number of destinations" name="numDestinations" errors={errors} optional>
          <Select
            name="numDestinations"
            register={register}
            errors={errors}
            options={[
              { value: "", label: "Not sure yet" },
              { value: "1", label: "One" },
              { value: "2", label: "Two" },
              { value: "3+", label: "Three or more" },
            ]}
          />
        </Field>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Budget (excluding flights)" name="budget" errors={errors} optional>
          <TextInput
            name="budget"
            register={register}
            errors={errors}
            placeholder="e.g. 1,500–2,500"
          />
        </Field>
        <Field label="Currency" name="currency" errors={errors}>
          <Select
            name="currency"
            register={register}
            errors={errors}
            options={[
              { value: "EUR", label: "EUR (€)" },
              { value: "GBP", label: "GBP (£)" },
              { value: "USD", label: "USD ($)" },
              { value: "AUD", label: "AUD ($)" },
              { value: "CAD", label: "CAD ($)" },
            ]}
          />
        </Field>
      </div>
    </div>
  );
}

function StepStyle({
  register,
  errors,
  selected,
}: {
  register: RegisterT;
  errors: ErrorsT;
  selected: string[];
}) {
  return (
    <div className="flex flex-col gap-8">
      <Field label="Which best describes your style?" name="style" errors={errors}>
        <RadioGroup
          name="style"
          register={register}
          errors={errors}
          columns={1}
          options={[
            { value: "Budget", label: "Budget", hint: "Simple, characterful, value-led" },
            { value: "Comfortable", label: "Comfortable", hint: "A balance of comfort and value" },
            { value: "Boutique", label: "Boutique", hint: "Design-led, characterful stays" },
            { value: "Luxury", label: "Luxury", hint: "The finest available" },
            { value: "Mixed", label: "Mixed", hint: "Simple where it doesn't matter, special where it does" },
          ]}
        />
      </Field>

      <fieldset className="border-0 p-0">
        <legend className="mb-2 font-sans text-sm font-medium text-ink">
          Interests
        </legend>
        <p className="mb-4 text-xs text-muted-ink">Choose any that apply.</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {interestOptions.map((interest) => {
            const checked = selected.includes(interest);
            return (
              <label
                key={interest}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-full border px-4 py-3 text-sm transition-colors",
                  checked
                    ? "border-deep-olive bg-deep-olive/8 text-ink"
                    : "border-border-strong bg-paper text-muted-ink hover:border-deep-olive",
                )}
              >
                <input
                  type="checkbox"
                  value={interest}
                  className="h-4 w-4 accent-deep-olive"
                  {...register("interests")}
                />
                {interest}
              </label>
            );
          })}
        </div>
        {errors.interests && (
          <p role="alert" className="mt-3 text-xs text-terracotta">
            {errors.interests.message as string}
          </p>
        )}
      </fieldset>
    </div>
  );
}

function StepSupport({ register, errors }: { register: RegisterT; errors: ErrorsT }) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-muted-ink">
        Not sure which is right? Choose &ldquo;Still deciding&rdquo; and we&apos;ll
        recommend the best fit.
      </p>
      <Field label="Level of support" name="support" errors={errors}>
        <RadioGroup
          name="support"
          register={register}
          errors={errors}
          columns={1}
          options={[
            { value: "Edit", label: "Alma Edit", hint: "Curated recommendations and trusted guidance, from €175" },
            { value: "Journey", label: "Alma Journey", hint: "A complete personalised trip plan, from €395" },
            { value: "Concierge", label: "Alma Concierge", hint: "High-touch planning and personal support, from €795" },
            { value: "Unsure", label: "Still deciding", hint: "Recommend the right fit for me" },
          ]}
        />
      </Field>
    </div>
  );
}

function StepDetails({ register, errors }: { register: RegisterT; errors: ErrorsT }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="What would make this trip feel special?" name="special" errors={errors} optional>
        <textarea
          id="special"
          rows={3}
          className={cn(inputClass, "h-auto py-3")}
          {...register("special")}
        />
      </Field>
      <Field label="Is there anything you're worried about?" name="worried" errors={errors} optional>
        <textarea
          id="worried"
          rows={3}
          className={cn(inputClass, "h-auto py-3")}
          {...register("worried")}
        />
      </Field>
      <Field label="Accessibility or dietary needs" name="accessibility" errors={errors} optional>
        <textarea
          id="accessibility"
          rows={2}
          className={cn(inputClass, "h-auto py-3")}
          {...register("accessibility")}
        />
      </Field>
      <Field label="How did you hear about Alma?" name="hearAbout" errors={errors} optional>
        <TextInput name="hearAbout" register={register} errors={errors} />
      </Field>
    </div>
  );
}

function ReviewStep({
  values,
  register,
  errors,
  submitCount,
}: {
  values: EnquiryValues;
  register: RegisterT;
  errors: ErrorsT;
  submitCount: number;
}) {
  const rows: [string, string | undefined][] = [
    ["Name", values.name],
    ["Email", values.email],
    ["Country", values.country],
    ["First solo trip", values.firstSoloTrip === "yes" ? "Yes" : values.firstSoloTrip === "no" ? "No" : undefined],
    ["Destination", values.destination],
    ["Dates", values.dates],
    ["Trip length", values.tripLength],
    ["Budget", values.budget ? `${values.budget} ${values.currency}` : undefined],
    ["Style", values.style],
    ["Interests", values.interests?.join(", ")],
    ["Support", values.support],
  ];

  return (
    <div className="flex flex-col gap-8">
      <dl className="divide-y divide-border border-y border-border">
        {rows
          .filter(([, v]) => v)
          .map(([label, value]) => (
            <div key={label} className="grid grid-cols-3 gap-4 py-3">
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-ink">
                {label}
              </dt>
              <dd className="col-span-2 text-sm text-ink">{value}</dd>
            </div>
          ))}
      </dl>

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-deep-olive"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            {...register("consent")}
          />
          <span className="text-sm text-muted-ink">
            I&apos;m happy for Alma to use these details to respond to my enquiry, in line with the{" "}
            <br />privacy notice. We&apos;ll never share your information.
          </span>
        </label>
        {errors.consent && submitCount > 0 && (
          <p id="consent-error" role="alert" className="mt-2 flex items-center gap-1.5 text-xs text-terracotta">
            <Info className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {errors.consent.message as string}
          </p>
        )}
      </div>
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="mx-auto w-full max-w-2xl text-center" role="status">
      {/* Check + message */}
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-deep-olive/15 text-deep-olive">
        <Check className="h-7 w-7" aria-hidden="true" />
      </span>
      <h2 className="mt-6 font-serif text-3xl sm:text-4xl">Thank you, your enquiry is on its way.</h2>
      <p className="measure mx-auto mt-4 text-muted-ink">
        We read every enquiry personally and will be in touch within a few working
        days to start shaping your journey. In the meantime, feel free to explore
        our destinations for inspiration.
      </p>

      {/* Scenic CTA with buttons overlaid */}
      <div className="relative mt-10 flex h-56 w-full items-center justify-center overflow-hidden rounded-3xl sm:h-72">
        <Image
          src="https://images.unsplash.com/photo-1534250617995-d16425086b91?auto=format&fit=crop&w=1200&q=75"
          alt="Whitewashed harbour town of Monopoli, Puglia"
          fill
          className="object-cover"
          priority
        />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/destinations"
            className="inline-flex min-h-12 items-center rounded-full bg-surface px-7 font-sans text-sm font-medium tracking-wide text-ink hover:bg-paper"
          >
            Explore Destinations
          </Link>
          <button
            type="button"
            onClick={onReset}
            className="text-sm font-medium text-surface/90 underline-offset-2 hover:underline"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    </div>
  );
}
