import React, { useContext, useEffect, useState } from 'react'
import "./orders.css"
import menshirt from "../../Images/menshirt.jpg";
import { getOrder } from '../../Service/OrderService';
import AdminContext from '../Context/AdminContext';

const Orders = () => {
    const admincontext=useContext(AdminContext);
    const {cartList,updatecartList,userid}=admincontext;
    const [order,setOrder]=useState([])
    useEffect(()=>{
        getOrder(userid).then((res)=>{
            setOrder(res.data)
        })
    },[])


  return (
    <div className='cartContainer'>
            <h2>My Orders</h2>
            <div className='cartListDiv1'>
                {
                    order.map((v,i)=><div className='cartItem1'>
                        <img src={v.product.image} />
                        <div className='itemText'>
                            <p><b>{v.product.name}</b></p>
                            <p><b>Address: </b>
                            <b>{v.address.name}- </b>
                            <b>{v.address.address}</b></p>
                            <p className='quantity'><b>Quantity : {v.count}</b></p>
                            <p><b>₹{v.count*v.product.price}</b></p>
                        </div>
                    </div>)
                }
            </div>
        </div>
  )
}

export default Orders