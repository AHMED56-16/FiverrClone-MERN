import Navbar from "./components/navbar/Navbar.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Gigs from "./pages/gigs/Gigs.jsx";
// import Gig from "./pages/gig/Gig.jsx";
import Orders from "./pages/orders/Orders.jsx";
import MyGigs from "./pages/myGigs/MyGigs.jsx";
import Add from "./pages/add/Add.jsx";
import Messages from "./pages/messages/Messages.jsx";
import Message from "./pages/message/Message.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./app.scss";
import Login from "./pages/login/Login.jsx";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.jsx";

function App() {
  const Layout = () => (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );

  const NoLayout = () => (
    <div className="app">
      <Outlet />
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/gigs", element: <Gigs /> },
        { path: "/myGigs", element: <MyGigs /> },
        { path: "/orders", element: <Orders /> },
        { path: "/messages", element: <Messages /> },
        { path: "/message/:id", element: <Message /> },
        { path: "/add", element: <Add /> },
        // { path: "/gig/:id", element: element: <Gig /> },
      ],
    },
    {
      element: <NoLayout />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
