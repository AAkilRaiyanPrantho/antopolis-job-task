import "./Banner.css";
import bannerImage from "./../../../images/banner.jpg";
// import bannerBG from "./../../../images/bannerBG.jpg";

const Banner = () => {
  return (
    <div
      className="Banner"
    //   style={{
    //     backgroundImage: `url(${bannerBG})`,
    //     backgroundSize: "1700px 950px",
    //     objectFit: "contain",
    //     paddingLeft: '300px',
    //     backgroundRepeat: "no-repeat",
    //     zIndex: -1,
    //   }}
    >
      {/* Title */}
      <div>
        <h1 className="poppins-bold" style={{ color: "#3F3F3F" }}>
          Experience food <br></br>{" "}
          <span style={{ color: "#F72D57" }}>Delivery</span> like no other
        </h1>
        <p
          id="bannerText"
          className="poppins-light"
          style={{ color: "#3F3F3F" }}
        >
          We deliver the food of your choice wherever, whenever. Select your
          food from only the top restaurants in the area, and get it in a flash.
          Download the app now to discover more.
        </p>
      </div>
      {/* Banner Image */}
      <div>
        <img src={bannerImage} id="bannerImage"></img>
      </div>
    </div>
  );
};

export default Banner;
