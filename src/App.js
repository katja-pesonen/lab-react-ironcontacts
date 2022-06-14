
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

          <div><table>
          <thead>
              <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Won Oscar</th>
                  <th>Won Emmy</th>
              </tr>
          </thead>
    <tbody>
    { contacts.map( contact => { 
      return (
          <tr>
            <td><img width="200px" src={ contact.pictureUrl } alt="celeb photo"/></td>
            <td>{ contact.name }</td>
            <td>{ Math.round(contact.popularity) }</td>
            <td>{ contact.wonOscar ? <img width="200px" src="../trophy.PNG"/> : null }</td>
            <td>{ contact.wonEmmy }</td>
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

