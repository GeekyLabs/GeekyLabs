import Head from 'next/head'
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';

export default function Mint() {

  // FOR WALLET


  return (
    <div id="bodyy" content="../images/drops.png" className="font-montserrat bg-black" >
      
      <Head>
        <title>GeekyLabs</title>
        <link rel="icon" href="/images/glabs.gif"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="og:title" content="Quonks" key="ogtitle" />
        <meta property="og:description" content="" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://geekylabs.art/" key="ogurl"/>
        <meta property="og:image" content="https://geekylabs.art/images/gang2.png.png" key="ogimage"/>
        <meta property="og:site_name" content="https://geekylabs.art/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="https://www.twitter.com/CryptoQuonks" key="twdomain" />
        <meta property="twitter:url" content="https://geekylabs./" key="twurl" />
        <meta name="twitter:title" content="Quonks" key="twtitle" />
        <meta name="twitter:description" content="" key="twdesc" />
        <meta name="twitter:image" content="https://geekylabs.art/gang2.png" key="twimage" />
      </Head>

      <div >
        
            <Navbar/>
              <div className="px-4 py-8 rounded-lg" id="Welcome">  
              <div className=" max-w-md items-center rounded-full mx-auto  p-4 text-center border-solid border-0"> <br/>  
              <h3 className="text-3xl   md:text-3xl  font-montserrat font-gluten text-white ">Welcome To:</h3><br/>
                </div>      
                <div className="mt-3 max-w-lg items-center  rounded-full mx-auto transform hover: hover:scale-75 transition duration-300 text-center border-dotted border-4 border-white">
                <br/><a href="" className=""><img src="../images/glabs.gif"  width="800" alt="" /></a>
          
                    <h3 className="text-6xl  md:text-6xl font-gluten  text-gray-100">GeekyLabs</h3>   
                    <h3 className="text-4xl  md:text-4xl font-gluten  text-gray-100">.art</h3>  
                    <h3 className="text-sm  md:text-sm font-gluten  text-gray-100">(push me)</h3>   
                    <div className="px-5 py-3 rounded-lg" id="Quonks">
                 <div className="max-w-sm items-center  bg-transparent rounded-full mx-auto  p-8 text-center border-solid border-0 border-gray-500">
                  </div>
                  </div>           
                <div className="mt-0 max-w-md items-center rounded-full mx-auto text-center border-solid border-0">
           
                </div>

               </div>  
               </div>
              <div className="px-4 py-8 rounded-lg" id="Welcome">
                <div className="hover:transform rotate-45 mt-0 max-w-md items-center rounded-full mx-auto  p-4 text-center border-solid border-0">
                  <a  href="/about" className=" font-gluten rounded-full text-3xl md:text-4xl border-4 py-4 px-4 bg-black transition ease-in-out duration-700 hover:bg-blue-200 text-gray-300  hover:text-black p-2 ">Learn More</a>
                  </div></div>
                  
          
            <div className="px-5 py-3 rounded-lg" id="Urban Martians">
              <div className="max-w-3xl items-center  bg-transparent rounded-lg mx-auto  p-8 text-center border-solid border-0 border-gray-500">
              
                  <div className="max-w-4xl rounded-lg  mb-3 border-solid border-2 border-light-blue-500 bg-blue-900 mx-auto my-0  text-center">
                  <a href="" className=""><img src="../images/gangu.png"  width="1200" alt="" /></a>
                </div>  
                <h3 className="text-4xl md:text-6xl font-gluten text-blue-300 mb-6">Urban Martians</h3> 
               
                <h3 className="text-lg md:text-xl font-gluten text-white mb-6">Discover Our first PFP Focused Collectible NFT project! <br/><br/> Do You Have What it Takes to Save Them? </h3> <br/>
                <a  href="/projects" className="font-gluten py-4 rounded-full text-2xl md:text-3xl border-4  px-4 bg-black  transition ease-in-out duration-700 hover:bg-red-300 text-gray-300 hover:text-black p-2 ">Read More</a>
              </div>
            </div>  
      
      </div>
    <br/>
   <br/>


<Footer/>
     </div>  
    
    )
  }