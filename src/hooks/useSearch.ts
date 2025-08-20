import { useState, useEffect, useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';
import { SearchablePost } from '@/scripts/generate-blog-data';

interface UseSearchOptions {
  maxResults?: number;
  types?: ('blog' | 'work')[];
  threshold?: number;
}

export function useSearch(options: UseSearchOptions = {}) {
  const {
    maxResults = 10,
    types = ['blog', 'work'],
    threshold = 0.3
  } = options;

  const [searchData, setSearchData] = useState<SearchablePost[]>([]);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchablePost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fuse.js configuration
  const fuseOptions = useMemo(() => ({
    keys: [
      { name: 'title', weight: 0.4 },
      { name: 'summary', weight: 0.3 },
      { name: 'content', weight: 0.2 },
      { name: 'tag', weight: 0.1 },
    ],
    threshold,
    includeScore: true,
    minMatchCharLength: 2,
    shouldSort: true,
  }), [threshold]);

  // Load search data
  useEffect(() => {
    const loadSearchData = async () => {
      try {
        setError(null);
        const response = await fetch('/search-data.json');
        if (!response.ok) {
          throw new Error('Failed to load search data');
        }
        const data: SearchablePost[] = await response.json();
        
        // Filter by types if specified
        const filteredData = data.filter(item => types.includes(item.type));
        setSearchData(filteredData);
        setIsDataLoaded(true);
      } catch (err) {
        console.error('Error loading search data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load search data');
        setIsDataLoaded(true);
      }
    };

    loadSearchData();
  }, [types.join(',')]); // Convert array to string for stable dependency

  // Create Fuse instance
  const fuse = useMemo(() => {
    if (searchData.length === 0) return null;
    return new Fuse(searchData, fuseOptions);
  }, [searchData, fuseOptions]);

  // Perform search
  const performSearch = useCallback((searchQuery: string) => {
    if (!fuse || searchQuery.length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const searchResults = fuse.search(searchQuery, { limit: maxResults });
      const items = searchResults.map(result => result.item);
      setResults(items);
    } catch (err) {
      console.error('Search error:', err);
      setError('Search failed');
    } finally {
      setIsLoading(false);
    }
  }, [fuse, maxResults]);

  // Handle search input change
  const handleSearchChange = useCallback((value: string) => {
    setQuery(value);
    setError(null);
    performSearch(value);
  }, [performSearch]);

  // Clear search
  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
    setError(null);
  }, []);

  return {
    query,
    results,
    isLoading,
    isDataLoaded,
    error,
    searchData,
    handleSearchChange,
    clearSearch,
    totalItems: searchData.length,
  };
}
