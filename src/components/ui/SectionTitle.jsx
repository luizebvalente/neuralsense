import { clsx } from 'clsx';

export default function SectionTitle({ title, subtitle, centered = true, className }) {
  return (
    <div className={clsx(centered && 'text-center', 'mb-16 sm:mb-20 lg:mb-24', className)}>
      <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] font-bold text-ns-white tracking-tight leading-[1.1] mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className={clsx(
          'text-[1rem] sm:text-[1.125rem] text-ns-gray leading-[1.7]',
          centered && 'max-w-[600px] mx-auto'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
