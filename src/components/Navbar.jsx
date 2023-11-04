import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-4">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1">
        <Link to="/">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary uppercase">
            <span className="text-[#2E0EAE]">Edu</span>Care
          </h2>
        </Link>
      </div>
      <div className="flex-none hidden lg:block">
        <div className="flex gap-10 text-secondary nav">
          <li>{/* <NavLink to="/">Home</NavLink> */}</li>
          <li>
            <NavLink to="/assignments">Assignments</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
