import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

function App() {
  return (
    <Routes>
      <Route path="/book-store/" element={<Home />} />
      <Route path="/book-store/books/create" element={<CreateBooks />} />
      <Route path="/book-store/books/details/:id" element={<ShowBook />} />
      <Route path="/book-store/books/edit/:id" element={<EditBook />} />
      <Route path="/book-store/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
}

export default App;
