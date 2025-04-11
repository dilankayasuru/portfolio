"use client"
import { useEffect } from 'react';

export const useDisableScroll = (active: boolean) => {
    useEffect(() => {
        if (!active) return;
        window.scrollTo(0, 0);

        const preventDefault = (e: WheelEvent | TouchEvent) => {
            e.preventDefault();
        };

        const preventScrollKeys = (e: KeyboardEvent) => {
            const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
            if (keys.includes(e.key)) {
                e.preventDefault();
            }
        };

        window.addEventListener('wheel', preventDefault, { passive: false });
        window.addEventListener('touchmove', preventDefault, { passive: false });
        window.addEventListener('keydown', preventScrollKeys, { passive: false });

        return () => {
            window.removeEventListener('wheel', preventDefault);
            window.removeEventListener('touchmove', preventDefault);
            window.removeEventListener('keydown', preventScrollKeys);
        };
    }, [active]);
}