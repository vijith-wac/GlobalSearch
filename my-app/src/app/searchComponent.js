'use client';
import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';
import useSearchResult from '../customHook/useSearchResult';

const SearchComponent = () => {
  const [inputValue, setInputValue] = useState(''); // Input text state
  const [searchText, setSearchText] = useState(''); // Debounced search text

  // Debounced function for updating searchText
  const debouncedSearch = debounce((value) => {
    setSearchText(value);
  }, 500); // Delay of 500ms

  useEffect(() => {
    debouncedSearch(inputValue);
    // Cleanup the debounce on unmount
    return () => debouncedSearch.cancel();
  }, [inputValue]);

  const { searchResult, size, setSize, isLoading, error, hasNoMorePages } =
    useSearchResult(searchText, 5); // 5 items per page

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update input state
      />

      {/* Results */}
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading data</p>}
        {searchResult?.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
        {!isLoading && searchResult?.length === 0 && <p>No results found</p>}
      </div>

      {/* Load More */}
      <div>
        <button
          onClick={() => setSize(size + 1)} // Fetch next page
          disabled={isLoading || hasNoMorePages}
        >
          {hasNoMorePages ? 'No More Results' : 'Load More'}
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
