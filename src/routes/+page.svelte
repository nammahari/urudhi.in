<script lang="ts">
	import { goto } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { useKeyboardShortcut } from '$lib/hooks/useKeyboardShortcut.svelte';

	let isSignInModalOpen = $state(false);

	function handleSignInClick() {
		isSignInModalOpen = true;
	}

	function handleCloseModal() {
		isSignInModalOpen = false;
	}

	function handleHostClick() {
		goto('/host');
	}

	useKeyboardShortcut({ key: 'h', onTrigger: handleHostClick });
	useKeyboardShortcut({ key: 's', onTrigger: handleSignInClick });
</script>

<div class="landing-page flex min-h-screen flex-col">
	<Header onSignInClick={handleSignInClick} />
	<HeroSection onHostClick={handleHostClick} />
	<footer class="w-full px-6 pb-8 text-center md:px-12 lg:px-16">
		<p class="text-sm text-gray-600">From the hands of team juicy details !</p>
	</footer>
</div>

<Modal isOpen={isSignInModalOpen} onClose={handleCloseModal} title="Sign In">
	<p class="mb-4 text-gray-600">Sign in functionality coming soon!</p>
	<p class="text-sm text-gray-500">
		This is a placeholder modal. Authentication will be implemented in a future release.
	</p>
</Modal>
