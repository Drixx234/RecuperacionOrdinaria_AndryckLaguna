import { useState, useEffect, useCallback } from 'react';

export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
 
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
 
      const json = await response.json();
 
      const items = Array.isArray(json) ? json : json.results || [];
      setData(items);
    } catch (err) {
      setError(err.message);
      console.error('useFetchData error:', err);
    } finally {
      setLoading(false);
    }
  }, [url]);
 
  useEffect(() => {
    fetchData();
  }, [fetchData]);
 
  return { data, loading, error, refetch: fetchData };
};

 