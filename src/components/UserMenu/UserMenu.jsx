import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

const styles = {
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: 'white',
  },
};

export const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);
  return (
    <div>
      <span style={styles.name}>Welcome, {name}</span>
      <button>logOut</button>
    </div>
  );
};
