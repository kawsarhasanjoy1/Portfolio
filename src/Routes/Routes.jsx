import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../Layouts/Main';
import App from '../App';
import About from '../Page/About/About';
import Project from '../Page/Project/Project';
import AddCard from '../Page/AddCard/AddCard';
import Contact from '../Page/Contact/Contact';

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <App/>
            },
            {
               path: '/about',
               element: <About/>
            },
            {
                path:'/project',
                element: <Project/>
            },
            {
               path: '/contact',
               element: <Contact/>
            },
            {
                path: '/myprojectadd/cart',
                element: <AddCard/>
            }
        ]
    }
])