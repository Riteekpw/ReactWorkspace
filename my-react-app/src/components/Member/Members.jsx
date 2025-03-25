import React, { useEffect, useState } from "react";
import axios from "axios";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [name,setName] = useState('');
  const [age,setAge] = useState(0);

  useEffect(() => {
    axios.get("https://localhost:7247/member/list")
      .then(response => setMembers(response.data))
      .catch(error => console.error(error));
  }, []);



  const addMember = () => {
    if (!name) {
      alert("Please fill in all fields.");
      return;
    }

    axios.post("https://localhost:7247/member/register", { name ,age})
      .then(() => {
        alert("Member added successfully!");
        setName("");
        setAge(0);
        fetchBooks(); 
      })
      .catch(error => console.error(error));
  };

  const deleteMember = () => {
    if (!deleteBookId) {
      alert("Please select a book to delete.");
      return;
    }

    axios.delete(`https://localhost:7247//delete/${deleteBookId}`)
      .then(() => {
        alert("Book deleted successfully!");
        setBooks(books.filter(book => book.bookId !== parseInt(deleteBookId)));
        setDeleteBookId("");
      })
      .catch(error => console.error(error));
  };


  return (
    <div className="container" >
      <h2>Members List</h2>
      <ul>
        {members.map(member => (
          <li key={member.memberId}>
            {member.memberId}-{member.name}
          </li>
        ))}
      </ul>

      <h2>Add a New Member</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Age" 
        value={age} 
        onChange={e => setAge(e.target.value)} 
      />
      <button onClick={addMember}>Add Book</button>
    </div>
  );
};

export default Members;
