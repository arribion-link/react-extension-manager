import SearchBar from "./SearchBar";
import FilterButtons from "./FilterButtons";
const Search = () => {
  return (
    <div>
      <section>
        <div className="search-filterBtn-section">
          <SearchBar />
          <FilterButtons />
        </div>
      </section>
    </div>
  );
}

export default Search
