import React from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = ({ children }) => {
  return  (
    <div className="app">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default App;
