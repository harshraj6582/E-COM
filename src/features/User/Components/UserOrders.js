import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoggedInUser } from '../../auth/authSlice';
import { SelectUserOrders, fetchLoggedInUserOrdersAsync } from '../UserSlice';


export default function UserOrders() {
 
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const orders = useSelector(SelectUserOrders)

  useEffect(()=>{
    dispatch(fetchLoggedInUserOrdersAsync(user.id))
  },[dispatch])


  return (
    <div>
      <div>
      {orders.map((order) =>{
        <div>{order.id}</div>
      }
      )}
      
       
      </div>
    </div>
  );
}
