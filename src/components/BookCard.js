import ShelfTypes from "../shared/enums/ShelfTypes.enum";

const BookCard = ({bookCard, onShelfChnage}) => {
    return (
        <li>
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:`url(${bookCard?.imageLinks?.thumbnail})`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select value={bookCard.shelf || ShelfTypes.NONE} onChange={(e) => {onShelfChnage(e.target.value)}}>
                        <option value={null} disabled>
                            Move to...
                        </option>
                        <option value={ShelfTypes.CURRENTLY_READING}>Currently Reading</option>
                        <option value={ShelfTypes.WANT_TO_READ}>Want to Read</option>
                        <option value={ShelfTypes.READ}>Read</option>
                        <option value={ShelfTypes.NONE}>None</option>
                    </select>
                </div>
            </div>

            <div className="book-title">{bookCard.title}</div>

            {bookCard.authors && bookCard.authors.length > 0 && bookCard.authors.map ((author, i) => <div key={"author"+i} className="book-authors">{author}</div> )}
            
        </div>
    </li>
    );
}

export default BookCard;