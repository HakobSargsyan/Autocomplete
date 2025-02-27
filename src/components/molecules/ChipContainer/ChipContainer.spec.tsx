import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ChipContainer from './ChipContainer';

describe('ChipContainer', () => {
    it('should render the correct number of chips', () => {
        const chips = ['Chip 1', 'Chip 2', 'Chip 3'];
        render(<ChipContainer chips={chips} onRemoveChip={vi.fn()} />);

        const chipElements = screen.getAllByText(/Chip/);
        expect(chipElements).toHaveLength(chips.length);
    });

    it('should call onRemoveChip when a chip is removed', () => {
        const chips = ['Chip 1', 'Chip 2'];
        const onRemoveChip = vi.fn();
        render(<ChipContainer chips={chips} onRemoveChip={onRemoveChip} />);

        const removeButtons = screen.getAllByRole('button');
        fireEvent.click(removeButtons[0]);

        expect(onRemoveChip).toHaveBeenCalledWith(chips[0]);
    });

    it('should render the chips correctly', () => {
        const chips = ['Chip 1', 'Chip 2', 'Chip 3'];
        render(<ChipContainer chips={chips} onRemoveChip={vi.fn()} />);

        chips.forEach((chip) => {
            expect(screen.getByText(chip)).toBeInTheDocument();
        });
    });
});
