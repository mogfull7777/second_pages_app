// import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Movies from "./pages/Movies";
import News from "./pages/News";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Movies />
    },
    {
        path : "/news",
        element : <News />
    }
])

export default router;