import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdCalendarViewMonth } from 'react-icons/md';
import { HiCalendarDays } from 'react-icons/hi2';
import { AiOutlineCamera } from 'react-icons/ai';
import styles from './TourTile.module.scss';



const TourTile = () => {
  return (
    <div className={styles.tile_block}>
        <Link href={'#'}>
            <Image src={'/images/image.jpeg'} alt={'image'} width={500} height={249} />
        </Link>
        <h3>ILULISSAT</h3>
        <Link href={'#'}><h4>Fairy Tale of Two Cities in the Ripples (code: JIS7RKV)</h4></Link>
        <ul>
            <li><MdCalendarViewMonth/> Jun - Aug</li>
            <li><HiCalendarDays /> 5 days</li>
            <li><AiOutlineCamera /> DKK 22000</li>
        </ul>
    </div>
  )
}

export default TourTile