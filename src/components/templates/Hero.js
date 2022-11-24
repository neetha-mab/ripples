import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.hero}>
        <Image src={'/images/hero.jpg'} alt={'hero'} width={2400} height={1000} />
        <div className={styles.hero_content}>
            <div className={styles.container}>
                <h1>EXPLORE GREENLAND<br/>SINCE 1983</h1>
                <ul>
                    <li><Link href={'#'}>Faroe Islands</Link></li>
                    <li><Link href={'#'}>Greenland</Link></li>
                    <li><Link href={'#'}>Iceland</Link></li>
                </ul>  
            </div>
        </div>
    </section>
  )
}

export default Hero