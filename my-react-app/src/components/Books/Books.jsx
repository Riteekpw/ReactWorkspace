import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import "./book.css";
import Slideshow from "../SlideShow/SlideShow";
 
const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect( () => {
    axios
    .get("https://localhost:7247/book/getall") 
      .then(response => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
        setError("Failed to fetch books");
        setLoading(false);
      });
  }, []);
 
  return (
    <>
    <div>
        <Slideshow/>
    </div>
    
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Available Books</h1>
      {loading && <p className="text-center text-gray-500">Loading books...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="book-grid">
        {books.map(book => (
             <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
    </>
    
  );
};
 
export default Books;








// import React, { useEffect, useState } from "react";
// import { Table, Row, Col, Button } from "reactstrap";

// import axios from "axios";


// const Books = ({theme}) => {
//   const [books, setBooks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [isbn, setIsbn] = useState("");
//   const [deleteBookId, setDeleteBookId] = useState("");
//   const [message, setMessage] = useState('');


//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const fetchBooks = () => {
//     axios.get("https://localhost:7247/book/getall")
//       .then(response => setBooks(response.data))
//       .catch(error => console.error(error));
//   };


//   const addBook = () => {
//     if (!title || !author || !isbn) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     axios.post("https://localhost:7247/book/add", { title, author, isbn })
//       .then(() => {
//         setMessage("Book added successfully!");
//         setTitle("");
//         setAuthor("");
//         setIsbn("");
//         fetchBooks(); 
//       })
//       .catch(error => console.error(error)&&setMessage("error while adding book"));
//   };


//   const deleteBook = () => {
//     if (!deleteBookId) {
//       alert("Please select a book to delete.");
//       return;
//     }

//     axios.delete(`https://localhost:7247/book/delete/${deleteBookId}`)
//       .then(() => {
//         alert("Book deleted successfully!");
//         setBooks(books.filter(book => book.bookId !== parseInt(deleteBookId)));
//         setDeleteBookId("");
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div className="container app" data-theme={theme} >


//       {/* <h2>Books List</h2>
//       <ul>
//         {books.map(book => (
//           <li key={book.bookId}>
//             {book.bookId}-{book.title}  - {book.isAvailable ? "Available" : "Borrowed"}
//           </li>
//         ))}
//       </ul> */}


//       <h1>Available Books</h1>
//       <Table bordered dark striped>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Sr No</th>
//             <th>Book Name</th>
//             <th>Author</th>
  
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((book, index) => (
//             <tr key={book.bookId}>
//               <th scope="row">{index + 1}</th>
//               <td>{book.serialNumber}</td>
//               <td>{book.title}</td>
//               <td>{book.author}</td>
//               <td>
//                 <button>Edit</button>
//               </td>
//               <td>
//                 <button>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>



//       <h2>Add a New Book</h2>
//       {message && <p style={{ color: 'green' }}>{message}</p>}
//       <input 
//         type="text" 
//         placeholder="Title" 
//         value={title} 
//         onChange={e => setTitle(e.target.value)} 
//       />
//       <input 
//         type="text" 
//         placeholder="Author" 
//         value={author} 
//         onChange={e => setAuthor(e.target.value)} 
//       />
//       <input 
//         type="text" 
//         placeholder="ISBN" 
//         value={isbn} 
//         onChange={e => setIsbn(e.target.value)} 
//       />
//       <button onClick={addBook}>Add Book</button>


      

//       <h2>Delete a Book</h2>
//       <select value={deleteBookId} onChange={e => setDeleteBookId(e.target.value)}>
//         <option value="" >Select a book to delete</option>
//         {books.length === 0 ? (
//           <option disabled>No books available</option>
//         ) : (
//           books.map(book => (
//             <option key={book.bookId} value={book.bookId}>
//               {book.title} by {book.author}
//             </option>
//           ))
//         )}
//       </select>
//       <button onClick={deleteBook} disabled={!deleteBookId}>Delete</button>
//     </div>
//   );
// };

// export default Books;
