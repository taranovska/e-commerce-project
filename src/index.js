import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

// dev - c5vbywdm.us.auth0.com;
// NEa05Wr7t70K3pwcYiC4ydvJnh1bNdjh

ReactDOM.render(
  <Auth0Provider
    domain="dev-c5vbywdm.us.auth0.com"
    clientId="NEa05Wr7t70K3pwcYiC4ydvJnh1bNdjh"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
