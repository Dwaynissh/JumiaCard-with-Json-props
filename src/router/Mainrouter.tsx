import {createBrowserRouter } from "react-router-dom"
import Layout from "../components/common/Layout"
import Homescreen from "../pages/Homescreen"

export const Mainrouter =  createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Homescreen/>
                }
            ]
        }
    ]
)