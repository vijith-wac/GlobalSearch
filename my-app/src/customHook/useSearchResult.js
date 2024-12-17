import useSWRInfinite from 'swr/infinite';

const fetcher = (url) => fetch(url).then((res) => res.json());

const useSearchResult = (searchText, limit = 5) => {
  // getKey function for SWRInfinite
  const getKey = (pageIndex, previousPageData) => {
    const offset = pageIndex * limit;

    // Stop fetching if no more data
    if (previousPageData && previousPageData.length === 0) return null;

    // Old API endpoint with search query, offset, and limit
    return searchText
      ? `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}&q=${searchText}`
      : null; // Return null to stop fetching if no search text
  };

  // SWRInfinite hook
  const { data, size, setSize, isLoading, error } = useSWRInfinite(getKey, fetcher, {
    revalidateOnFocus: false, // Don't refetch on focus
    revalidateIfStale: false, // Avoid stale revalidation
    keepPreviousData: true, // Keep previous data while fetching next
  });

  // Flatten and extract search results
  const searchResult = data?.flatMap((page) => page || []);
  const hasNoMorePages = data?.[data.length - 1]?.length === 0;

  return {
    searchResult, // Array of results
    size, // Current size (number of pages loaded)
    setSize, // Function to load more pages
    isLoading, // Loading state
    error, // Error state
    hasNoMorePages, // Boolean to stop further loading
  };
};

export default useSearchResult;
