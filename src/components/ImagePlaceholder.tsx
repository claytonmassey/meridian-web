import { type ReactNode } from "react";

type ImagePlaceholderProps = {
  aspectRatio?: "video" | "square" | "wide" | "auto";
  label?: string;
  className?: string;
  children?: ReactNode;
};

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
  auto: "",
};

export function ImagePlaceholder({
  aspectRatio = "video",
  label = "Replace with your image",
  className = "",
  children,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-xl bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400 ${aspectClasses[aspectRatio]} ${className}`}
    >
      {children ?? (
        <span className="text-center text-sm font-medium">{label}</span>
      )}
    </div>
  );
}
