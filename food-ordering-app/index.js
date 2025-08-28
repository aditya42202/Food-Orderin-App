import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./src/components/Body";
import Error from "./src/components/Error/Error";
import Spinner from "./src/components/Spinner/Spinner";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";

//Lazy Load Components
const About = lazy(() => import("./src/components/About/About"));
const Contact = lazy(() => import("./src/components/Contact/Contact"));
const RestaurantMenu = lazy(() => import("./src/components/Restaurants/RestaurantMenu/RestaurantMenu"));
const Cart = lazy(() => import("./src/components/Cart/Cart"));
const Login = lazy(() => import("./src/components/Login/Login"));
//routes
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/", //Home
        element: <Body/> 
      },
      {
        path:"/about", //About
        element: (
          <Suspense fallback={<Spinner/>}>
            <About/>
          </Suspense>
        ) 
      },
      {
        path:"/contact", //Contact
        element: (
          <Suspense fallback={<Spinner/>}>
            <Contact/>
          </Suspense>
        ) 
      },
      {
        path:"/cart", //Cart
        element: (
          <Suspense fallback={<Spinner/>}>
            <Cart/>
          </Suspense>
        ) 
      }
    ],
  },
  {
    path: "/restaurants/:id",
    element: (
      <Suspense fallback={<Spinner/>}>
        <RestaurantMenu/>
      </Suspense>
    )
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Spinner/>}>
        <Login/>
      </Suspense>
    )
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={<Spinner/>} persistor={persistor}>
      <RouterProvider router={appRouter}/>
    </PersistGate>
  </Provider>
);
 