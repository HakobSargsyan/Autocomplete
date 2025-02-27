import { describe, it, expect } from 'vitest';
import useDebounce from '../useDebounce';
import { act, waitFor, renderHook } from '@testing-library/react';

describe('useDebounce Hook', () => {
    it('should update debounced value after delay', async () => {
        const { result } = renderHook(() => useDebounce('initial', 500));

        act(() => {
            result.current.setDebouncedValue('new value');
            expect(result.current.debouncedValue).toBe('initial');
        });

        // Wait for the debounce delay (500ms)
        await waitFor(() => {
            expect(result.current.debouncedValue).toBe('new value');
        });
    });
});
