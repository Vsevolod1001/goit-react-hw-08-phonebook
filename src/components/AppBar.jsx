import { NavLink, Outlet } from 'react-router-dom';

export const AppBar = () => {
  return (
    <div>
      <header>
        <NavLink to="/home">Home-page</NavLink>
        <NavLink to="register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
      </header>
      <Outlet />
    </div>
  );
};
