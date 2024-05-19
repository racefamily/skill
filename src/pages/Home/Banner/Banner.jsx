const Banner = () => {
    return (
      <div className="hero min-h-screen" style={{ backgroundImage: `url('https://i.imgur.com/BnKfLsS.jpg')` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome <br /> Race Family</h1>
            <p className="mb-5">We Share, We Care</p>
            <a href="/OurEvent" className="btn btn-active btn-secondary">Our Event</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  