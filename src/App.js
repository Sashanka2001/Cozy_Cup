import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from './screens/Layout';
import Home from './screens/Home';
import About from "./screens/About";
import Contact from "./screens/Contact";
import Shop from "./screens/Shop";
import ProfileIcon from "./components/ProfileIcon";
import UserProfile from "./screens/UserProfile";
import Category from "./screens/Category";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/ProfileIcon" element={<ProfileIcon />} />
            <Route path="/user" element={<UserProfile/>}/>
            <Route path="/category/:id" element={<Category/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
