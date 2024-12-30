import { createBrowserRouter } from "react-router-dom";
// import RootLayout from "../layouts/RootLayout";
import { Home } from "../pages/Home";
import { MoviesById } from "../container/MoviesById";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/movies/:id",
    element: <MoviesById />,
  },
]);
