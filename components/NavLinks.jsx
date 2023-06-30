import React from 'react';
import Link from 'next/link';

const NavLinks = ({name, icon, href}) => {
    return(
        <Link href={href} className='flex gap-2 mb-6'>
            {icon}
            {name}
        </Link>
    )
}

export default NavLinks