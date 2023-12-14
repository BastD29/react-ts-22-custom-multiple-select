import { AutoComplete } from "./components/AutoComplete/AutoComplete";
import { BookDetail } from "./components/BookDetail/BookDetail";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/books" element={<AutoComplete />} />
      <Route path="/books/:id" element={<BookDetail />} />
    </Routes>
  );
}
