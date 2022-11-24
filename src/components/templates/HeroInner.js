import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroInner.module.scss';


const HeroInner = () => {
  return (
    <section className={styles.hero_inner}>
        <Image src={'/images/inner-hero.jpg'} alt={'hero'} width={2400} height={700} />
        <div className={styles.hero_content}>
            <div className={styles.container}>
                <h1>ABOUT ARCTIC ADVENTURE</h1>
                <p>Founded in 1983, Arctic Adventure ApS is one of the most experienced travel specialists in the North Atlantic.</p> 
            </div>
        </div>
    </section>
  )
}

export default HeroInner