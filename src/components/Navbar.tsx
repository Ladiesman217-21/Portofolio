import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { ReactNode } from "react";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-racing-green p-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex items-center gap-2"
      >
        <div className="w-8 h-8 bg-racing-red flex items-center justify-center font-bold italic transform -skew-x-12">
          K
        </div>
        <h1 className="font-bold text-xl tracking-widest font-racing">KRACING</h1>
      </motion.div>
      
      <div className="flex space-x-6">
        <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
        <NavLink to="/skills" active={location.pathname === "/skills"}>Skills & Projects</NavLink>
      </div>
    </nav>
  );
}

function NavLink({ to, children, active }: { to: string; children: ReactNode; active: boolean }) {
  return (
    <Link 
      to={to} 
      className={`relative py-1 px-2 transition-colors hover:text-gray-300 font-medium tracking-tight ${active ? 'text-white' : 'text-gray-400'}`}
    >
      {children}
      {active && (
        <motion.div 
          layoutId="nav-underline"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-racing-red"
        />
      )}
    </Link>
  );
}
