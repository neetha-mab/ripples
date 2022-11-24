import React from 'react';
import { GiDuration } from 'react-icons/gi';
import { MdOutlineEventAvailable, MdOutlineAccountBalance } from 'react-icons/md';
import styles from './AboutTours.module.scss';

const AboutTours = () => {
  return (
    <section className={styles.about_tours}>
        <div className={styles.container}>
            <div className={styles.content}>
                <GiDuration />
                <p>TOUR DURATION<span>5 days</span></p>
            </div>
            <div className={styles.content}>
                <MdOutlineEventAvailable />
                <p>AVAILABILITY<span>May - Oct</span></p>
            </div>
            <div className={styles.content}>
                <MdOutlineAccountBalance />
                <p>ACCOMMODATION<span>Hotel Kangerlussuaq</span></p>
            </div>
        </div>
    </section>
  )
}

export default AboutTours

