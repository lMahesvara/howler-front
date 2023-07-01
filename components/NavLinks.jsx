import React from 'react';
import Link from 'next/link';

const NavLinks = ({ name, icon, href }) => {
  return (
    <div>
      <Link href={href} className="flex gap-2 mb-6 text-[13px] items-center">
        {icon}
        <span className="hidden md:flex">{name}</span>
      </Link>
    </div>
  );
};

export default NavLinks;
