import { books } from "../data/book";
import BookMarkIcon from "./icons/BookMarkIcon";
import CheckboxIcon from "./icons/CheckboxIcon";
import ListIcon from "./icons/ListIcon";

function BookList({ editMode, selected, setSelected }) {
   const handleToggle = (bookId) => {
    setSelected((prev) =>
      prev.includes(bookId)
        ? prev.filter((id) => id !== bookId)
        : [...prev, bookId]
    );
  };

   const getDisplayTitle = (title) => {
    if (editMode) {
      return title.replace(/(<[^>]*>)\s*.+$/, '\n$1 ...');
    }
    return title.replace(/<[^>]*>/g, '\n< >').replace(/\n< >\s*.+$/, '\n< > ...');
  };



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 lg:px-[10%]">
      {books.map((book) => (
        <div
          key={book.id}
          className="w-full max-w-sm rounded-lg overflow-hidden border border-gray-100 shadow-md bg-white flex"
        >
          <img
            src={book.cover}
            alt={book.title}
            className="w-20 sm:w-28 object-cover rounded-l-lg"
          />

          <div className="ml-2 mt-1 flex flex-col w-full justify-between">
            <div>
              <div className="flex flex-row justify-between items-start">
              <h3 className="text-sm sm:text-base md:text-lg font-bold leading-tight flex-1">{getDisplayTitle(book.title)}</h3>

              <div className="w-5 h-5 mt-1 mr-2">
              {editMode && (
              <label className="relative cursor-pointer">
                <input
                  type="checkbox"
                  checked={selected.includes(book.id)}
                  onChange={() => handleToggle(book.id)}
                  className="peer cursor-pointer appearance-none w-5 h-5 rounded-full border border-orange-500 checked:bg-orange-500"
                />
                <CheckboxIcon/>
              </label>
              )}
              </div>
            </div>
            <p className="text-xs text-black">{book.author}</p>
            </div>
            

            <div>
            <p className="text-xs text-gray-500 flex mb-2">
              <ListIcon/>
              <span className="ml-1">ตอนที่ {book.chapter}</span>
              </p>
            <p className="text-xs text-gray-500 flex mb-2">
              <BookMarkIcon/>
              <span className="ml-1">คั่นล่าสุด {book.time}</span>
              </p>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
