import { useState } from "react";

import { SearchInput } from "../SearchInput/SearchInput";
import { SearchResults } from "../SearchResults/SearchResults";

import { useGetBooksQuery } from "../../store/book/apiSlice";

import "./AutoComplete.css";
import useDebounce from "../../hooks/useDebounce";

const AutoComplete = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const {
    data: books,
    error,
    isLoading,
  } = useGetBooksQuery(debouncedSearchTerm, {
    skip: debouncedSearchTerm === "",
  });

  return (
    <div className="autocomplete">
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error occurred</p>}
      {!isLoading && !error && searchTerm && books && books.length > 0 && (
        <SearchResults books={books} />
      )}
    </div>
  );
};

export { AutoComplete };
