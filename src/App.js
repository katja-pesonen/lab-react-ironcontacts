
import './App.css';
import React from 'react';
import allContacts from "./contacts.json"
import { useState } from 'react';

const firstFive = allContacts.slice(0,5)


function App() {

  const [contacts, setContacts] = useState(firstFive)

  return (
    <div className="list">
      <h2>Iron Contacts</h2>
      
      { contacts.map((celeb, index) => {
        return (
          <div key={celeb.id}>
          <img src={ celeb.pictureUrl } alt="celeb photo" />
          <p> { celeb.name } </p>
          <p> { celeb.popularity } </p>
          </div>
        )
      })}
      
    </div>
  );
}
 


export default App;

