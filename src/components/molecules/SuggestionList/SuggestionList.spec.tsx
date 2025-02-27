import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SuggestionList from './SuggestionList';

describe('SuggestionList', () => {
    const mockSuggestions = [
        { id: 1, title: "Post 1", body: "This is the first post", reactions: { likes: 5, dislikes: 1 }, views: 100 },
        { id: 2, title: "Post 2", body: "This is the second post", reactions: { likes: 3, dislikes: 2 }, views: 50 },
    ];
    const mockQuery = "post";
    const mockOnSelect = vi.fn();

    it('should not render anything when there is no query', () => {
        render(
            <SuggestionList
                suggestions={[]}
                query=""
                onSelect={mockOnSelect}
                loading={false}
            />
        );

        const suggestionList = screen.queryByRole('list');
        expect(suggestionList).toBeNull();
    });

    it('should display loading state when loading is true', () => {
        render(
            <SuggestionList
                suggestions={[]}
                query={mockQuery}
                onSelect={mockOnSelect}
                loading={true}
            />
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should display suggestions when there are suggestions', () => {
        render(
            <SuggestionList
                suggestions={mockSuggestions}
                query={mockQuery}
                onSelect={mockOnSelect}
                loading={false}
            />
        );

        expect(screen.getByText('Post 1')).toBeInTheDocument();
        expect(screen.getByText('Post 2')).toBeInTheDocument();
    });

});
