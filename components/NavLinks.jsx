import React from 'react';
import Link from 'next/link';

const NavLinks = ({ name, icon, href }) => {
  return (
    <div>
      <Link href={href} className="flex gap-2 mb-6 text-[13px] items-center text-white hover:bg-gray-700 rounded-full p-2">
        {icon}
        <span className="hidden sm:flex">{name}</span>
      </Link>
    </div>
  );
};

export default NavLinks;
