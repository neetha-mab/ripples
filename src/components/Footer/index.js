import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram, AiFillLock } from 'react-icons/ai';
import { RiYoutubeFill } from 'react-icons/ri';
import Logo from '../common/Logo';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.first_col_wrapper}>
          <div className={styles.logo_menu}>
            <div className={styles.logo_wrapper}>
              <Logo width={303} height={49} />
            </div>
            <div className={styles.footer_menu}>
              <ul>
                <li><Link href={'/'}>About Arctic Adventure</Link></li>
                <li><Link href={'/'}>Sitemap</Link></li>
                <li><Link href={'/'}>Sustainability</Link></li>
                <li><Link href={'/'}>Terms and Conditions</Link></li>
                <li><Link href={'/'}>Privacy Policy</Link></li>
                <li><Link href={'/'}>Contact us</Link></li>
              </ul>
            </div>
          </div>

          <div className={styles.newsletter_wrap}>
            <p>Join our Newsletter</p>
            <input type={'text'} placeholder={'Email address'} />
            <button type='submit'>Subscribe</button>
          </div>
        </div>
        <div className={styles.second_col_wrapper}>
          <div className={styles.social_media_wrapper}>
            <Link href='#' target={'_blank'} rel="noopener noreferrer"><FaFacebook /></Link>
            <Link href='#' target={'_blank'} rel="noopener noreferrer"><AiFillInstagram /></Link>
            <Link href='#' target={'_blank'} rel="noopener noreferrer"><RiYoutubeFill /></Link>
          </div>
          <div className={styles.brand_logos}>
            <Link href={'#'}><Image src={'/images/white-supported-by-tourwriter.png'} alt={'logo'} width={149} height={34} /> </Link>
            <Link href={'#'}><Image src={'/images/logos_img.png'} alt={'logo'} width={384} height={63} /></Link>
          </div>
        </div>
      </div>
      <div className={styles.foot_links}>
          <div className={styles.container}>
            <ul>
              <li>aatour@arctic-adventure.dk</li>
              <li>+45 33253221</li>
              <li>CVR-nr: 26858909</li>
              <li>Nordre Jernbanevej 37, 1st, 3400, Hillerød, Denmark</li>
            </ul>
            <Link href={'#'}><AiFillLock /> Agency Login</Link>
          </div>
      </div>
    </footer>
  )
}




export default Footer;