import { useState, useEffect } from "react";
import { validateInput } from '@shared/helpers';
const useFetchPosts = (debouncedInputValue, url) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const fetchPosts = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(url);
            if (!response.ok)
                throw new Error('Failed to fetch posts');
            const data = await response.json();
            setPosts(data?.posts || []);
        }
        catch (err) {
            if (err instanceof Error) {
                setError(err?.message);
            }
            else {
                setError('An unknown error occurred');
            }
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (debouncedInputValue && validateInput(debouncedInputValue)) {
            fetchPosts();
        }
        else {
            setPosts([]);
        }
    }, [debouncedInputValue]);
    return { posts, setPosts, loading, error };
};
export default useFetchPosts;
