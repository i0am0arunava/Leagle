/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import "./sport.css"
import { useState } from 'react'

import Image from "next/image";

import logo1 from './logo1.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import logo5 from './logo5.png';
import logo6 from './logo6.png';
import logo7 from './logo7.png';
import logo8 from './logo8.png';
import logo9 from './logo9.png';

function App() {
  const [count, setCount] = useState(0)
  const item1 = ["Company", "Property"]
  const item2 = ["Document", "Startup", "Content"];
  const logos = [
    { name: 'Altshift', logo: logo1 },
    { name: 'Boltshift', logo: logo2 },
    { name: 'Cataalog', logo: logo3 },
    { name: 'Capsule', logo: logo4 },
    { name: 'Biosynthesis', logo: logo5 },
    { name: 'Cataalog', logo: logo3 },
    { name: 'Capsule', logo: logo4 },


  ];

  return (
    <>
      <div className="sub1">

        <div className="nav">
          <div className="logo"></div>
          <div className="home"> Home</div>
          <div className="property">Property</div>
          <div className="document">Document</div>
          <div className="startup"> Startup </div>
          <div className="company">Company</div>
          <div className="connect"> <button className=" button">connect</button></div>
        </div>
        <div className="total">


          <div className="left"></div>
          <div className="right"></div>
          <div className="image"></div>
          <div className="grid1"></div>
          <div className="grid2">
            <div className="first">DISCOVER,<span className="fc">ANALYZE</span></div>
            <div className="second">AND STAY INFORMED



              <button className="but1">Talk to layer</button>
            </div>
          </div>
          <div className="grid3"></div>



        </div>


      </div>
      <div className="sub2">
        <div className="part1">
          <div className="About"> About Us</div>
          <div className="up1">

            {item1.map((item, index) => (
              <div className="a1"key={`${index}`}>{item}</div>
            ))

            }





          </div>
          <div className="do1">
            {item2.map((item, index) => (
              <div className="a2" key={`${index}`}>{item}</div>

            ))
            }


          </div>
        </div>
        <div className="part2">
          <div className="up2">Leagle</div>
          <div className="para1">Leagle is your ultimate destination for comprehensive legal research. Our platform provides seamless access to a vast collection of legal documents, case law, statutes, and expert analysis from around the world. Discover essential legal resources, analyze complex legal issues, and stay informed with the latest updates and insights, all in one convenient location</div>
          <div className="but2"><button>Discover </button></div>
        </div>
        <div className="trust">Our Trusted Users</div>
        <div className="up3">
          {logos.map((item, index) => (
            <div key={index} className="fg1">
              <Image className="logon"
                src={item.logo}
                alt={item.name}
              // Adjust the width
              />
              <span className="name1">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="do3">



          {logos.map((item, index) => (
            <div key={index} className="fg1">
              <Image className="logon"
                src={item.logo}
                alt={item.name}
              // Adjust the width
              />
              <span className="name1">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="sub3">
        <div className="part4">Our services</div>
        <div className="part5">We offer legal advice anytime! Our experienced lawyers are available 24/7 to answer your questions, big or small. They will provide clear and easy-to-understand guidance in your language, without all the confusing legal terms. We simplify legal matters so you do not have to stress.</div>
        <div className="box1">

          <div className="blo"><Image className="blo"
            src={logo6}
            alt={"logo"}
          // Adjust the width
          /></div>
          <div className="but4"><button>Online Lawyer Consultation</button></div>
          <div className="but5"><button>Document Review & Consult</button></div>
          <div className="bp1">Now you can consult a lawyer or have your legal documents reviewed from the comfort of your home. Enjoy secure calls and access to verified lawyers.</div>
          <div className="bt1">Online Consultation
            with a Lawyer</div>




        </div>
        <div className="box2">
           <div className="blo"><Image className="blo"
            src={logo7}
            alt={"logo"}
          // Adjust the width
          /></div>
          <div className="but4"><button> Online Lawyer Consultation</button></div>
          <div className="but5"><button> Document Review & Consult</button></div>
          <div className="bp1">Whether for corporate, HR, professional, or personal use, you can have any legal document drafted and customized to fit your specific needs at an affordable price.</div>
          <div className="bt1">Documentation by
          Expert Professionals</div>
          <div className="g"><button>Gift Deed</button></div>
        </div>
        <div className="box3">
        <div className="blo"><Image className="blo"
            src={logo8}
            alt={"logo"}
          // Adjust the width
          /></div>
        <div className="but4"><button>Online Lawyer Consultation</button></div>
          <div className="but5"><button>Trademark</button></div>
          <div className="bp1">Whether you are planning a start-up or managing an ongoing business, focus on your operations while we handle your legal concerns. We offer consulting, drafting, review, and filing services all in one place.</div>
          <div className="bt1">Start-up Legal
          Solutions</div>
          <div className="g"><button>Gift Deed</button></div>



        </div>
        <div className="box4">

        <div className="blo"><Image className="blo"
            src={logo9}
            alt={"logo"}
          // Adjust the width
          /></div>
        <div className="but4"><button>Sale Agreement or Agreement to Sale Review</button></div>
          <div className="but5"><button>Sale Deed Drafting</button></div>
          <div className="bp1">Reliable Property Legal Services. We assist you in making informed property investment decisions. India is top provider of property legal solutions.</div>
          <div className="bt1">Property legal solutions for all
          your property investments</div>
          <div className="g"><button>Agreement to Sale Drafting</button></div>




        </div>
      </div>
      <div className="sub4"></div>

    </>
  )
}

export default App
