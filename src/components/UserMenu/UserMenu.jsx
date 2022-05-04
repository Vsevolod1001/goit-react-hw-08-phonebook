import { useSelector, useDispatch } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operation';

const styles = {
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: 'white',
  },
};

export const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUserName);
  return (
    <div>
      <span style={styles.name}>Welcome, {name}</span>
      <button onClick={() => dispatch(authOperations.logOut())}>logOut</button>
    </div>
  );
};
