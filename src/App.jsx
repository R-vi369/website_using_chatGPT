import React from 'react'
 

 
import HomePage from './components/HomePage.jsx';

import TshirtCard from './components/TshirtCard';
import tshirtsData from './tshirtsData';

import PantsCard from './components/PantsCard.jsx';
import HorizontalScroll from './components/HorizontalScroll.jsx';
import pantsData from './pantsData.jsx';

import ShoeCard from './components/ShoeCard';
import shoesData from './shoesData';

import Footer from './components/Footer.jsx';


const App = () => {
  
  return (
    <>

      <div>
        <HomePage />
        {/* Other website sections go here */}
      </div>





      {/* t-shirt */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">T-shirt Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tshirtsData.map((tshirt, index) => (
            <TshirtCard key={index} tshirt={tshirt} />
          ))}
        </div>
      </div>



      {/* PantsSection */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Pants Collection</h1>
        <HorizontalScroll>
          {pantsData.map((pant, index) => (
            <PantsCard key={index} pant={pant} />
          ))}
        </HorizontalScroll>
      </div>


      {/* shoes */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Shoes Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {shoesData.map((shoe, index) => (
            <ShoeCard key={index} shoe={shoe} />
          ))}
        </div>
      </div>







      {/* footer */}
      <div className="bg-gray-100">
        {/* Your website content */}
        <Footer />
      </div>
    </>
  )
}

export default App