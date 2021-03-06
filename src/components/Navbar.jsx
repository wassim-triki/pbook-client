import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { AiFillBell } from 'react-icons/ai';
import UserContext from '../context/UserContext';
import { HiUserCircle } from 'react-icons/hi';
import { WiMoonAltWaningCrescent6 } from 'react-icons/wi';
import { WiMoonAltWaningGibbous1 } from 'react-icons/wi';
import DarkModeContext, { useDarkMode } from '../context/DarkModeContext';
import scrollToTop from '../helpers/scrollToTop';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const { isDark, setIsDark } = useDarkMode();
  const { pathname } = useLocation();
  const toggleDarkMode = () => setIsDark(!isDark);
  return (
    <nav
      className={`hidden lg:visible px-5 w-full gap-4 h-20 ${
        user ? 'lg:flex' : 'hidden'
      } items-center text-lg fixed z-50 dark:text-white dark:bg-bg-dark dark-mode-transition bg-white font-body  content-center overflow-hidden`}
    >
      <Link
        to={'/'}
        className="h-20   place-self-center  flex items-center justify-center"
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/pbook-346616.appspot.com/o/logo-192x192.png?alt=media&token=2b14b91b-fec6-4b3e-b790-6ec3306f55c4"
          alt="logo"
          className="h-2/4"
        />
        <span className="font-main font-black text-3xl text-red-main">
          book
        </span>
      </Link>

      <Link
        onClick={scrollToTop}
        to={'/'}
        className={`${
          pathname === '/'
            ? 'bg-bg-dark text-white dark:bg-white dark:text-bg-dark'
            : 'bg-white text-bg-dark hover:bg-gray-300 dark:bg-bg-dark dark:hover:bg-bg-dark-50 dark:text-white'
        } text-white font-bold text-xl px-4 h-1/2 rounded-full flex items-center justify-center`}
      >
        Home
      </Link>

      <form className="bg-gray-200 rounded-full flex items-center relative flex-1 h-1/2">
        <BiSearch className="absolute p-2 text-gray-400    rounded-full w-auto h-full cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-200 rounded-full py-2 px-4 pl-10 focus:ring-2 outline-none active:ring-2 ring-offset-1 w-full  h-full text-black hover:bg-gray-300"
        />
      </form>
      <AiFillBell className="nav-icon nav-icon-large dark-mode-transition" />
      {isDark ? (
        <WiMoonAltWaningGibbous1
          className="nav-toggle-theme transition-all dark-mode-transition"
          onClick={toggleDarkMode}
        />
      ) : (
        <WiMoonAltWaningCrescent6
          className="nav-toggle-theme transition-all dark-mode-transition"
          onClick={toggleDarkMode}
        />
      )}

      <Link to={'/profile'}>
        {user?.imageUrl ? (
          <div className="w-12 h-12 p-2 rounded-full  overflow-hidden hover:bg-gray-200 nav-icon-large dark-mode-transition">
            <img
              src={user?.imageUrl}
              alt="prfile picture"
              className="object-cover rounded-full w-12"
            />
          </div>
        ) : (
          <HiUserCircle className="nav-icon" />
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
