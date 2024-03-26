import './GetToKnowUs.css'

import Get1 from './../../../images/Get1.jpg'
import Get2 from './../../../images/Get2.jpg'



const GetToKnowUs = () => {
  return (
    <div className='GetToKnowUs'>
      <h1 className="poppins-bold" style={{ color: "#3F3F3F" }}>
        Get to know <span style={{ color: "#F72D57" }}>us</span>
      </h1>
      <div className="gridContainer">
        
        <div><img src={Get1} className='images gridItem'></img></div>
        <div className='gridItem'>
          <h1 className="poppins-semibold" style={{ color: "#F72D57" }}>
            Teamwork{" "}
            <span style={{ color: "#3F3F3F" }}>is the key to our success</span>
          </h1>
          <p
          className="poppins-light"
          style={{ color: "#3F3F3F" }}
        >
          At TasteNow we make sure that every decision is determined by a team of us. Everyone´s opinion matters, and as group, we are stronger. We firmly belive that team work, makes the dream work.
        </p>
        </div>
        
        <div className='gridItem'>
          <h1 className="poppins-semibold" style={{ color: "#3F3F3F" }}>
            We are all in for the{" "}
            <span style={{ color: "#F72D57" }}>environment</span>
          </h1>
          <p
          className="poppins-light"
          style={{ color: "#3F3F3F" }}
        >
          TasteNow donates $1 penny for every purchase made from the app to an organization that takes care of our enviromet. We belive that with everyone´s help, we can make a better world. 
        </p>
        </div>
        <div><img src={Get2} className='images gridItem'></img></div>
      </div>
    </div>
  );
};

export default GetToKnowUs;
