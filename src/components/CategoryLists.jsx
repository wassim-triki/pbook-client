import React, { useEffect, useState } from 'react';
import { categories } from '../data';
import CategoryList from './CategoryList';
const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
const CategoryLists = ({ data }) => {
  return (
    <div className=" px-5 dark:text-white my-4 lg:mt-20 flex flex-col gap-6 items-center col-span-4">
      <div className="flex flex-col gap-5 w-full md:grid md:grid-cols-2 lg:grid-cols-4 items-center ">
        <div className='top-cat bg-[url("https://liyasthomas.github.io/books/icons/Bullseye-Gradient.svg")] '>
          Daily Top 5
        </div>
        <div className='bg-[url("https://liyasthomas.github.io/books/icons/Cornered-Stairs.svg")] top-cat'>
          New releases
        </div>
        <div className='bg-[url("https://firebasestorage.googleapis.com/v0/b/pbook-346616.appspot.com/o/bs.png?alt=media&token=68cb313c-c762-4800-919a-a279b3aa4138")] top-cat'>
          Best sellers
        </div>
        <div className='bg-[url("https://firebasestorage.googleapis.com/v0/b/pbook-346616.appspot.com/o/ta.png?alt=media&token=9f39cab0-3350-4a92-b83a-10c9e57f9bb6")] top-cat'>
          Top authors
        </div>
      </div>
      {categories.map(
        (categoryName) =>
          data[categoryName] && (
            <>
              <h2 className="font-extrabold border-b-2 border-gray-200 dark:border-bg-dark-50 text-bg-dark text-4xl lg:text-5xl  mt-12  lg:self-start whitespace-nowrap dark:text-white font-body w-full pb-5 dark-mode-transition text-center lg:text-left">
                {capitalize(categoryName)}
              </h2>
              <CategoryList
                key={categoryName}
                categoryName={categoryName}
                books={data[categoryName]}
              />
            </>
          )
      )}
    </div>
  );
};

export default CategoryLists;
