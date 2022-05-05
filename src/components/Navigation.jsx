import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    padding: 12,
    fontWeight: 700,
    color: 'white',
  },
  activeLink: {
    color: 'red',
  },
};

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/home" style={styles.link}>
        Home-page
      </NavLink>
      <NavLink to="/contacts" style={styles.link}>
        Contacts
      </NavLink>
    </nav>
  );
};
