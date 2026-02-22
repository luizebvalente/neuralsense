import { clsx } from 'clsx';

export default function Input({ label, error, className, textarea, ...props }) {
  const inputClasses = clsx(
    'w-full bg-ns-dark border border-ns-border rounded-xl px-4 py-3 text-ns-white placeholder-ns-muted',
    'focus:outline-none focus:border-ns-accent focus:shadow-[0_0_15px_rgba(37,99,235,0.1)]',
    'transition-all duration-300',
    error && 'border-red-500',
    className
  );

  return (
    <div className="space-y-1.5">
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
