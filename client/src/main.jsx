import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import Provider from "./provider/Provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-7xl mx-auto">
      <Provider>
        {" "}
        <RouterProvider router={router} />
      </Provider>
    </div>
  </StrictMode>
);
