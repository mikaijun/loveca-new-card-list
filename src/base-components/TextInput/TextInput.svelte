<script lang="ts">
	export let value = '';
	export let placeholder = '';
	export let type: 'text' | 'password' | 'email' = 'text';
	export let disabled = false;
	export let required = false;
	export let className = '';
	export let id: string = '';
	export let name: string = '';

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		value = target.value;
	}

	const baseClasses =
		'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed';
</script>

<input
	{type}
	{value}
	{placeholder}
	{disabled}
	{required}
	{id}
	{name}
	class="{baseClasses} {className}"
	on:input={handleInput}
/>
