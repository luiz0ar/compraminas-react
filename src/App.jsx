import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <main className="content">
         <ScrollToTop />
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default App;
