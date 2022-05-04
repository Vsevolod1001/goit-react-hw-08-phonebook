import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'redux/contacts/contactSlice';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/signup`, credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/login`, credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk('auth/logOut', async credentials => {
  try {
    await axios.post(`${BASE_URL}/users/logout`, credentials);
    token.unset();
  } catch (error) {}
});

const operations = {
  register,
  logIn,
  logOut,
};
export default operations;
