import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import * as BooksAPI from "../BooksAPI";
import BookCard from "../components/BookCard";

const SearchPage = () => {

  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {

    const searchForBooks = async (query, maxResult) => {
      const res = await BooksAPI.search(query, maxResult);
      console.log(res);
      setSearchResult(res);
    };

    if (searchQuery) {
      searchForBooks(searchQuery, 100);
    }

  }, [searchQuery]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to="/"
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">

        <ol className="books-grid">

          {searchResult.length > 0 && searchResult.map((book) => <BookCard key={book.id} bookCard={book} />)}

        </ol>

      </div>
    </div>
  );
}

export default SearchPage;