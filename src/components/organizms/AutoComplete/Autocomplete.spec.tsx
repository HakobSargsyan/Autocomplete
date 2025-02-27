import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import Autocomplete from './Autocomplete';

describe('Autocomplete Component', () => {
    it('should render input field', () => {
        render(<Autocomplete placeholder="Search Post" />);

        const input = screen.getByPlaceholderText('Search Post');
        expect(input).toBeInTheDocument();
    });

    it('should update input value on change', async () => {
        render(<Autocomplete placeholder="Search Post" />);

        const input = screen.getByPlaceholderText('Search Post') as HTMLInputElement;
        await userEvent.type(input, 'Post 1');

        expect(input.value).toBe('Post 1');

    });
});
