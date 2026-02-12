import { useEffect } from "react";

type Key = string;
type Modifier = "meta" | "ctrl" | "alt" | "shift" | "enter";

interface ShortcutOptions {
  key: Key;
  modifiers?: Modifier[];
  callback: () => void;
}

export function useKeyboardShortcut({ key, modifiers = [], callback }: ShortcutOptions) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const metaOk = modifiers.includes("meta") ? e.metaKey || e.ctrlKey : true;
      const altOk = modifiers.includes("alt") ? e.altKey : true;
      const shiftOk = modifiers.includes("shift") ? e.shiftKey : true;

      if (metaOk && altOk && shiftOk && e.key === key) {
        e.preventDefault();
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [key, modifiers, callback]);
}