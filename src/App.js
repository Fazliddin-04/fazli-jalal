import React, { Suspense } from 'react'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Loader from './components/Loader';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Home />
    </Suspense>
  );
}

export default App;
