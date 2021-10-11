import './style.css';
import React from 'react';
import { useState } from 'react';

export default function App() {
  const Users = [
    {
      Id: '01',
      firstName: 'Sherwin',
      lastName: 'Kubek',
      email: 'sherwin@gmail.com',
    },
    {
      Id: '02',
      firstName: 'Sarvan',
      lastName: 'Musk',
      email: 'sherwin@gmail.com',
    },
    {
      Id: '03',
      firstName: 'Khafka',
      lastName: 'Bella',
      email: 'bella@gmail.com',
    },
    {
      Id: '14',
      firstName: 'Sarah',
      lastName: 'Taylor',
      email: 'sarah@gmail.com',
    },
    {
      Id: '05',
      firstName: 'Ellepsy',
      lastName: 'Perry',
      email: 'perryelle@gmail.com',
    },
    {
      Id: '06',
      firstName: 'Amella',
      lastName: 'Jones',
      email: 'jones@gmail.com',
    },
    {
     Id: '07',
      firstName: 'Sophie',
      lastName: 'Devine',
      email: 'devine@gmail.com',
    },
    {
      Id: '08',
      firstName: 'Niki',
      lastName: 'Gates',
      email: 'niki@gmail.com',
    },
    {
      Id: '09',
      firstName: 'Sam',
      lastName: 'Daniels',
      email: 'samdanel@gmail.com',
    },
  ];

  const [click, setClick] = useState(" ");

  // const onChange = (Id) => {
  //   setClick(true);
  // };

  // const Name = (Id) => {
  //   return Users.find((data) => data.Id === Id);
  // };
 


  return (
    <div>
      <div>
      <label required>Selector label</label>
        <select className="custom-select" id="selected" 
         onChange = {(e) =>{
   const selectedItem = e.target.value;
   setClick(selectedItem);
 }}>

<option value ="search" default selected>Search...</option>
<option value="Sherwin">Sherwin</option>
<option value="Sarvan">Sarvan</option>
<option value="Khafka">Khafka</option>
<option value="Sarah">Sarah</option>
<option value="Ellepsy">Ellepsy</option>
<option value="Amella">Amella</option>
       
        </select>
        {click}
      </div>
      <div></div>
    </div>
  );
}
