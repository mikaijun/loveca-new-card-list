import { render, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import TextInput from './TextInput.svelte';

describe('TextInput', () => {
	it('renders with default props', () => {
		const { container } = render(TextInput);
		const input = container.querySelector('input');
		expect(input).toBeTruthy();
		expect(input?.value).toBe('');
		expect(input?.placeholder).toBe('');
	});

	it('renders with provided value and placeholder', () => {
		const { container } = render(TextInput, {
			props: {
				value: "μ's 高坂穂乃果 UR",
				placeholder: 'カード名を入力...'
			}
		});
		const input = container.querySelector('input');
		expect(input?.value).toBe("μ's 高坂穂乃果 UR");
		expect(input?.placeholder).toBe('カード名を入力...');
	});

	it('applies custom class name', () => {
		const { container } = render(TextInput, {
			props: {
				className: 'custom-width'
			}
		});
		const input = container.querySelector('input');
		expect(input?.className).toContain('custom-width');
	});

	it('handles input event', async () => {
		const { container } = render(TextInput);
		const input = container.querySelector('input');
		expect(input).toBeTruthy();

		if (input) {
			await fireEvent.input(input, { target: { value: "μ's 高坂穂乃果 UR" } });
			expect(input.value).toBe("μ's 高坂穂乃果 UR");
		}
	});

	it('applies base classes', () => {
		const { container } = render(TextInput);
		const input = container.querySelector('input');
		const baseClasses =
			'px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed';

		baseClasses.split(' ').forEach((className) => {
			expect(input?.className).toContain(className);
		});
	});
});
