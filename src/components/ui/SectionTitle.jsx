import FadeIn from './FadeIn';

export default function SectionTitle({ badge, title, subtitle, centered = true }) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-20 sm:mb-28 md:mb-32 lg:mb-40`}>
      {badge && (
        <FadeIn delay={0}>
          <div className="mb-10">
            <span className="badge-ns">
              <span className="w-1.5 h-1.5 rounded-full bg-ns-accent animate-glow-pulse" />
              {badge}
            </span>
          </div>
        </FadeIn>
      )}

      <FadeIn delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold text-ns-white tracking-tight leading-[1.05] mb-8 sm:mb-10">
          {title}
        </h2>
      </FadeIn>

      {subtitle && (
        <FadeIn delay={0.2}>
          <p className={`text-base sm:text-lg md:text-xl text-ns-gray leading-[1.8] ${centered ? 'max-w-[640px] mx-auto' : 'max-w-[640px]'}`}>
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
