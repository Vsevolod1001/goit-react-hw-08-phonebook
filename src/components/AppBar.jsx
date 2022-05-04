import { Outlet } from 'react-router-dom';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

const styles = {
  header: {
    backgroundColor: 'brown',
    padding: 20,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <header style={styles.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        <AuthNav />
        <UserMenu />
      </header>
      <Outlet />
    </div>
  );
};
