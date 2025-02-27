import { useState, useEffect } from "react";
import {validateInput } from '@shared/helpers';
import { ApiResponse } from "@interfaces/api.interface";

const useFetchPosts = (debouncedInputValue: string, url: string) => {
    const [posts, setPosts] = useState<ApiResponse["posts"]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchPosts = async () => {
        setLoading(true);
        setError('');

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch posts');

            const data = await response.json();
            setPosts(data?.posts || []);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err?.message);
            } else {
                setError('An unknown error occurred');
            }
        }finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (debouncedInputValue && validateInput(debouncedInputValue)) {
            fetchPosts();
        }else {
            setPosts([]);
        }
    }, [debouncedInputValue])

    return { posts, loading, error };
};

export default useFetchPosts;
