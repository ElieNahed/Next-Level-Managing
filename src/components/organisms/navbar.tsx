import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Navbar: React.FC = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <nav className="p-4 fixed w-full z-50 bg-gradient-to-b from-#52D3D8 to-#3887BE">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {!isHomePage && (
            <ArrowBackIcon
              onClick={() => router.back()}
              className="text-white mr-4 cursor-pointer"
            />
          )}
          <Link href="/" className="text-white font-semibold text-xl">
            Next Level Managing
          </Link>
        </div>
        <div className="flex items-center">
          <div className="link-container">
            <Link href="/tasks/active" className="task-link">
              Active
            </Link>
          </div>
          <div className="link-container">
            <Link href="/tasks/completed" className="task-link">
              Completed
            </Link>
          </div>
          <div className="link-container">
            <Link href="/tasks/details" className="task-link">
              Details
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .link-container {
          border: 1px solid #38419d;
          border-radius: 5px;
          padding: 8px 16px;
          margin-right: 16px;
          background-color: #200e3a;
          transition: background-color 0.3s, border-color 0.3s;
        }
        .link-container:hover {
          background-color: #53d8;
          border-color: #38e87b;
        }
        .task-link {
          text-decoration: none;
          color: #ffffff;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
