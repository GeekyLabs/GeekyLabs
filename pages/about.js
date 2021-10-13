import Head from 'next/head'
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
export default function Mint() {

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

      <div >
            <Navbar/>

            <div className="px-4  rounded-lg" id="about">
                <div className="max-w-6xl items-center  bg-transparent rounded-lg mx-auto  p-12 text-center border-solid border-0 border-gray-500">
              
                <div className="px-4  rounded-lg pb-3" id="about">
                <div className="max-w-md items-center  bg-transparent rounded-lg mx-auto  p-8 text-center border-solid border-0 border-gray-500">
                <a href="https://www.geekylabs.art/" className=""><img src="../images/gorilla.png"  width="1200" alt="" /></a></div></div>
                  <h3 className="text-4xl md:text-4xl text-blue-300  font-montserrat">Hi, <br/></h3>
                  <h3 className="text-4xl md:text-4xl text-gray-400  font-montserrat">My Name's Rob <br/></h3>
      
              <p className="font-small text-md md:text-xl text-white mb-4  font-mon font-montserrat tracking-wide"><br/>It's nice to finally meet you. I'm an independent, Full-Stack Developer & Graphic Artist who has a Bachelors Degree in Computer Science (BCompSc).</p>
              <p className="font-small text-md md:text-xl text-white mb-4  font-mon font-montserrat tracking-wide"><br/>This community was created first and foremost to specialize in small, manageable projects for the new and ever-growing PFP NFT space. <br/>(Profile Picture NFT's) </p>
              <br/>
              <h3 className="text-4xl md:text-4xl text-blue-300  font-montserrat">Why is this so Important? <br/></h3>
              <p className="font-small text-md md:text-xl text-white mb-4  font-mon font-montserrat tracking-wide"><br/>With new verification systems rolling out on major social media platforms shortly, the need for a blue check mark will soon fade, as your art will serve as your "one-stop-shop" to validity in the social realm.</p>
              <p className="font-small text-md md:text-xl text-white mb-4  font-mon font-montserrat tracking-wide"><br/>Profile pictures adhere to a specific guideline list and the standard is the same everywhere. In layman's terms, so you'll see the full picture without sacrificing any quality at the same time. Pixel pictures seem to be the "go-to", this is because they do not lose any quality whatsoever when scaled if properly tended to when creating them at the base.</p>
             <br/>
              <h3 className="text-4xl md:text-4xl text-blue-300  font-montserrat">Enough of the Boring Stuff... <br/></h3>
              <p className="font-small text-md md:text-xl text-white mb-4  font-mon font-montserrat tracking-wide"><br/>Our goal is to give you the same feeling we all got when we opened our Gameboys and saw our "whatevermonsters" growing, and fighting as we fed them virtual apples. With a side of funny.</p>
              <p className="font-small text-md md:text-xl text-white mb-4  font-mon font-montserrat tracking-wide"><br/>Familiar Languages & Frameworks:HTML, CSS, JavaScript, React, Python, Solidity, Three.js, p5.js, Node.js, Express, Fast API, Phaser, Web3.js, SQL, MERN, FARM...etc.</p>
              <p className="font-small text-md md:text-xl text-white mb-4  font-mon font-montserrat tracking-wide"><br/>An example of the verification system made by Mada Aflak, a Twitter Dev, can be seen below by clicking on the button.</p>
             <br/> <a  href="https://twitter.com/af_mada/status/1443243702156206089?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1443243702156206089%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fcointelegraph.com%2Fnews%2Fbragging-rights-twitter-previews-verification-badge-for-nft-profile-pics&fbclid=IwAR2Smf-RJ4qo-7S8U8YZd04O_ExUx4n43Ps2Yxj6l620Ebtq53qMo50FNjs" className=" rounded-full text-3xl border-4  bg-black  hover:bg-gray-600 text-white hover:text-white p-2 ">Click Here!</a>
             <br/> <p className="font-small text-md md:text-lg text-white mb-4  font-mon font-montserrat tracking-wide"><br/>(Please take note that "Urban Martians"" is our first project under the banner, future functionality will be discussed with the community as it's built.)</p>
              <p className="font-small text-md md:text-xl text-white mb-4  font-mon font-montserrat tracking-wide"><br/>Hope you Enjoy!</p> 
            
            </div>
          </div>  
      </div>

   <br/>

      


          
<Footer/>
     </div>  
    
    )
  }