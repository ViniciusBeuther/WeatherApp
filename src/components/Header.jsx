import React, { useState } from 'react';
import { CiMenuBurger, CiSearch } from 'react-icons/ci';

export default function HeaderComponent({ apiMethod, result }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <header className="px-3 py-3 flex items-center justify-between text-primary-text">
        <span className="flex align-center justify-start">
          <a href="#">
            <CiMenuBurger
              style={{
                width: '32px',
                height: '32px',
              }}
            />
          </a>
        </span>

        <span>
          <input
            type="text"
            placeholder="City name"
            className="px-6 py-2 rounded-full outline-none"
            onChange={(ev) => setSearchTerm(ev.target.value)}
            value={searchTerm}
          />
        </span>

        <span className="flex items-center justify-center">
          <a href="#" onClick={() => apiMethod(searchTerm)}>
            <CiSearch
              style={{
                width: '32px',
                height: '32px',
              }}
            />
          </a>
        </span>
      </header>
    </>
  );
}