import { describe, it, expect, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import useFetchPosts from '../useFetchPosts';

describe('useFetchPosts Hook', () => {
    it('should fetch posts successfully', async () => {
        const mockPosts = {
            posts: [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }],
        };
        const spy = vi.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: true,
            json: async () => mockPosts,
        } as Response);

        const { result } = renderHook(() => useFetchPosts('test query', 'test_url'));

        expect(result.current.loading).toBe(true);
        expect(result.current.posts).toEqual([]);

        await waitFor(() => expect(result.current.loading).toBe(false));
        expect(result.current.posts).toEqual(mockPosts.posts);

        expect(spy).toHaveBeenCalledWith('test_url');
    });
});
