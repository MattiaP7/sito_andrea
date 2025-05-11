// components creato da me! aspettando che shadcn ne crei uno suo...

"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
  iconClassName?: string;
  lineClassName?: string;
  dateClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const Timeline = ({
  items,
  className,
  iconClassName,
  lineClassName,
  dateClassName,
  titleClassName,
  descriptionClassName,
}: TimelineProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Linea verticale della timeline */}
      <div
        className={cn(
          "absolute left-4 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700",
          "md:left-1/2 md:-translate-x-1/2",
          lineClassName
        )}
      />

      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "relative flex gap-6",
              "md:odd:flex-row-reverse md:justify-between"
            )}
          >
            {/* Punto/icona della timeline */}
            <div
              className={cn(
                "absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 ring-8 ring-slate-50 dark:bg-slate-800 dark:ring-slate-900",
                "md:left-1/2 md:-translate-x-1/2",
                iconClassName
              )}
            >
              {item.icon || (
                <div className="h-3 w-3 rounded-full bg-slate-400 dark:bg-slate-500" />
              )}
            </div>

            {/* Contenuto */}
            <div
              className={cn(
                "ml-14 w-full space-y-1",
                "md:ml-0 md:w-[calc(50%-2rem)]",
                index % 2 === 0 ? "md:pr-14" : "md:pl-14"
              )}
            >
              <p
                className={cn(
                  "text-sm font-medium text-slate-500 dark:text-slate-400",
                  dateClassName
                )}
              >
                {item.date}
              </p>
              <h3
                className={cn(
                  "text-lg font-semibold text-slate-900 dark:text-white",
                  titleClassName
                )}
              >
                {item.title}
              </h3>
              <p
                className={cn(
                  "text-slate-600 dark:text-slate-300",
                  descriptionClassName
                )}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
