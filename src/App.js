import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import logoImg from './assets/img/JF_Logo-removebg-preview.svg'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  if (loading) {
    return <div className='loading'>
      <div className='loader'>
        <div className="logoSvg">
          <svg id="e4N6E127wte1" className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514 452" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
            <g transform="matrix(.096885 0 0-.096219 7.389209 441.966036)">
              <path d="M20,4456c0-3,41-79,92-169c50-89,101-179,112-199l21-38h1975c1859-1,2169-5,2191-27c15-15-95-209-1034-1828-160-275-297-512-306-527-9-16-20-26-26-25-12,4-80,113-164,263l-62,112l27,53c33,67,252,453,346,612c48,81,67,122,60,129-6,6-99,12-224,16l-215,5-175-304c-244-421-280-490-274-515c3-12,146-266,318-565c171-299,322-563,336-587c13-24,26-42,27-40c8,8,960,1652,1377,2378c409,712,701,1216,709,1226c7,8-7,13-48,18-81,8-5063,21-5063,12Z" stroke="#fff" stroke-width="200" stroke-dashoffset="20761.779416" stroke-dasharray="20761.779416" className="path" />
              <path d="M658,3633c-87-2-158-6-158-8c0-11,358-636,918-1605c113-195,262-454,332-575s176-305,237-410c60-104,197-341,303-525c220-383,278-480,289-480c12,0,68,87,139,216c98,175,97,150,4,322-44,81-116,208-160,282-340,578-786,1352-857,1488-30,57-35,76-26,85c8,8,77,13,224,16l212,3l108,181c59,99,105,183,101,186-3,3-207,8-454,11s-450,7-453,10c-6,7-227,392-227,396c0,2,395,5,878,5c482,1,1005,5,1162,8l285,6l107,190l108,190-108,6c-105,6-2656,7-2964,2Z" stroke="#fff" stroke-width="200" stroke-dashoffset="15118.155658" stroke-dasharray="15118.155658" className="path" />
            </g>
          </svg>
        </div>
        <div className="logoImg">
          <img src={logoImg} alt="img" className="svg" />
        </div>
      </div>
    </div>
  }
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
