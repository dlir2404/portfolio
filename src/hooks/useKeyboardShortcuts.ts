import { useEffect } from 'react';

interface UseKeyboardShortcutsOptions {
  onSearch?: () => void;
  onEscape?: () => void;
}

export function useKeyboardShortcuts({ onSearch, onEscape }: UseKeyboardShortcutsOptions) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Cmd/Ctrl + K to focus search
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        onSearch?.();
      }
      
      // Escape to clear search
      if (event.key === 'Escape') {
        onEscape?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onSearch, onEscape]);
}
