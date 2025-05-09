<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TextInput from '$base/TextInput/TextInput.svelte';

	const { Story } = defineMeta({
		component: TextInput,
		title: 'Components/TextInput'
	});
</script>

<Story name="Default" args={{ placeholder: 'カード名を入力...', className: 'w-full' }} />

<Story
	name="With Value"
	args={{ value: "μ's 高坂穂乃果 UR", placeholder: 'カード名を入力...', className: 'w-full' }}
/>

<Story
	name="With Custom Class"
	args={{ className: 'bg-pink-50 w-full', placeholder: 'カード名を入力...' }}
/>

<Story name="Narrow Width" args={{ placeholder: 'カード名を入力...', className: 'w-24' }} />
