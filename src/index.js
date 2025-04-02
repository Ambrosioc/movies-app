import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Nav />
			<App />
			<Footer/>
		</BrowserRouter>
	</React.StrictMode>
);
