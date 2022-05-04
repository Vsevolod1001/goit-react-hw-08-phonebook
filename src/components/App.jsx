import { Routes, Route, Navigate } from 'react-router-dom';
import { ContactsView } from 'views/ContactsView';
import { HomePageView } from 'views/HomePageView';
import { LoginView } from 'views/LoginView';
import { RegisterView } from 'views/RegisterView';
import { AppBar } from './AppBar';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppBar />}>
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
