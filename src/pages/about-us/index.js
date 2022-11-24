import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import HeroInner from '../../components/templates/HeroInner';
import styles from './about.module.scss';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <Layout title="About" description="About page" keywords="About page">
      <HeroInner />
      <section className={styles.about_page}>
        <div className={styles.container}>
          <div className={styles.about_blocks}>
            <h2>Who we are – Your trusted Arctic expert</h2>
            <p>Devoted to the far-away North Atlantic, Arctic Adventure ApS has set its heart and mind into exploring and discovering the beauty of Greenland, Iceland and the Faroe Islands.</p>
            <p>Our main values and beliefs are “Honesty, Speciality and Responsibility”. Driven by the pursuit of growing expertise and better service, we have spent more than 35 marvellous years designing tours to Greenland, Iceland and the Faroe Island. In 2019, we expand our business to B2C, and we are confident that we will build a solid connection between customers and our adventures in the Arctic.</p>

            <p>We are determined to provide the best service and Arctic adventure for you. “Knowledgeable, Responsible, and Flexible” are the criteria for Arctic Adventure guides. If you choose an excursion operated by Arctic Adventure guides, you can fully trust and rely on their professional attitude. Meet the Arctic Adventure Guides <Link href={"#"}>here.</Link></p>

            <p>The blue Arctic Adventure logo and the red uniform of the guides are and always will be the symbol of good service and the trusted expert in Greenland, Iceland and Faroe Islands.</p>
          </div>
          <section className={styles.about_blocks}>
            <h2>What we do<br/>Passionate about Greenland since 1983</h2>
            <p>Arctic Adventure ApS offers the most comprehensive range of tours and activities to Greenland. Our business covers both B2B and B2C sections. Whether you are a traveller who is searching for new adventures or a travel agent looking for tours beyond the ordinary, you can always find the services we provide satisfying.</p>

            <h4>Single-day excursions:</h4>
            <p>Want to join a guided excursion to get a deeper understanding of the area? Have no clue what to do today? Have your original plans been cancelled or postponed? Or you are just searching for adventures? Here you can find excursions with different duration covering everything from exploring by flight or helicopter to gentle cruising in Greenlandic fjords.</p>
            <p>We connect local sights to customers and develop our excursions. With trusted suppliers and experienced Arctic Adventure guides, we provide high-quality single-day excursions with good service.</p>

            <h4>Multi-day tours:</h4>
            <p>Travelling sounds thrilling, but the process of designing an itinerary can be difficult when you don’t know the region you are visiting. However, our multi-day tours are here for you. You don’t need to browse 10 more websites and crash your computer just to book one single journey. The multi-day tours are your trusted time-saver.</p>
            <p>Creatively combining the format of guided tours and optional activities of your choice, we offer well-designed multi-day tours to Greenland, Iceland and the Faroe Islands. With fixed accommodation and flights, you can choose daily guided excursions to add extra experiences to your multi-day package. You can save yourself from checking the hotels and flights. Instead, you can fully enjoy the fun of travelling as well as customizing your adventures based on your interests.</p>
            <p>With different departure locations and a variety of tour lengths, you can find the one that suits you best. Flights are partly included in the package, as well as accommodation with breakfast.</p>
            <p>Your unforgettable Arctic Adventure is just one click away.</p>

            <h4>Bespoke designed tours:</h4>
            <p>If you can’t find a multi-day tour that fits into your plans, or you just simply want to explore Greenland 100% based on your own interests., we are happy to help you create a bespoke adventure. You can always send us an email to request a quote for a bespoke designed tour.</p>
            <p>Our experienced travel consultant and the itinerary designer will be happy to help you. Make the Arctic adventure in your dream come true by contacting us.</p>

            <h4>Useful information, Experiences and Local Stories</h4>
            <p>Greenland seems mysterious for many people, and therefore the travel information you get about Greenland is of vital importance.</p>
            <p>Apart from our well-designed tours, we also offer travel information, equipment lists and local tips to prepare you as much as possible before you arrive in the Arctic. Local stories and blogs can also draw you closer to Greenland.</p>
            <p>You don’t need to search, browse and compare travel products and information from millions of websites opened in your browser anymore. The Arctic Adventure official website is good enough.</p>

            <h4>Gallery</h4>
            <p>Marvel at the fantastic photos and videos about Greenland, Iceland and the Faroe Islands.</p>
            <p>Gigantic icebergs, long and narrow ice fjords, vast tundra land, dancing northern lights, and different Arctic creatures. You can’t help but be amazed by the beauty of nature, lively towns, and people who are living there.</p>
            <p>However, once you step on the land and walk through the pictures you see on our website, you will realise that no matter how advanced a camera is, it can only capture maybe 10% of the real beauty when you see it with your own eyes.</p>
            <div className={styles.image_block}>
              <Image src={'/images/IMG_0563-min-1024x367.jpg'} alt={'image'} width={1024} height={367} />
            </div>
          </section>
        </div>
      </section>
    </Layout>
  )
}

export default AboutUs