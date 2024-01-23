import { useState, useEffect } from 'react';

export function useMediaQuery(width: number): boolean {
  const query = `(min-width: ${width}px)`;
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatches = () => {
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
    };
    const listener = () => { updateMatches(); };
    updateMatches(); // Initial check
    media.addEventListener('change', listener);

    return () => { media.removeEventListener('change', listener); };
  }, [query, matches]);

  return matches;
}