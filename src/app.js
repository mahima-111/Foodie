import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

//dynamic import of contact
const Contact=lazy(()=>import("./components/Contact"));

const AppLayout= ()=>{
    return <div className="app">
        <Provider store={appStore}>
            <Header />
            <Outlet/>
            <Footer />
        </Provider>
    </div>
};
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:< AppLayout/>,
        children:[
            {
                path:"/",
                element:< Body/>, 
            },
            {
                path:"/about",
                element:< About/>,       
            },
            {
                path:"/contact",
                element:<Suspense fallback={<h1 className="text-center text-4xl font-bold my-8">Loading Contact page...</h1>}>
                    < Contact/>
                </Suspense>,
            },
            {
                path:"/restaurant/:resId",
                element:< RestaurantMenu/>
            },
            {
                path:"/cart",
                element:< Cart/>
            },
        ],
        errorElement: <Error/>
    },
    
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);