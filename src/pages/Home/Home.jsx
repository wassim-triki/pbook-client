import React, { useContext, useEffect, useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import { Navigate } from 'react-router-dom';
import MobileNav from '../../components/MobileNav';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import CategoryList from '../../components/CategoryLists';
import CategoryLists from '../../components/CategoryLists';
import { categories } from '../../data';
import Spinner from '../../components/Spinner';
import SideBar from '../../components/SideBar';
import scrollToTop from '../../helpers/scrollToTop';
// const BOOKS_API = 'https://www.googleapis.com/books/v1/volumes?q=';

const Home = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const startIndex = 0;
  const maxResults = 20;
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    const getBooksByCategorie = async (categories) => {
      try {
        const booksData = {};
        setLoading(true);
        await Promise.all(
          categories.map(async (c) => {
            const formattedCat = c.replace(/\s/, '+');
            return axios
              .get(
                `${process.env.REACT_APP_GOOGLE_BOOKS_API}subject:${formattedCat}&maxResults=${maxResults}&startIndex=${startIndex}`
              )
              .then((response) => (booksData[c] = response.data.items));
          })
        );
        setData(booksData);
        setLoading(false);
      } catch (error) {
        throw error;
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getBooksByCategorie(categories);
  }, []);

  return (
    <div
      className={`py-1 w-full dark:bg-bg-dark dark-mode-transition dark:text-white min-h-screen ${
        loading && 'grid place-content-center place-items-center'
      } `}
    >
      {loading ? (
        <Spinner className={`text-4xl text-red-main ${!loading && 'hidden'}`} />
      ) : (
        <CategoryLists data={data} />
      )}
    </div>
  );
};

export default Home;
