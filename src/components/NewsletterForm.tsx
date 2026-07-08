"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z.string().email("Please enter a valid email address."),
});
type FormValues = z.infer<typeof schema>;

/**
 * Newsletter / early-access signup. Posts to the mock /api/subscribe route
 * and shows an accessible success state. No real emails are sent until an
 * email provider is configured (see .env.example).
 */
export function NewsletterForm({
  buttonLabel = "Subscribe",
  variant = "default",
}: {
  buttonLabel?: string;
  variant?: "default" | "light";
}) {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    } catch {
      // Mock endpoint, swallow network errors in local dev.
    }
    setDone(true);
  }

  const light = variant === "light";

  if (done) {
    return (
      <p
        role="status"
        className={cn(
          "flex items-center gap-2 font-sans text-sm",
          light ? "text-surface" : "text-deep-olive",
        )}
      >
        <Check className="h-4 w-4" aria-hidden="true" />
        Thank you, you&apos;re on the list. Look out for a note soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            autoComplete="email"
            placeholder="Email address"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "newsletter-error" : undefined}
            className={cn(
              "h-12 w-full border-b bg-transparent px-1 font-sans text-base outline-none transition-colors placeholder:text-muted-ink/70 focus:border-terracotta",
              light
                ? "border-surface/40 text-surface placeholder:text-surface/60"
                : "border-border-strong text-ink",
            )}
            {...register("email")}
          />
          {errors.email && (
            <p
              id="newsletter-error"
              className={cn(
                "mt-2 font-sans text-xs",
                light ? "text-sun" : "text-terracotta",
              )}
            >
              {errors.email.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 font-sans text-sm font-medium tracking-wide transition-colors disabled:opacity-60",
            light
              ? "bg-surface text-ink hover:bg-paper"
              : "bg-deep-olive text-surface hover:bg-ink",
          )}
        >
          {isSubmitting ? "Sending…" : buttonLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
