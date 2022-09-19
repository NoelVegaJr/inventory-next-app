import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Link from 'next/link';

const warehouse = () => {
  return (
    <div>
      <Navbar />
      <ul>
        <li>
          <Link href='conduit'>
            <a>Conduit</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default warehouse;
