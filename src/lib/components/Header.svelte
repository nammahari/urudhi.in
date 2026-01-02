<script lang="ts">
	import Button from './Button.svelte';

	export interface HeaderProps {
		onSignInClick: () => void;
	}

	let { onSignInClick }: HeaderProps = $props();
</script>

<header class="w-full px-4 py-2 md:px-12 md:py-4 lg:px-16">
	<nav class="mx-auto flex max-w-7xl items-center justify-between">
		<a href="/" class="text-base font-semibold text-gray-900 md:text-2xl">urudhi.in</a>

		<div class="flex items-center gap-3 md:gap-6">
			<a
				href="/events"
				class="text-sm text-gray-700 transition-colors hover:text-gray-900 md:text-base"
			>
				Explore Events
			</a>
			<Button variant="primary" onclick={onSignInClick} shortcutKey="s">Sign In</Button>
		</div>
	</nav>
</header>
