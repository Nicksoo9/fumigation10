import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import { RootLayout } from "./layouts/RootLayout";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage").then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(module => ({ default: module.AboutPage })));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { 
        index: true, 
        Component: HomePage 
      },
      { 
        path: "about", 
        Component: AboutPage 
      },
    ],
  },
]);