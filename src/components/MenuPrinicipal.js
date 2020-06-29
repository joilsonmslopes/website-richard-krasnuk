import React from 'react';

const Menu = () => {
  return (
    <div>
        <button className='bg-gray-300 hover:bg-gray-500 hover:text-white duration-200 py-1 px-2 sm:px-8 rounded mr-2 sm:mr-6'>Home</button>
        <button className='bg-gray-300 hover:bg-gray-500 hover:text-white duration-200 py-1 px-2 sm:px-8 rounded mr-2 sm:mr-6'>Mídias</button>
        <button className='bg-gray-300 hover:bg-gray-500 hover:text-white duration-200 py-1 px-2 rounded mr-2 sm:mr-6'>Newsletters</button>
    </div>
  );
};

export default Menu;