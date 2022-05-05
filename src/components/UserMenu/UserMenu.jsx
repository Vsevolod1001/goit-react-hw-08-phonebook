import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-options';
const styles = {
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: 'white',
  },
};

export const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(getUserName);
  return (
    <div>
      <span style={styles.name}>Welcome, {name}</span>
      <button onClick={() => dispatch(logOut())}>logOut</button>
    </div>
  );
};
