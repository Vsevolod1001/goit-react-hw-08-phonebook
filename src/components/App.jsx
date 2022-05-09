import { Routes, Route, Navigate } from 'react-router-dom';
import { ContactsView } from 'views/ContactsView';
import { HomePageView } from 'views/HomePageView';
import { LoginView } from 'views/LoginView';
import { RegisterView } from 'views/RegisterView';
import { AppBar } from './AppBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-options';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { getCurrentRefresh } from 'redux/auth/auth-selectors';
import { Spinner } from './Spinner/Spinner';

export const App = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(getCurrentRefresh);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return !refresh ? (
    <div>
      <AppBar />
      <Routes>
        <Route>
          <Route index element={<HomePageView />} />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginView />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsView />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  ) : (
    <Spinner />
  );
};
