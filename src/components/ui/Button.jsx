import { clsx } from 'clsx';

export default function Button({ children, variant = 'primary', size = 'md', className, icon: Icon, iconPosition = 'right', loading, ...props }) {
  const base = 'inline-flex items-center justify-center gap-2.5 font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-ns-accent text-white hover:bg-ns-accent-dark active:scale-[0.98]',
    secondary: 'bg-transparent border border-ns-border text-ns-gray hover:text-ns-white hover:border-ns-muted',
    ghost: 'bg-transparent text-ns-gray hover:text-ns-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-sm rounded-xl',
    lg: 'px-8 py-3.5 text-[15px] rounded-xl',
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
