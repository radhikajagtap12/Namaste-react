import { useEffect, useState, useContext } from "react";
import {LOGO} from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


const Header = () =>{ 

    const [loginBtn, setLoginBtn] = useState("Login");
    // no dependency array - useEffect is called on every component render
    // If dependancy array is emplty = [] then useEffect is called on intial render(Just Once)   
    // if dependancy array is not empty then useEffect is called everytime when the dependancy array changes. 
    useEffect(()=>{
    }, [])

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    const isOnline = useOnlineStatus(); // Check if user is online or offline
    
    return (
    <div className="header">
        <div className="container">
            <div className="headerBar">
                <div className="logoContainer">
                    <img src={LOGO} alt="Logo"/>
                </div>
                <div className="navItems">
                    <ul>
                        <li>{isOnline ? "🟢" : "🔴"}</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Conatct Us</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/grocery">Grocery</Link></li>
                        <li><button onClick={() => setLoginBtn(
                            loginBtn === "Login"? "Logout" : "Login"  // toggle login/logout button text
                        )} className="login p-0 m-0">{loginBtn}</button></li>
                        <li className="font-bold">{loggedInUser}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)}

export default Header;