import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 fixed w-full z-50 bg-gradient-to-b from-custom-bg-start to-custom-bg-end">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-white font-semibold text-xl">
            Next Level Managing
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/tasks/active" className="text-custom-link mr-4">
            Active
          </Link>
          <Link href="/tasks/completed" className="text-custom-link mr-4">
            Completed
          </Link>
          <Link href="/tasks/details" className="text-custom-link">
            Details
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
