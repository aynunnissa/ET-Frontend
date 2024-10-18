'use client';

import { useState } from 'react';
import LinkItem from './LinkItem';
import { MENU } from './constants';
import Button from '../../shared/Button';
import styles from "./header.module.css";
import HamburgerNav from "../../../assets/icons/hamburger-nav.svg";
import Logo from '../../../assets/images/logo.webp';

const LinkItems = () => {
  return (
    <ul className={`${styles.navigation__items} flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8 xl:gap-16`}>
        {
          MENU.map((menu) => (
            <li key={menu.title} className="w-auto">
              <LinkItem title={menu.title} url={menu.url} />
            </li>
          ))
        }
    </ul>
  );
};

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function toggleNavbarHandler() {
    setIsNavbarOpen(prev => !prev);
  }

  return (
    <nav className="header z-10 fixed top-0 left-0 right-0 bg-transparent md:bg-white flex items-center h-[80px] px-8 sm:px-14 lg:px-18 xl:px-20">
      <div className="flex items-center justify-between relative gap-8 w-full">
        <div className="h-[30px] lg:h-[45px]">
          <img
            src={Logo}
            alt="Header icon"
            className="h-full w-auto"
          />
        </div>
        <div
          className={`
            ${styles.navigation__links}
            z-40 ease-in-out duration-500 flex items-center
            ${isNavbarOpen ? 'right-0' : 'right-[-100%]'}`}
        >
          <div className="flex-1">
            <LinkItems />
          </div>
          <div className="flex gap-4">
            <Button text='Mitra Petani' />
          </div>
        </div>
        <div></div>
        <button
          onClick={toggleNavbarHandler}
          className="z-50 absolute right-0 inline md:hidden"
        >
          <img src={HamburgerNav} alt='' />
        </button>
        <button
          onClick={toggleNavbarHandler}
          className="z-50 fixed right-[32px] inline md:hidden"
        >
          <i
            className={`bi bi-x-lg ease-in-out duration-300 text-2xl ${
              isNavbarOpen ? 'opacity-100' : 'opacity-0'
            }`}
          ></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;