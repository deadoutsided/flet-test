import { createBrowserRouter } from "react-router";
import { Layout } from "./src/components/Layout";
import { PostPage } from "./src/pages/PostPage";
import { PostsPage } from "./src/pages/PostsPage";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: ":page",
        element: <PostsPage />,
      },
      {
        path: "post/:postId",
        element: <PostPage />,
      },
    ],
  },
]);

export default router;
