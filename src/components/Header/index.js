import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '../common/Logo';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import styles from './header.module.scss';

const Header = () => {
  const [languageActive, setLanguageActive] = useState(styles.normal);
  const [selectedLang, setSelectedLang] = useState('English');
  const [priceActive, setPriceActive] = useState(styles.normal);
  const [selectedPrice, setSelectedPrice] = useState('DKK');
  const [activeMobileMenu, setActiveMobileMenu] = useState('');

  useEffect(() => {
    let body = document.getElementById('body');
    body.addEventListener("click", function (e) {
      e.stopPropagation();
      setLanguageActive(styles.normal);
      setPriceActive(styles.normal);
    }, false);
  });
  

  const langSelector = (e) => {
    e.stopPropagation();
    setLanguageActive(styles.active);
    setPriceActive(styles.normal);
  }

  const selectLang = (e) => {
    setLanguageActive(styles.normal);
    setSelectedLang(e.target.innerHTML)
  }

  const priceSelector = (e) => {
    e.stopPropagation();
    setPriceActive(styles.active);
    setLanguageActive(styles.normal);
  }

  const selectPrice = (e) => {
    setPriceActive(styles.normal);
    setSelectedPrice(e.target.innerHTML)
  } 

  const hamMenu = (e) => {
    e.preventDefault();
    setActiveMobileMenu(styles.active);
  }

  const closeMenu = (e) => {
    e.preventDefault();
    setActiveMobileMenu('');
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo width={202} height={33} />
        </div>
        <div className={`${styles.navigation} ${activeMobileMenu}`}>
          <ul className={styles.menu_links}>
            <li>
              <Link href={'/'}>Excursions</Link>
            </li>
            <li>
              <Link href={'/'}>Multi Day Tours</Link>
            </li>
            <li>
              <Link href={'/'}>Attractions</Link>
            </li>
            <li>
              <Link href={'/'}>Things to do</Link>
            </li>
            <li>
              <Link href={'/'}>About us</Link>
              <ul className={styles.submenu}>
                <li>
                  <Link href={'/'}>About Arctic Adventure</Link>
                </li>
                <li>
                  <Link href={'/'}>Blog</Link>
                </li>
                <li>
                  <Link href={'/'}>Terms and Conditions</Link>
                </li>
                <li>
                  <Link href={'/'}>Meet your guides</Link>
                </li>
                <li>
                  <Link href={'/'}>Practical Information</Link>
                </li>
                <li>
                  <Link href={'/'}>Photos and Photographers</Link>
                </li>
                <li>
                  <Link href={'/'}>Gallery</Link>
                </li>
                <li>
                  <Link href={'/'}>Contact us</Link>
                </li>
                <li>
                  <Link href={'/'}>Reviews</Link>
                </li>
                <li>
                  <Link href={'/'}>Agency login</Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className={`${styles.select_dropdown} ${languageActive}`}>
            <span id='language' onClick={(e) => langSelector(e)}>{selectedLang} <RiArrowDropDownLine /></span>
            <ul className={`${styles.submenu}` }>
              <li onClick={(e) => selectLang(e)}>简体中文</li>
              <li onClick={(e) => selectLang(e)}>English</li>
            </ul>
          </div>

          <div className={`${styles.select_dropdown} ${styles.price_drop} ${priceActive}`}>
            <span id='price' onClick={(e) => priceSelector(e)}>{selectedPrice} <RiArrowDropDownLine /></span>
            <ul className={styles.submenu}>
              <li onClick={(e) => selectPrice(e)}>CNY</li>
              <li onClick={(e) => selectPrice(e)}>DKK</li>
              <li onClick={(e) => selectPrice(e)}>EUR</li>
              <li onClick={(e) => selectPrice(e)}>SEK</li>
              <li onClick={(e) => selectPrice(e)}>USD</li>
            </ul>
          </div>
          <Link href={'#'} onClick={(e) => closeMenu(e)} className={styles.close_menu}><IoClose /></Link>
        </div>
        <Link href={'#'} onClick={(e) => hamMenu(e)} className={styles.ham_menu}><GiHamburgerMenu /></Link>
      </div>
    </header>
  )
}

export default Header;





