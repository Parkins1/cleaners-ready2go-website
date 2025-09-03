import React from "react";
import { cn } from "@/lib/utils";

type ContentCardProps<T extends React.ElementType = "div"> = {
  as?: T;
  className?: string;
  interactive?: boolean;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export default function ContentCard<T extends React.ElementType = "div">(
  props: ContentCardProps<T>
) {
  const { as, className, interactive, children, ...rest } = props as ContentCardProps;
  const Comp = (as || "div") as React.ElementType;

  return (
    <Comp
      className={cn(
        "relative rounded-xl border border-slate-300 bg-white p-6 sm:p-8 shadow",
        interactive &&
          "transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-emerald-400 outline-none",
        className
      )}
      tabIndex={interactive ? 0 : undefined}
      {...rest}
    >
      {children}
    </Comp>
  );
}
