import { useGetBookByIdQuery } from "../../store/book/apiSlice";

import "./BookDetail.css";

import { useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: book, error, isLoading } = useGetBookByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  return (
    <div className="book-detail">
      <button onClick={() => navigate("/books")}>{"<<< Back to search"}</button>
      {book && (
        <div>
          <h1>{book.title}</h1>
          <p>Wikipedia: {book.link}</p>
        </div>
      )}
    </div>
  );
};

export { BookDetail };
