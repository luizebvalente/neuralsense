import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollTo = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return scrollTo;
}
