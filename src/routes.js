import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ProductList from './pages/ProductList';
import CountryDetail from './pages/CountryDetail';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route 
          path="/countries" 
          element={
            // <PrivateRoute>
              <ProductList />
            // </PrivateRoute>
          }
        />
        <Route 
          path="/countries/:code" 
          element={
            // <PrivateRoute>
              <CountryDetail />
            // </PrivateRoute>
          }
        />

          {/* below path is redirecting base path to sign in page */}
         <Route path="/" element={<Signin />} />

          {/* This path is default path, we used wild card for this purpose, if no path was found then app will be redirected to sign in page */}
         <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
