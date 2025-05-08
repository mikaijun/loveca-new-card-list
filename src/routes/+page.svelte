<script lang="ts">
	import { onMount } from 'svelte';

	let lovecas: { id: number; amount: number; date: string; note: string }[] = [];
	let newAmount = '';
	let newNote = '';

	onMount(() => {
		const savedLovecas = localStorage.getItem('lovecas');
		if (savedLovecas) {
			lovecas = JSON.parse(savedLovecas);
		}
	});

	function addLoveca() {
		if (!newAmount) return;

		const newLoveca = {
			id: Date.now(),
			amount: parseInt(newAmount),
			date: new Date().toLocaleDateString(),
			note: newNote
		};

		lovecas = [...lovecas, newLoveca];
		localStorage.setItem('lovecas', JSON.stringify(lovecas));

		newAmount = '';
		newNote = '';
	}

	function deleteLoveca(id: number) {
		lovecas = lovecas.filter((loveca) => loveca.id !== id);
		localStorage.setItem('lovecas', JSON.stringify(lovecas));
	}
</script>

<main class="container mx-auto max-w-2xl p-4">
	<h1 class="mb-6 text-center text-3xl font-bold">ラブカストーンリスト</h1>

	<div class="mb-6 rounded-lg bg-white p-6 shadow-md">
		<h2 class="mb-4 text-xl font-semibold">新しいラブカストーンを追加</h2>
		<form on:submit|preventDefault={addLoveca} class="space-y-4">
			<div>
				<label for="amount" class="block text-sm font-medium text-gray-700">個数</label>
				<input
					type="number"
					id="amount"
					bind:value={newAmount}
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
					placeholder="ラブカストーンの個数を入力"
					required
				/>
			</div>
			<div>
				<label for="note" class="block text-sm font-medium text-gray-700">メモ</label>
				<input
					type="text"
					id="note"
					bind:value={newNote}
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
					placeholder="メモを入力（任意）"
				/>
			</div>
			<button
				type="submit"
				class="w-full rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
			>
				追加
			</button>
		</form>
	</div>

	<div class="space-y-4">
		{#each lovecas as loveca (loveca.id)}
			<div class="flex items-center justify-between rounded-lg bg-white p-4 shadow-md">
				<div>
					<p class="text-lg font-semibold">{loveca.amount}個</p>
					<p class="text-sm text-gray-500">{loveca.date}</p>
					{#if loveca.note}
						<p class="mt-1 text-sm text-gray-600">{loveca.note}</p>
					{/if}
				</div>
				<button on:click={() => deleteLoveca(loveca.id)} class="text-red-500 hover:text-red-700">
					削除
				</button>
			</div>
		{/each}
	</div>
</main>

<style>
	:global(body) {
		background-color: #f3f4f6;
	}
</style>
