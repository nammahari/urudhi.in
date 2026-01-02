<script lang="ts">
	import type { Snippet } from 'svelte';

	export interface ModalProps {
		isOpen: boolean;
		onClose: () => void;
		title: string;
		children: Snippet;
	}

	let { isOpen = $bindable(), onClose, title, children }: ModalProps = $props();

	let closeButtonElement: HTMLButtonElement | undefined = $state();
	let previousActiveElement: HTMLElement | null = null;

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			e.preventDefault();
			onClose();
		}
	}

	$effect(() => {
		if (isOpen) {
			previousActiveElement = document.activeElement as HTMLElement;
			document.body.style.overflow = 'hidden';

			// Focus close button after modal renders
			setTimeout(() => closeButtonElement?.focus(), 0);

			return () => {
				document.body.style.overflow = '';
				previousActiveElement?.focus();
			};
		}
	});
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
		onclick={handleBackdropClick}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
		tabindex="-1"
	>
		<div class="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
			<div class="mb-4 flex items-center justify-between">
				<h2 id="modal-title" class="text-2xl font-semibold">{title}</h2>
				<button
					bind:this={closeButtonElement}
					type="button"
					onclick={onClose}
					class="rounded-lg p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
					aria-label="Close modal"
				>
					<svg
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<div>{@render children()}</div>
		</div>
	</div>
{/if}
