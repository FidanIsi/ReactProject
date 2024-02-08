import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

// React strict - explain later


// create pages: Home, Contact, About
// create layout: Header & Footer
// set up routing
// Header will have links to all 3 aforementioned pages