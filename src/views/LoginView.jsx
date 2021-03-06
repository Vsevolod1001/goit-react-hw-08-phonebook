import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/auth-options';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const hendleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Страница логина</h1>

      <form style={styles.form} autoComplete="off" onSubmit={hendleSubmit}>
        <label style={styles.label}>
          Почта
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
export default LoginView;
