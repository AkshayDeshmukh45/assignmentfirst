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

  const [click, setClick] = useState(false);

  const handleClick = (Id) => {
    setClick(true);
  };

  const Name = (Id) => {
    return Users.find((data) => data.Id === Id);
  };

  return (
    <div>
      <div>
        <select size="5">
          {Users.map((data) => {
            return (
              <option onClick={() => handleClick(data.Users)}>
                {data.firstName + ' ' + data.lastName}
              </option>
            );
          })}
        </select>
      </div>
      <div></div>
    </div>
  );
}
