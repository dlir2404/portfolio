"use client"

import { useEffect } from "react";
import { CursorEffectResult, trailingCursor } from "cursor-effects";

export default function TrailingCursor() {
    useEffect(() => {
        const effect: CursorEffectResult = new (trailingCursor as any)({
            particles: 20,
            rate: 0.5
        })

        return () => {
            const canvas = document.querySelector("canvas.cursor-effects") as HTMLCanvasElement;
            if (canvas) {
                canvas.remove();
            }
            effect.destroy();
        }
    }, []);

    return null;
}