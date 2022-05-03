import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperations from '../redux/auth/auth-operation';
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

export const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const hendleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Страница регистрации</h1>

      <form style={styles.form} autoComplete="off" onSubmit={hendleSubmit}>
        <label style={styles.label}>
          Имя
          <input
            type="name"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
          />
        </label>

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

        <button type="submit">регистрация</button>
      </form>
    </div>
  );
};
