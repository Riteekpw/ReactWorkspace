import React, { useEffect, useState } from "react";
import axios from "axios";

const Librarian = () => {
  const [librarian, setLibrarian] = useState(null);

  useEffect(() => {
    axios.get("https://localhost:7247/librarian-info")
      .then(response => setLibrarian(response.data))
      .catch(error => console.error(error));
  });

  return (
    <div>
    <div className="container " >
      <h2>Librarian Info</h2>
      {librarian ? (
        <h1> {librarian.name} </h1>
      ) : (
        <p>Loading...</p>
      )
      }
    </div>

    </div>
  );
};

export default Librarian;


      