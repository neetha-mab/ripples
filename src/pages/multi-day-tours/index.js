import React, { useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import HeroInner from '../../components/templates/HeroInner';
import { RiArrowDropDownLine } from 'react-icons/ri';
import styles from './multidays.module.scss';
import TourTile from '../../components/templates/TourTile';
import Pagination from '../../components/templates/Pagination';

const MultiDayTours = () => {
  const [sortActive, setSortActive] = useState(styles.normal);
  const [sortText, setSortText] = useState('Sort By');

  useEffect(() => {
    let body = document.getElementById('body');
    body.addEventListener("click", function (e) {
      e.stopPropagation();
      setSortActive(styles.normal);
    }, false);
  });
  

  const SortSelector = (e) => {
    e.stopPropagation();
    setSortActive(styles.active);
  }

  const selectSort = (e) => {
    setSortActive(styles.normal);
    setSortText(e.target.innerHTML)
  }

  return (
    <Layout title="Multi tours" description="Multi tours" keywords="Multi tours">
        <HeroInner />
        <section className={styles.multi_day_tour}>
          <div className={styles.container}>
            <div className={styles.button_select}>
              <div className={styles.button_group}>
                <button type='button'>Dates</button>
                <button type='button'>Duration</button>
                <button type='button'>Attractions</button>
                <button type='button'>Things to do</button>
                <button type='button'>Departure</button>
              </div>
              <div className={`${styles.select_dropdown} ${sortActive}`}>
                <span onClick={(e) => SortSelector(e)}>{sortText} <RiArrowDropDownLine /></span>
                <ul className={`${styles.submenu}` }>
                  <li onClick={(e) => selectSort(e)}>By Price</li>
                  <li onClick={(e) => selectSort(e)}>Popularity</li>
                  <li onClick={(e) => selectSort(e)}>Difficulty</li>
                </ul>
              </div>
            </div>

            <h2 className={styles.primary_header}>Find Tours</h2>

            <div className={styles.tours_tiles}>
              <TourTile />
              <TourTile />
              <TourTile />
              <TourTile />
              <TourTile />
              <TourTile />
            </div>
            <Pagination />
          </div>
        </section>
    </Layout>
  )
}

export default MultiDayTours;