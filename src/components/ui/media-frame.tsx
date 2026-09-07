import { cn } from "@/lib/cn";

export function MediaFrame({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn("group", className)}>
      <div className="overflow-hidden rounded-md bg-surface shadow-[var(--shadow-border)]">
        <div className="flex items-center gap-2 border-b border-line px-3 py-2">
          <span className="size-1.5 rounded-full bg-subtle" />
          <span className="truncate font-mono text-micro text-subtle">{caption ?? src}</span>
        </div>
        <div className="relative aspect-16/9 overflow-hidden bg-bg-raised">
          <img
            src={src}
            alt={alt}
            className="size-full object-cover transition-[transform,filter] duration-[var(--motion-slow)] ease-[var(--ease-smooth-out)] group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </div>
    </figure>
  );
}
