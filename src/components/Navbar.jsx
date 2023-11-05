import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleSignOut = () => {
    logout().then((result) => {
      console.log(result);
    });
  };

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
        <div className="flex items-center gap-10 text-secondary nav">
          <li>
            <NavLink to="/assignments">Assignments</NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/create_assignment">Create Assignment</NavLink>
              </li>
              <li>
                <NavLink to="/my_assignments">My Assignments</NavLink>
              </li>
              <li>
                <NavLink to="/submitted">Submitted</NavLink>
              </li>
            </>
          )}
          {!user && (
            <>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          )}
          {user && (
            <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
              <label tabIndex={0} className="avatar mx-2">
                <div className="w-8 rounded-full">
                  {user && <img src={user.photoURL} />}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <p className="text-center mb-2">{user.displayName}</p>
                <button
                  onClick={handleSignOut}
                  className="btn btn-ghost btn-block rounded-lg btn-sm hover:bg-[#6440FA] hover:text-white"
                >
                  Sign Out
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="lg:hidden">
        {user && (
          <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
            <label tabIndex={0} className="avatar mx-2">
              <div className="w-8 rounded-full">
                {user && <img src={user.photoURL} />}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <p className="text-center mb-2">{user.displayName}</p>
              <button
                onClick={handleSignOut}
                className="btn btn-ghost btn-block rounded-lg btn-sm hover:bg-[#6440FA] hover:text-white"
              >
                Sign Out
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
