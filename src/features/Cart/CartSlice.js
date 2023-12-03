import { createAsyncThunk, createSlice  } from '@reduxjs/toolkit';
import { addToCart , fetchItemsByUserId  , updateItem , deleteItemFromCart, resetCart} from './cartAPI';

const initialState = {
  status: 'idle',
  items: [],
};

export const addToCartAsync = createAsyncThunk(
  'Cart/addToCart',
  async (item) => {
    const response = await addToCart(item);

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const updateItemAsync = createAsyncThunk(
  'Cart/updateItem',
  async (update) => {
    const response = await updateItem(update);

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchItemsByUserIdAsync = createAsyncThunk(
  'Cart/fetchItemsByUserId',
  async (userId) => {
    const response = await fetchItemsByUserId(userId);

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);




export const deleteItemFromCartAsync = createAsyncThunk(
  'Cart/deletItemsByUserId',
  async (itemId) => {
    const response = await deleteItemFromCart(itemId);

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const resetCartAsync = createAsyncThunk(
  'Cart/resetCart',
  async (userId) => {
    const response = await resetCart(userId);

    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
       state.items.push(action.payload)
      })


      .addCase(fetchItemsByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
       state.items = (action.payload)
      })
      
      
      .addCase(updateItemAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id === action.payload.id )
        state.items[index] = action.payload 
       
      })
      
      
      .addCase(deleteItemFromCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id === action.payload.id )
        state.items.splice(index , 1 ) ; 
       
      })
      
      .addCase(resetCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = [] ; 
       
      });
  },
});

export const { increment } = counterSlice.actions;

export const selectItems = (state) => state.cart.items;

export default counterSlice.reducer;
