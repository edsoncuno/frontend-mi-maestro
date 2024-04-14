import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./src/App";

document.body.innerHTML = '<div id="app"></div>';

createRoot(document.getElementById("app")).render(<App />);