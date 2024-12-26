import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black  relative z-1">
      <div className="flex  text-white items-center justify-between m-auto w-[80%] p-0 md:p-6 border-b-2 gap-[20px] md:gap-0  flex-col md:flex-row">
      <Link  to="/" className="text-3xl font-extrabold mt-3 md:mt-0">
    Torque
</Link>      
  <div className="flex gap-[10px] font-light text-sm flex-row sm:gap-[17px] md:gap-[10%]  ">
          <Link to="/" className="hover:text-orange-400">
            HOME
          </Link>
          <Link to="/aboutUs" className="hover:text-orange-400">
            AboutUs
          </Link>
          <Link to="/services" className="hover:text-orange-400">
            Services
          </Link>
          <Link to="/Contact" className="hover:text-orange-400">
          Contact
          </Link>
        </div>
        <div className="flex gap-5 flex-row mb-5 md:mb-0">
           
        </div>
      </div>
    </div>
  );
}

export default Navbar;
