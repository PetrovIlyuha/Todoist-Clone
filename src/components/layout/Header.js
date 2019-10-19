import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa';
// const logo = require('./logo.png');
export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="./logo.png" alt="todoist"/>
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice/>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
} 