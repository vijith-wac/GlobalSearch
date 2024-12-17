const Search = ({ text, setText, setOffset }) => {
    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value); // Update query
            setOffset(0); // Reset pagination to page 1
          }}
          placeholder="Search for products..."
        />
      </div>
    );
  };
  
  export default Search;
  