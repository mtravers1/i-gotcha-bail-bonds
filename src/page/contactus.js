const Contact = ()=>{
    return (
      <div>
        <span id="banner">
          <h1>Contact Us</h1>
        </span>
        <div id="post">
          <span id="resources">
            <h1>Bail Bond Office Location</h1>
            <p>
              0000 Address Road, Florida County, Florida USA (000) 000-0000
              Mail@mail.com
            </p>
            <span id="resourcebutton">
              <button style={{ backgroundColor: "green" }}>
                Bail Bonds: 000-000-0000
              </button>
              <button style={{ color: "black", position:"relative", left:"0px" }}>
                Email us: email@email.com
              </button>
            </span>
          </span>
          <span id="download">
            <h1>We're available 24/7/365</h1>
            <p>
              If you need a bail bond, you can call us anytime. Night or Day,
              we’re here to help you through this difficult process.
            </p>
          </span>
        </div>
      </div>
    );
}
export default Contact