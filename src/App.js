import './style.css';
import React from 'react';
import { useState } from 'react';

export default function App() {
  const Users = [
    {
      employeeId: '01',
      firstName: 'Sherwin',
      lastName: 'Kubek',
      email: 'sherwin@gmail.com',
    },
    {
      employeeId: '02',
      firstName: 'Sarvan',
      lastName: 'Musk',
      email: 'sherwin@gmail.com',
    },
    {
      employeeId: '03',
      firstName: 'Khafka',
      lastName: 'Bella',
      email: 'bella@gmail.com',
    },
    {
      employeeId: '14',
      firstName: 'Sarah',
      lastName: 'Taylor',
      email: 'sarah@gmail.com',
    },
    {
      employeeId: '05',
      firstName: 'Ellepsy',
      lastName: 'Perry',
      email: 'perryelle@gmail.com',
    },
    {
      employeeId: '06',
      firstName: 'Amella',
      lastName: 'Jones',
      email: 'jones@gmail.com',
    },
    {
      employeeId: '07',
      firstName: 'Sophie',
      lastName: 'Devine',
      email: 'devine@gmail.com',
    },
    {
      employeeId: '08',
      firstName: 'Niki',
      lastName: 'Gates',
      email: 'niki@gmail.com',
    },
    {
      employeeId: '09',
      firstName: 'Sam',
      lastName: 'Daniels',
      email: 'samdanel@gmail.com',
    },
  ];

  const [click, setClick] = useState(false);

  const handleClick = (employeeId) => {
    setClick(true);
  };

  const Name = (employeeId) => {
    return Users.find((data) => data.employeeId === employeeId);
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
