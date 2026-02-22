import FadeIn from './FadeIn';

export default function SectionTitle({ badge, title, subtitle, centered = true, className }) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-16 sm:mb-20 lg:mb-28 ${className || ''}`}>
      {badge && (
        <FadeIn delay={0}>
          <div className="mb-8">
            <span className="badge-ns">
              <span className="w-1.5 h-1.5 rounded-full bg-ns-accent animate-glow-pulse" />
              {badge}
            </span>
          </div>
        </FadeIn>
      )}

      <FadeIn delay={0.1}>
        <h2 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.5rem] font-bold text-ns-white tracking-tight leading-[1.08] mb-6 sm:mb-8">
          {title}
        </h2>
      </FadeIn>

      {subtitle && (
        <FadeIn delay={0.2}>
          <p className={`text-base sm:text-lg text-ns-gray leading-[1.75] ${centered ? 'max-w-[620px] mx-auto' : ''}`}>
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
