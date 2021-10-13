import Head from 'next/head'
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
export default function Mint() {

  // FOR WALLET


  return (
    <div id="bodyy" content="../images/drops.png" className="font-gluten bg-black">
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
<Navbar/>

<div className="px-5 py-3 rounded-lg" id="UrbanMartians">
              <div className="max-w-6xl items-center  bg-transparent rounded-lg mx-auto  p-8 text-center border-solid border-0 border-gray-500">
                  <div className="max-w-6xl rounded-lg  mb-3 border-solid border-2 border-light-blue-500 bg-blue-900 mx-auto my-0  text-center">
                  <a href="" className=""><img src="../images/gangu.png"  width="1200" alt="" /></a>
                </div>  <h3 className="text-4xl pt-3 md:text-6xl font-gluten text-white mb-6">Urban Martians!</h3> 
                <h3 className="text-xl md:text-3xl font-gluten text-blue-300 ">Total Supply: 3000</h3> 
                <h3 className="text-lg pt-8 md:text-2xl font-gluten text-white mb-8">The Struggle is real... Help the Urban Martians rebuild their Kambucha & Guac machines before it's too late!</h3> 
                <a  href="https://urbanmartians.net/" className=" font-gluten rounded-full text-3xl md:text-4xl border-4 py-4 px-4 bg-black-600   hover:bg-red-300 text-gray-300  hover:text-black p-2 "> Website</a>
        <br/>

      </div>

    </div>


      <div className="px-5 py-3 rounded-lg" id="Quonks">
              <div className="max-w-6xl items-center  bg-transparent rounded-lg mx-auto  p-8 text-center border-solid border-0 border-gray-500">
                  <div className="max-w-6xl rounded-lg  mb-3 border-solid border-2 border-light-blue-500 bg-blue-900 mx-auto my-0  text-center">
                  <a href="" className=""><img src="../images/gang.png"  width="1200" alt="" /></a>
                </div>  <h3 className="text-4xl pt-3 md:text-6xl font-gluten text-white ">Quonks!</h3> 
                <h3 className="text-xl pt-3 md:text-xl font-gluten text-yellow-400 mb-6">(Under Quonkstruction)</h3> 
                <h3 className="text-xl md:text-3xl font-gluten text-blue-300 ">Total Supply: 7101</h3> 
                <h3 className="text-lg pt-8 md:text-2xl font-gluten text-white mb-8">Does a Quonk Quack? No, that’s what Ducks do... Help the Quonks get back to normal "duck-in-pond-life" (whatever that is) by giving Quonkstein more Ethereum to counteract the GWEI poisoning!</h3> 
                <a  href="https://quonks.io" className=" font-gluten rounded-full text-3xl md:text-4xl border-4 py-4 px-4 bg-black-600   hover:bg-red-300 text-gray-300  hover:text-black p-2 "> Website</a>
        <br/>

      </div>

    </div>
          
<Footer/>
     </div>  
    
    )
  }