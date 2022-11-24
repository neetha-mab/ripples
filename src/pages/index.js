import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/templates/Hero';
import TourTile from '../components/templates/TourTile';
import styles from './home.module.scss';

const Home = () => {
  return (
    <Layout title="Home" description="Home page" keywords="Home page">
      <Hero />
      <section className={styles.popular_tours}>
        <div className={styles.container}>
          <h2>Popular Tours</h2>
          <div className={styles.tours_tiles}>
            <TourTile />
            <TourTile />
            <TourTile />
            <TourTile />
            <TourTile />
            <TourTile />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home