import { clsx } from 'clsx';

export default function SectionTitle({ title, subtitle, centered = true, className }) {
  return (
    <div className={clsx(centered && 'text-center', 'mb-16', className)}>
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ns-white tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-ns-gray max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
