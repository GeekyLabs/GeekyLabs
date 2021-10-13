import React from 'react';

const bgColors = {
  default: "bg-black",
  red: "bg-red-700",
  blue: "bg-blue-700",
  green: "bg-green-700",
}

const Footer = ({bgColor}) => {
    
    return (
        <footer className={`${bgColors[bgColor] || bgColors.default} text-white border-solid border-1 border-light-blue-500 rounded-full relative bottom-0 text-center justify-center grid auto-cols-max md:grid-cols-3 grid-cols-1`}>
            <div>
                <h1 className="text-2xl">
                   
                </h1>
            </div>
            <div className="flex text-gray-300 items-center mx-auto  ">
            <a href="https://twitter.com/CryptoQuonks" className="px-3  items-center hover:bg-blue-300 green-300 py-3"><img src="../images/twitterr.png"  width="40" alt="" />
            </a>
            <a href="https://discord.gg/UJGyG5uCeP" className="px-3 hover:bg-purple-500 blue-500 py-3 "><img src="../images/discord2.png"  width="40" alt="" />
            </a>
            </div>

        </footer>
                )
            }
export default Footer;

