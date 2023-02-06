import React from "react";
import "../Homecomponent/Section2.css";

const Section2 = () => {
  return (
    <div>
      <div className="sec2">
        <div className="sec-box1">
          <div className="content1">
            <span>WHO WE ARE</span>
          </div>
          <div className="content2">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              nihil iste, explicabo qui, magnam, reprehenderit modi maxime esse
              dicta ipsum nemo tempore sint. Nam aspernatur, libero repudiandae
              totam nesciunt at?
            </span>
          </div>
          <div className="content3">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              nihil iste, explicabo qui, magnam, reprehenderit modi maxime esse
              dicta ipsum nemo tempore sint. Nam aspernatur, libero repudiandae
              totam nesciunt at?
            </span>
          </div>
        </div>
        <div className="sec-box2">
          <img className="sec-img"
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <div className="blank-box"></div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
