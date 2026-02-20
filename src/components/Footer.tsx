import React from "react";

const Footer = () => {
  return (
    <footer className="p-6 lg:px-8 h-16 max-w-7xl mx-auto flex items-center justify-center text-sm text-gray-500">
      © {new Date().getFullYear()} Tingdan. All rights reserved.
    </footer>
  );
};

export default Footer;
