export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`mb-10 max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">{eyebrow}</p>
      ) : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-copy mt-4">{description}</p> : null}
    </div>
  );
}
