import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Игорь Викторович', number: '459-12-56' },
      { id: 'id-2', name: 'Федя Заславский', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
    },
    deleteTodo: (state, action) => {
      return {
        items: state.items.filter(item => item.id !== action.payload),
        filter: '',
      };
    },
    contactFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, contactFilter, deleteTodo } = contactSlice.actions;
export default contactSlice.reducer;
