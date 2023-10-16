import React, { useContext, useEffect } from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'
import accolite_logo from "../../Images/Accolite.PNG";
import AdminContext from '../Context/AdminContext';
import { getCart } from '../../Service/CartService';

const Navbar = () => {
  const admincontext=useContext(AdminContext);
  const {cartLength,cartList,updatecartList,isAuthenticated,toggle,handleToggle,handleLogout,userid}=admincontext;
  
  useEffect(()=>{
    getCart(userid).then((res)=>{
      updatecartList(res.data.length);
    })
  },[])

  const activeClass=(e)=>{
    let btns = document.getElementsByClassName("navlinks");
    let x=[...btns]
    x.forEach((t)=>t.className="navlinks")
    e.target.className+=" select";
}


  return (
    <nav className='navbar'>
        <div className='website_logo_wrapper'><img className='website_logo' src={accolite_logo}/></div>
        {
          isAuthenticated ? <div className='navlinksContainer'>
               <NavLink className="navlinks" onClick={(e)=>activeClass(e)} to={"/"}>Home</NavLink>
               <NavLink className="navlinks" onClick={(e)=>activeClass(e)} to={"/myorders"}>Orders</NavLink>
               <NavLink className="navlinks" onClick={(e)=>activeClass(e)} to={"/mycart"}>My Cart ({cartLength})</NavLink>
               <NavLink className="navlinks" onClick={()=>handleLogout()} to={"/"}>Logout</NavLink>
          </div>: <div className='navlinksContainer'>
          {
            <>
            {
               toggle ? <NavLink className="navlinks" onClick={handleToggle} >Login</NavLink> : 
                       <NavLink className="navlinks" onClick={handleToggle}>SignUp</NavLink>
            }
            </>
          }
          </div>
        }
    </nav>
  )
}

export default Navbar