type SectionHeaderProps = {
  number: string;
  title: string;
  label: string;
  align?: "start" | "end";
};

export function SectionHeader({
  number,
  title,
  label,
  align = "start",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 flex items-end justify-between gap-8 border-t hairline pt-5 md:mb-16 ${
        align === "end" ? "md:ml-auto md:max-w-3xl" : ""
      }`}
    >
      <div>
        <p className="mb-4 font-mono text-[11px] tracking-[0.24em] text-[var(--color-sage)]">
          {number}
        </p>
        <h2 className="font-serif text-4xl font-normal tracking-[0.03em] text-[var(--color-charcoal)] md:text-6xl">
          {title}
        </h2>
      </div>
      <p className="hidden max-w-36 text-right text-[11px] uppercase tracking-[0.24em] text-[var(--color-ash)] sm:block">
        {label}
      </p>
    </div>
  );
}
