import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ParallaxProvider } from "react-scroll-parallax"

import "./app.css"
import ConsciousnessSessionLp from "./routes/consciousness-session-lp/ConsciousnessSessionLp"
import logo from "./assets/logo.png"
import Trippy from "./routes/trippy/Trippy"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Trippy />,
  },
  {
    path: "/lp",
    element: <ConsciousnessSessionLp />,
  },
])

export function App() {
  return (
    // @ts-ignore
    <ParallaxProvider>
      <div className="root">
        <RouterProvider router={router} />

        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
    </ParallaxProvider>
  )
}
