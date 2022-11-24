import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import HeroInner from '../../components/templates/HeroInner';
import styles from './contact.module.scss';


const Contact = () => {
  return (
    <Layout title="Contact us" description="Contact page" keywords="Contact page">
        <HeroInner />
        <section className={styles.contact_block}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.form_block}>
                    <h2 className={styles.primary_header}>We are Ripples</h2>
                        <p className={styles.description}>Licenses and Idea Submissions. The entire contents of the Site are protected by international copyright and trademark laws. The owners of the copyrights and trademarks are Oyster,</p>
                    </div>
                    <div className={styles.contact_details}>
                    <h2 className={styles.primary_header}>Ripples Holidays</h2>
                    <p>Neduvilamparambil, Karithala Lane,
                    Manorama Jn, Ernakulam,
                    Kerala, India, 682016,
                    Office Other Dept.:  <Link href={"tel:9037100505"}>9037100505</Link><br/>
                    ( Mon to Sat 10.00am to 5.00pm)<br/>
                    Email:  <Link href={"mailto:ripplesholidays@gmail.com"}>ripplesholidays@gmail.com</Link><br/>
                    Website:  <Link href={"www.ripplesholidays.org"} target={'_blank'}>www.ripplesholidays.org</Link></p>



                    </div>
                    <div className={styles.map}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.44856794559!2d77.05910011525758!3d9.979755476119626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07a36f69fe6607%3A0x29dc5c38a02ed5e9!2sRipple%20Adventures%2C%20Zipline%20in%20Munnar%20with%20sky%20chair!5e0!3m2!1sen!2sin!4v1669106958669!5m2!1sen!2sin" width="" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  );
};

export default Contact;
