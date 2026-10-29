import { useEffect } from 'react';

/** Adds `hide-scrollbar` to <html> while `enabled` (mirrors the old per-page <style> block). */
export default function useHideScrollbar(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;
    const el = document.documentElement;
    el.classList.add('hide-scrollbar');
    return () => el.classList.remove('hide-scrollbar');
  }, [enabled]);
}
