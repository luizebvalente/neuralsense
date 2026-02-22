import { clsx } from 'clsx';

export default function SectionTitle({ title, subtitle, centered = true, className }) {
  return (
    <div className={clsx(centered && 'text-center', 'mb-16 sm:mb-20', className)}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ns-white tracking-tight mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-ns-gray max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
