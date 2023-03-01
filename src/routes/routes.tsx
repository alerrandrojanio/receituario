import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import { App } from "../App"
import { Page } from "../pages/Page"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/page" element={<Page />} />
    </>
  )
)
