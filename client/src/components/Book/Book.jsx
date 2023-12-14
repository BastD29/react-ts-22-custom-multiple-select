import { Link } from "react-router-dom";

import "./Book.css";

const Book = ({ book, isSelected }) => {
  const className = isSelected ? "search-result selected" : "search-result";

  return (
    // <Link to={`/books/${book.id}`} className={className}>
    <Link to={`/books/${book._id}`} className={className}>
      <p>{book.title}</p>
    </Link>
  );
};

export { Book };
