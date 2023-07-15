import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Posts from './Components/Posts/Posts.jsx';
import Movies from './Components/Movies/Movies.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import Layout from './Components/Layout/Layout.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import { Provider } from 'react-redux';
import store from './Redux/Store.js';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { path: "team", element: <Navbar />, },
      { index: true, element: <Home />, },
      { path: "posts", element: <Posts />, },
      { path: "movies", element: <Movies />, },
      { path: "login", element: <Login />, },
      { path: "signup", element: <Register />, },
      { path: "*", element: <NotFound />, },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router}>
          <Layout />
        </RouterProvider>
      </Provider>

    </div>
  );
}

export default App;
