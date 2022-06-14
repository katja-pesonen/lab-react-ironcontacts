
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
              </tr>
          </thead>
    <tbody>
    { contacts.map( contact => { 
      return (
          <tr>
            <td><img src={ contact.pictureUrl } alt="celeb photo" /></td>
            <td>{ contact.name }</td>
            <td>{ contact.popularity }</td>
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

