import { clsx } from 'clsx';

export default function Input({ label, error, className, textarea, ...props }) {
  const inputClasses = clsx(
    'w-full bg-ns-surface/60 border border-ns-border rounded-xl px-5 py-3.5 text-ns-white placeholder-ns-muted/50 text-sm font-[\'DM_Sans\']',
    'focus:outline-none focus:border-ns-accent/40 focus:bg-ns-surface/80 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.08)]',
    'transition-all duration-300',
    error && 'border-red-500/60',
    className
  );

  return (
    <div className="space-y-2.5">
      {label && <label className="block text-sm font-medium text-ns-gray">{label}</label>}
      {textarea ? (
        <textarea className={clsx(inputClasses, 'resize-none min-h-[140px]')} {...props} />
      ) : (
        <input className={inputClasses} {...props} />
      )}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
