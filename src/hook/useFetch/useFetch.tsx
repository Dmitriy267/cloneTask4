import React, { useState, useCallback, useEffect } from 'react';

interface useFetch {
    data: Cats;
    loading: boolean;
    error: string;
    options?: {
        method: string;
        body: any;
        headers: {
            'Content-': string;
        };
    };
}
type Cats = {
    id: string;
    url: string;
};
export const useFetch = (url: string): useFetch => {
    {
        const [data, setData] = useState<Cats[]>([]);
        const [loading, setLoading] = useState<boolean>(false);
        const [error, setError] = useState<string>('');
        const fetchData = useCallback(async () => {
            setError('');
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const json = await response.json();
                setLoading(false);
                setData(json);
                setError('');
            } catch (error) {
                setError(`${error} Ошибка в запросе `);
            } finally {
                setLoading(false);
            }
        }, [url]);
        useEffect(() => {
            fetchData();
        }, [fetchData]);
        return { data, loading, error };
    }
};
