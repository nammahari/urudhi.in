<script lang="ts">
	import Button from './Button.svelte';
	import rocket from '$lib/assets/rocket.webp';

	export interface HeroSectionProps {
		onHostClick: () => void;
	}

	let { onHostClick }: HeroSectionProps = $props();
</script>

<section class="flex w-full flex-1 flex-col items-center justify-center px-6 py-12 md:px-12 lg:px-16">
	<div class="mx-auto w-full max-w-7xl">
		<div class="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
			<img
				src={rocket}
				alt="Rocket illustration"
				class="order-first h-auto w-56 flex-shrink-0 object-contain md:order-last md:w-64 lg:w-80"
				loading="eager"
				width="320"
				height="320"
			/>

			<div class="flex max-w-2xl flex-col items-center text-center md:items-start md:text-left">
				<h1 class="mb-4 text-4xl font-bold leading-tight text-gray-900 md:mb-6 md:text-5xl lg:text-6xl">
					Made by & for<br />
					<span class="italic text-green-600">communities</span>
				</h1>

				<p class="mb-6 text-base text-gray-600 md:mb-8 md:text-lg lg:text-xl">
					A FOSS platform to host, share, and manage community events
				</p>

				<Button variant="primary" onclick={onHostClick} shortcutKey="h">Host Your First Event</Button>
			</div>
		</div>
	</div>
</section>
