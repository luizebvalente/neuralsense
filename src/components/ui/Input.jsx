import { clsx } from 'clsx';

export default function Input({ label, error, className, textarea, ...props }) {
  const inputClasses = clsx(
    'w-full bg-ns-panel/40 border border-ns-border rounded-xl px-4 py-3 text-ns-white placeholder-ns-muted/60 text-sm',
    'focus:outline-none focus:border-ns-accent/50',
    'transition-all duration-200',
    error && 'border-red-500',
    className
  );

  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-ns-gray">{label}</label>}
      {textarea ? (
        <textarea className={clsx(inputClasses, 'resize-none min-h-[120px]')} {...props} />
      ) : (
        <input className={inputClasses} {...props} />
      )}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
