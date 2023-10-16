import React, { useEffect, useState } from "react"
import { addCart, getCart } from "../../Service/CartService";

const AdminContext=React.createContext();

export const Admin=(props)=>{
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const [userid,setUserid]=useState("");
    const [username,setUsername]=useState("");
    const [usermail,setUsermail]=useState("");
    const [userrole,setUserrole]=useState("");
    const [cartList,setcartList]=useState([]);
    const [cartLength,setcartLength]=useState(0);
    const [toggle,setToggle]=useState(true);

    

    const handleToggle=()=>{
      setToggle(!toggle);
    }
    const updateuserid=(e)=>setUserid(e);
    const updateusername=(e)=>setUsername(e);
    const updateusermail=(e)=>setUsermail(e);
    const updateuserrole=(e)=>setUserrole(e);
    const updatecartList=(x)=>{
      setcartLength(x);
    };

    const handleLogin=(customer)=>{
        updateusername(customer.name);
        updateusermail(customer.mail);
        updateuserid(customer.id);
        setIsAuthenticated(true);
    }

    const handleLogout=()=>{
        setIsAuthenticated(false);
        setUserid("");
        setUsername("");
        setUsermail("");
        setUserrole("");
    }

    return (
        <AdminContext.Provider
        value={{
          isAuthenticated,
          username,
          userid,
          usermail,
          userrole,
          cartList,
          cartLength,
          toggle,
          handleLogout,
          handleLogin,
          updateuserid,
          updateusername,
          updateusermail,
          updateuserrole,
          updatecartList,
          handleToggle,
        }}
      >
        {props.children}
      </AdminContext.Provider>
    );
}

export default AdminContext;