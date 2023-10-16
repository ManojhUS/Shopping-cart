import React, { useContext, useEffect, useState } from 'react'
import "./product.css"
import menshirt from "../../Images/menshirt.jpg";
import AdminContext from '../Context/AdminContext';
import { getProduct } from '../../Service/ProductService';
import { useSearchParams } from 'react-router-dom';
import { addCart, getCart } from '../../Service/CartService';

const Products = () => {


    const [product,setProduct] = useState([]);
    
      useEffect(()=>{
          getProduct().then((res)=>{
            setProduct(res.data);
          })
      },[])

      
      const admincontext=useContext(AdminContext);
      const {cartLength,updatecartList,userid}=admincontext;

      const handleAddtoCart=(cartItem)=>{
        const cart={
          product:cartItem.id,
          customer:userid,
          count:1,
        }
        addCart(cart);
        updatecartList(cartLength+1);
      }


  return (
    <div className='productContainer'>
        <h2>Product List</h2>
         <div id="catg_templates">
            {product.map((v,i)=><div className="catg_tmplt" id={`tmplts_id${i + 1}`}>
            <a>
                <div className="catg_tmpimg_div">
                <img src={v.image} />
                </div>
            </a>
            <div className="catg_tmptxt1">
              <h4>{v.name}</h4>
              <h4>${v.price}</h4>
            </div>
            <div className="catg_tmptxt2">
              {
                true ? <h5 onClick={()=>handleAddtoCart(v)}>Add To Cart
                </h5> : <h5>Go To Cart</h5>
              }
              
            </div>
          </div>
              )}
            
        </div>
    </div>
  )
}

export default Products