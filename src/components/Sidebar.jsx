import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="p-4 w-[50%] min-h-fit bg-base-200 space-y-5 nav text-secondary">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/assignments">Assignments</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    );
};

export default Sidebar;