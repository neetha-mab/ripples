import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = ({width,height}) => {
  return (
    <Link href={'/'}>
        <Image src={'/images/logo.png'} alt={'logo'} width={width} height={height} />
    </Link>
  )
}

export default Logo;