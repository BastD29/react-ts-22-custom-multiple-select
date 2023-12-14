import { useEffect, useState } from "react";

function useDebouncedSearch(data, searchTerm, debounceTime = 300) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm) {
        const filtered = data.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filtered);
      } else {
        setResults([]);
      }
    }, debounceTime);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, data, debounceTime]);

  return results;
}

export default useDebouncedSearch;
