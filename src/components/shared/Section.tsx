type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          {eyebrow && (
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-400">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-zinc-400 leading-relaxed">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
