import { useEffect, useState } from "react";

import { Book } from "../Book/Book";

import { useNavigate } from "react-router-dom";

import "./SearchResults.css";

const SearchResults = ({ books }) => {
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        setSelectedIndex((prevIndex) =>
          Math.min(prevIndex + 1, books.length - 1)
        );
        break;
      case "ArrowUp":
        setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        break;
      case "Enter":
        if (selectedIndex >= 0) {
          navigate(`/books/${books[selectedIndex]._id}`);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const searchResults =
    books && books.length > 0 ? "search-results" : "search-results no-books";

  return (
    <div className={searchResults}>
      {books.slice(0, 15).map((book, index) => (
        <Book book={book} key={book.id} isSelected={index === selectedIndex} />
      ))}
    </div>
  );
};

export { SearchResults };
