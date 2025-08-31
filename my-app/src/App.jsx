import { useState } from 'react'
import BookList from "./components/BookList.jsx";
import EmblaCarousel from "./components/EmblaCarousel.jsx";
import EditButton from './components/Editbutton.jsx';
import { books as initialBooks } from "./data/book.js";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [selected, setSelected] = useState([]); 
  const [books, setBooks] = useState(initialBooks); 

  return(
    <div className='w-screen'>
      <EmblaCarousel options={{ loop: true }} />

        <div className=" items-center justify-center mt-8 lg:mt-12">
          <h1 className="ml-[5%] lg:ml-[10%] pb-2 text-xl lg:text-2xl  font-semibold text-gray-700">รายการที่คั่นไว้</h1>
          <div className="flex-grow border-t border-gray-200"></div>

          <div className="ml-[5%] lg:ml-[10%] mr-[5%] lg:mr-[10%] flex justify-between pt-4 sm:pt-8">
            <p className="text-sm text-gray-500">จำนวนทั้งหมด {books.length} รายการ</p>
            <EditButton 
            editMode={editMode} 
            selected={selected} 
            setEditMode={setEditMode}
            selectedCount={selected.length}
            setSelected={setSelected}
            books={books} 
            setBooks={setBooks} />
          </div>
          <BookList
          books={books} 
          setBooks={setBooks} 
          editMode={editMode}
          selected={selected}
          setSelected={setSelected}/>
        </div>

      
    </div>
  );

}

export default App
