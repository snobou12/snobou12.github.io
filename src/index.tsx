
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./utils/i18next";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>`loading` {/**spinner */} </div>}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
