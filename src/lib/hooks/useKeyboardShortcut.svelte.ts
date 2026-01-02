import { onMount } from 'svelte';

interface KeyboardShortcutOptions {
	key: string;
	onTrigger: () => void;
	preventDefault?: boolean;
}

/**
 * Registers a keyboard shortcut that works globally
 * Automatically ignores shortcuts when user is typing in an input/textarea
 */
export function useKeyboardShortcut(options: KeyboardShortcutOptions) {
	const { key, onTrigger, preventDefault = true } = options;

	function handleKeyPress(e: KeyboardEvent) {
		const target = e.target as HTMLElement;
		const isTyping = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';

		if (isTyping) {
			return;
		}

		if (e.key.toLowerCase() === key.toLowerCase()) {
			if (preventDefault) {
				e.preventDefault();
			}
			onTrigger();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeyPress);
		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		};
	});
}
