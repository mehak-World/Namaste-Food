const Search = () => {
  return (
    <>
      <div className="mb-3 search">
        <input
          type="text"
          className="form-control"
          id="search-bar"
          placeholder="Search Restaurant"
          
        />
        <button type="button" className="btn btn-primary">
            Search
        </button>
      </div>
    </>
  );
};

export default Search;
