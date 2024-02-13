import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";



import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Authors from "./pages/Authors";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Logout from "./pages/Logout";
import CategoryPost from "./pages/CategoryPosts";
import Dashboard from "./pages/Dashboard";
import AuthorPosts from "./pages/AuthorPosts";
import DeletePost from "./pages/DeletePost";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetail /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "authors", element: <Authors /> },
      { path: "posts/users/:id", element: <AuthorPosts /> },
      { path: "posts/:id/edit", element: <EditPost /> },
      { path: "posts/:id/delete", element: <DeletePost /> },
      { path: "posts/categories/:category", element: <CategoryPost /> },
      { path: "logout", element: <Logout /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "create-post", element: <CreatePost /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
