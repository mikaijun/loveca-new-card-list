<script lang="ts">
	export let value = '';
	export let placeholder = '';
	export let className = '';

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		value = target.value;
	}

	const baseClasses =
		'px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed';
</script>

<input {value} {placeholder} class="{baseClasses} {className}" on:input={handleInput} />
