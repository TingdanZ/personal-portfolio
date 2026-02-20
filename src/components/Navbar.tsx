import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center p-6 lg:px-8 h-16 max-w-7xl mx-auto mt-4">
      <div className="flex gap-x-12">
        <Link href="/" className="text-xl font-semibold leading-6 text-foreground hover:text-gray-700">
          Home
        </Link>
        <Link href="/resume" className="text-xl font-semibold leading-6 text-foreground hover:text-gray-700">
          Resume
        </Link>
        <Link href="/work" className="text-xl font-semibold leading-6 text-foreground hover:text-gray-700">
          Work Samples
        </Link>
        <Link href="/contact" className="text-xl font-semibold leading-6 text-foreground hover:text-gray-700">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
