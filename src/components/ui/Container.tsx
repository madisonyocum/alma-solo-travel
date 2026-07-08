import { cn } from "@/lib/utils";

/** Standard editorial max-width with responsive gutters. */
export function Container({
  children,
  className,
  size = "default",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
  as?: React.ElementType;
}) {
  const width =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
        ? "max-w-[90rem]"
        : "max-w-336";
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-8 lg:px-10", width, className)}>
      {children}
    </Tag>
  );
}
