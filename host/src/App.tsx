import './App.css'

// @ts-ignore
import Micro1 from "micro1/App"
// @ts-ignore
import Micro2 from "micro2/App"
// @ts-ignore
import Micro3 from "micro3/App"

import {  createRootRoute, createRoute, createRouter, Link, Outlet, RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Main from './pages/main'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div style={{display:'flex', gap: '1rem'}}>
        <Link to="/" >
          home
        </Link>
        <Link to="/micro1" className="[&.active]:font-bold">
          micro1
        </Link>
        <Link to="/micro2" className="[&.active]:font-bold">
        micro2
        </Link>
        <Link to="/micro3" className="[&.active]:font-bold">
        micro3
        </Link>

      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});


const routeMain = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Main,
})
const routeMicro1 = createRoute({
  getParentRoute: () => rootRoute,
  path: '/micro1',
  component: Micro1,
})
const routeMicro2 = createRoute({
  getParentRoute: () => rootRoute,
  path: '/micro2',
  component: Micro2,
})
const routeMicro3 = createRoute({
  getParentRoute: () => rootRoute,
  path: '/micro3',
  component: Micro3,
})


const routeTree = rootRoute.addChildren([routeMain,routeMicro1, routeMicro2,routeMicro3])
const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return <RouterProvider router={router} />
}

export default App
