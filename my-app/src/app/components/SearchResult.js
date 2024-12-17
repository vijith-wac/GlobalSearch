const SearchResult = ({ results, isLoading, error }) => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data</p>;
    if (!results.length) return <p>No results found.</p>;
  
    return (
      <div>
        <h3>Search Results:</h3>
        <ul>
          {results.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SearchResult;
  