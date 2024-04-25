import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Listing from "./pages/listing";
import NotFoundPage from "./pages/NotFoundPage.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/listing/:listingId",
      element: <Listing />,
    },
    {
      path: "",
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
