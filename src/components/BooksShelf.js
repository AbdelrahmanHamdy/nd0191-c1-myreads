import BookCard from "./BookCard";

const BooksShelf = ({ shelfTitle, shelf, emitShelfChange }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">

                    {shelf.map((book) => <BookCard key={book.id} bookCard={book} onShelfChange={(bookId, newShelf) => {emitShelfChange(bookId, newShelf)}}/>)}

                </ol>
            </div>
        </div>

    );
}

export default BooksShelf;