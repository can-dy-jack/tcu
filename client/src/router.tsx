import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import { Settings } from "./views/settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/settings",
    element: <Settings />,
  }
])

function RouterApp() {
  return (
    <RouterProvider router={router} />
  );
}

export default RouterApp;
