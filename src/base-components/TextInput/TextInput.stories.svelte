<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import TextInput from './TextInput.svelte';

	const { Story } = defineMeta({
		component: TextInput,
		decorators: [
			/* ... */
		],
		parameters: {
			/* ... */
		}
	});
</script>

<Story name="Default" args={{}} />
