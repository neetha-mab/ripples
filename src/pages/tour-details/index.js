import React from 'react';
import Layout from '../../components/Layout';
import AboutTours from '../../components/templates/AboutTours';
import HeroInner from '../../components/templates/HeroInner';
import TourTile from '../../components/templates/TourTile';
import styles from './tourDetails.module.scss';

const TourDetails = () => {
  return (
    <Layout title="Multi tours" description="Multi tours" keywords="Multi tours">
        <HeroInner />
        <AboutTours />
        <section className={styles.tour_block}>
            <div className={styles.container}>
                <h3 className={styles.primary_header}>Monday Departure from Copenhagen</h3>
                <div className={styles.two_blocks}>
                    <div className={styles.fifty_percent}>
                        <p>Kangerlussuaq is regarded at the gateway of Greenland. However, many tourists never step out of the hall of Kangerlussuaq airport – they just wait there and rush to another nearby town. Such a pity!</p>

                        <p>Being the place with most sunny days in Greenland, Kangerlussuaq is the perfect place to have outdoor activities. Get on the <b>4WD-vehicle</b>, you can step on the inland ice cap within 4 hours. The tundra land is home to various wild animals and a great place to hike around.</p>

                        <p>In this 5-day tour, you have enough time to join our optional activities and to explore the settlement on your own. Hotel and flight tickets are included to save you from the frustrating process of booking tickets.</p>
                    </div>
                    <div className={styles.fifty_percent}>
                        <p>Please note, there is a 4-hour time difference between Kangerlussuaq and Copenhagen. Besides, this tour package doesn’t include Arctic Adventure guides. However, the local guide is included in optional activities for an adventurous journey.</p>

                        <p>If you want to add an extra night in Copenhagen before and/or after your journey at Clarion Hotel, feel free to contact aatour@arctic-adventure.dk for a comfortable upgrade!</p>

                        <p>Tour Code: SFJ5CPH</p>

                        <p>Cover Photo by Raven Eye Photography – Visit Greenland</p>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.black_box_sec}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.black_box_divisions}>
                        <h4>What’s Included</h4>
                        <ul>
                            <li>Return Air Greenland flights between Copenhagen and Kangerlussuaq</li>
                            <li>Transfers between hotel and airport</li>
                            <li>Information Meeting at Hotel (only if you booked any optional activities with us)</li>
                        </ul>
                    </div>
                    <div className={styles.black_box_divisions}>
                        <ul className={styles.without_head}>
                            <li>Hotel Kangerlussuaq, standard room for 4 nights</li>
                            <li>Daily Breakfast</li>
                        </ul>
                    </div>
                    <div className={styles.black_box_divisions}>
                        <h4>Not Included</h4>
                        <ul className={styles.not_included}>
                            <li>Flights between Copenhagen and your home country</li>
                            <li>Travel Cancellation Insurance</li>
                            <li>Clothing</li>
                            <li>Optional activities</li>
                            <li>Lunches and dinners</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className={styles.practical_information}>
            <div className={styles.container}>
                <h3 className={styles.primary_header}>Practical Information</h3>
                <div className={styles.third_wrap}>
                    <div className={styles.info_box}>
                        <h4>FAQ</h4>
                    </div>
                </div>
            </div>
        </section>

        <section className={styles.you_might_like}>
            <div className={styles.container}>
            <h2 className={styles.primary_header}>You might also like</h2>
            <div className={styles.tours_tiles}>
                <TourTile />
                <TourTile />
                <TourTile />
            </div>
            </div>
        </section>
    </Layout>
  )
}

export default TourDetails