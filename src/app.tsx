import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import { ParallaxProvider } from "react-scroll-parallax"

import "./app.css"
// import logo from "./assets/logo.png"
import Trippy from "./routes/trippy/Trippy"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Trippy />,
  },
])

export function App() {
  return (
    <div className="root">
      <RouterProvider router={router} />

      {/* <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
        </div> */}
    </div>
  )
}
