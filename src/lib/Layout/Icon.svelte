<script lang="ts">
	import type { ActionIcon } from '$lib/Actions';

	export let icon: ActionIcon;

	if (
		icon &&
		!(icon instanceof Object) &&
		typeof icon !== 'function' &&
		typeof icon !== 'string' &&
		typeof icon?.$$render === 'undefined'
	) {
		console.error(`Wrong icon type: ${typeof icon}`, icon);
	}
</script>

{#if icon instanceof Object || typeof icon === 'function' || typeof icon?.$$render !== 'undefined'}
	<svelte:component this={icon} {...$$restProps} />
{:else if typeof icon === 'string'}
	{icon}
{:else}
	{(icon || '').toString()}
{/if}
