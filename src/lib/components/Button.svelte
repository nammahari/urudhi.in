<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	export interface ButtonProps {
		variant?: 'primary' | 'secondary';
		href?: string;
		onclick?: () => void;
		class?: string;
		shortcutKey?: string;
		children: Snippet;
	}

	let {
		variant = 'primary',
		href,
		onclick,
		class: className,
		shortcutKey,
		children
	}: ButtonProps = $props();

	const variantClasses = {
		primary: 'bg-black text-white hover:bg-gray-800 active:bg-gray-900',
		secondary: 'bg-transparent text-gray-900 hover:text-gray-700 active:text-gray-900'
	};
</script>

{#if href}
	<a
		{href}
		class={cn(
			'inline-flex items-center gap-1.5 md:gap-3 justify-center rounded-lg px-3 py-1.5 md:px-6 md:py-3 text-sm md:text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2',
			variantClasses[variant],
			className
		)}
		aria-keyshortcuts={shortcutKey ? shortcutKey.toUpperCase() : undefined}
	>
		{@render children()}
		{#if shortcutKey}
			<span class="hidden md:inline-flex rounded bg-gray-700 px-2 py-1 text-xs font-semibold text-white" aria-hidden="true">
				{shortcutKey.toUpperCase()}
			</span>
		{/if}
	</a>
{:else}
	<button
		type="button"
		{onclick}
		class={cn(
			'inline-flex items-center gap-1.5 md:gap-3 justify-center rounded-lg px-3 py-1.5 md:px-6 md:py-3 text-sm md:text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2',
			variantClasses[variant],
			className
		)}
		aria-keyshortcuts={shortcutKey ? shortcutKey.toUpperCase() : undefined}
	>
		{@render children()}
		{#if shortcutKey}
			<span class="hidden md:inline-flex rounded bg-gray-700 px-2 py-1 text-xs font-semibold text-white" aria-hidden="true">
				{shortcutKey.toUpperCase()}
			</span>
		{/if}
	</button>
{/if}
