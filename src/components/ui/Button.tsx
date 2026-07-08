import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans text-sm font-medium tracking-wide " +
  "min-h-[44px] px-7 transition-colors duration-300 focus-visible:outline-2 " +
  "focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "bg-deep-olive text-surface hover:bg-ink border border-transparent",
  secondary:
    "bg-transparent text-ink border border-border-strong hover:bg-ink hover:text-surface",
  ghost: "bg-transparent text-ink hover:text-terracotta",
  light:
    "bg-paper/95 text-ink border border-transparent hover:bg-paper",
};

const sizes: Record<Size, string> = {
  md: "h-11 text-sm",
  lg: "h-13 px-8 text-[0.95rem] py-3.5",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className"> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props as ButtonAsLink;
    void _v;
    void _s;
    void _c;
    void _ch;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonAsButton;
  void _v;
  void _s;
  void _c;
  void _ch;
  void _h;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
