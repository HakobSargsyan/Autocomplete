import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SuggestionItem from './SuggestionItem';
import {Item} from "@interfaces/Item.interface";

describe('SuggestionItem', () => {
    const mockItem : Item = {
        id: 1,
        body: "This is a test body",
        title: "Test Post",
        reactions: { likes: 10, dislikes: 2 },
        views: 150,
    };

    const mockQuery = "query";
    const mockOnSelect = vi.fn();


    it('should display the title and meta data correctly', () => {
        render(
            <SuggestionItem
                item={mockItem}
                query={mockQuery}
                onSelect={mockOnSelect}
            />
        );

        expect(screen.getByText("Test Post")).toBeInTheDocument();
        expect(screen.getByText("10")).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByText("150")).toBeInTheDocument();
    });

    it('should call onSelect when the item is clicked', () => {
        render(
            <SuggestionItem
                item={mockItem}
                query={mockQuery}
                onSelect={mockOnSelect}
            />
        );

        const suggestionItem = screen.getByRole('listitem');
        fireEvent.click(suggestionItem);
        expect(mockOnSelect).toHaveBeenCalledWith(mockItem);
    });
});
