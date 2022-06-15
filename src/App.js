
import './App.css';
import React from 'react';
import allContacts from "./contacts.json"
import { useState } from 'react';

const firstFive = allContacts.slice(0,5)
const restOfCelebs = allContacts.slice(5)

function App() {

  const [contacts, setContacts] = useState(firstFive)

  const randomCeleb = () => {
    let myRandom = Math.floor(Math.random() * restOfCelebs.length)
    let random = restOfCelebs[myRandom]
    setContacts([random, ...contacts])
  }

  const deleteCeleb = (id) => {
    const filteredArray = contacts.filter((eachCeleb) => {
      return eachCeleb.id !== id;
    });
    setContacts([...filteredArray]);
  };
    
  const sortPopularity = () => {
    let sortedArray = contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts([...sortedArray]);
  };

  const sortName = () => {
    let sortedArray2 = contacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });
    setContacts([...sortedArray2]);
  };

  return (
    <div className="list">
      <h2 className='header'>Iron Contacts</h2>

      <div className='header'>
        <button  className='btns' type='button' onClick={randomCeleb}>Add Random Contact</button>
        <button className='btns' onClick={sortPopularity}>Sort by Popularity</button>
        <button className='btns' onClick={sortName}>Sort by Name</button>
      </div>

          <div className='wrapper'>
          <table>
          <thead>
              <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Won Oscar</th>
                  <th>Won Emmy</th>
                  <th>Actions</th>
              </tr>
          </thead>
    <tbody>
    { contacts.map( contact => { 
      return (
          <tr>
            <td><img width="200px" src={ contact.pictureUrl } alt="celeb"/></td>
            <td>{ contact.name }</td>
            <td>{ (contact.popularity).toFixed(2) }</td>
            <td>{ contact.wonOscar ? "🏆" : null }</td>
            <td>{ contact.wonEmmy ? "🏆" : "" }</td>
            <td>
            <button type='button' key={contact.id}
          onClick={() => deleteCeleb(contact.id)}>Delete 🗑️</button>
          </td>
          </tr>
      )
    })}


    </tbody>
</table>
 </div>

      
    </div>
  );
}

 


export default App;

