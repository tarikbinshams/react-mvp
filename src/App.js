import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Feedback from './components/Feedback.js';
import Information from './components/Information.js';
import ProductDetails from './components/ProductDetails.js';
import Signin from './components/Signin.js';
import Dashboard from './components/Admin/Dashboard';
import Products from './components/Admin/Products';
import Users from './components/Admin/Users';
import UserDetails from 'components/Admin/UserDetails.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:pId' element={<ProductDetails />} />
          <Route path='/information' element={<Information />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/products' element={<Products />} />
          <Route path='/admin/users' element={<Users />} />
          <Route path='/admin/users/:uId' element={<UserDetails />} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
