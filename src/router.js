// import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Movies from "./pages/Movies";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import MoviesDetail from "./pages/MoviesDetail";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Movies />
    },
    {
        path : "/news",
        element : <News />
    },
    {
        path : "/news/:newsid",
        element : <NewsDetail />
    },
    {
        path : "/movies/:moviesid",
        element : <MoviesDetail />
    }
])

export default router;