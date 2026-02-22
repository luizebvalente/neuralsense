import { clsx } from 'clsx';

export default function Button({ children, variant = 'primary', size = 'md', className, icon: Icon, iconPosition = 'right', loading, ...props }) {
  const base = 'inline-flex items-center justify-center gap-2.5 font-semibold transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-xl';

  const variants = {
    primary: 'bg-ns-accent text-white hover:bg-ns-accent-hover active:scale-[0.98] shadow-[0_0_24px_rgba(99,102,241,0.25)] hover:shadow-[0_0_32px_rgba(99,102,241,0.35)]',
    secondary: 'bg-transparent border border-ns-border text-ns-gray hover:text-ns-white hover:border-ns-border-hover hover:bg-ns-elevated/40',
    ghost: 'bg-transparent text-ns-gray hover:text-ns-white',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-[15px]',
  };

  return (
    <button className={clsx(base, variants[variant], sizes[size], className)} disabled={loading} {...props}>
      {loading && <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />}
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </button>
  );
}
