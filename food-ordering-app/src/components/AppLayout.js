import { Outlet } from "react-router-dom";
import Header from "./Header";
import React, { Suspense } from "react";
import Spinner from "./Spinner/Spinner";

const AppLayout = () => {
    return (
      <div className="App">
        <Header/>
        <Suspense fallback={<Spinner/>}>
          <Outlet/> {/* Rendering Child Component */}
        </Suspense>
        
      </div>
    )
  };

  export default AppLayout;