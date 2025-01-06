import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./src/Components/Shimmer";
import { useContext } from "react";
import UserContext from "./src/utils/userContext";

// Chunking
// Code spliting
// Dynamic bundling
// Lazy loading
// On demand loading
// Dunamic import
const Grocery  = lazy(()=> import("./src/Components/Grocery"));
const About  = lazy(()=> import("./src/Components/About"));
const Contact  = lazy(()=> import("./src/Components/Contact"));
const Error  = lazy(()=> import("./src/Components/Error"));
/*
* Header
    - Logo
    - Nav links
* Body
    - Search
    - Restaurant Container
    - Restaurant Cards
* Footer
    - Copyright
    - Links
    - Address
    - Conatct
*/

const AppLayout = () => {

    const [ userName, setUserName ] = useState();

    useEffect(() => {
        const data = {
            name: "Radhika",
        }

        setUserName(data.name);

    }, [])

    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )


    
}


const appRouter = createBrowserRouter([
    { 
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer />}><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Suspense fallback={<Shimmer />}><Contact /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <Suspense fallback={<Shimmer />}><RestaurantMenu /></Suspense>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
            },
        ],
        errorElement: <Suspense fallback={<Shimmer />}><Error /></Suspense>
    }    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(< RouterProvider router={appRouter} />);