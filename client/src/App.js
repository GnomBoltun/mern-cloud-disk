import Navbar from "./components/Navbar/Navbar";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "./API/user";


function App() {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth())
    }, [])


    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navbar />,
            children: [
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "registration",
                    element: <Registration />,
                },
            ],
        },
    ]);

    const authRouter = createBrowserRouter([
        {
            path: "/",
            element: <Navbar />,
            children: [
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "registration",
                    element: <Registration />,
                },
            ],
        },
    ]);


  return (
    <div className="App">
        {!isAuth &&
            <RouterProvider router={router}/>
        }
        {isAuth &&
            <RouterProvider router={authRouter}/>
        }
    </div>
  );
}

export default App;
