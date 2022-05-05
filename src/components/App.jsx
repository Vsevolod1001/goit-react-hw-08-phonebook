import { Routes, Route, Navigate } from 'react-router-dom';
import { ContactsView } from 'views/ContactsView';
import { HomePageView } from 'views/HomePageView';
import { LoginView } from 'views/LoginView';
import { RegisterView } from 'views/RegisterView';
import { AppBar } from './AppBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-options';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Routes>
        <Route>
          <Route index element={<HomePageView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="contacts" element={<ContactsView />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
