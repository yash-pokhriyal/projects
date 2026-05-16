import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Profile from "./components/Profile";


import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";


// ek data fetch ka code 
async function githubProfileLoader() {
const res = await fetch("https://api.github.com/users/yash-pokhriyal");
if (!res.ok) throw new Error("Failed to fetch GitHub profile");
return res.json();
} 

function Layout() {
  return (
    <div>
      <header>
        <h1>My Shop</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/profile" prefetch="intent">
            Profile
          </Link>
        </nav>
      </header>

      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
      <footer>
        <p>© 2025 My Shop</p>
      </footer>
    </div>
  );
}


// isme array me pass krna jo jo child honge
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {index:true,element:<Home/>},
      {path:"about",element:<About/>},
      {path:"products",element:<Products/>},
      {path:"profile",element:<Profile/>,loader:githubProfileLoader},
    ]
  },

])

const App = () => {
  return <RouterProvider router={router} />
};

export default App;

// jab data fetch wala kaam krna chahte us samey react router ka setup complete different ho jata

// prefetch intent mai chahta wo data pehle se fetch krle
