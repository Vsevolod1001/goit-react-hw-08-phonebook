import { useState } from 'react';
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

export const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <h1>Страница логина</h1>

      <form style={styles.form} autoComplete="off">
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
