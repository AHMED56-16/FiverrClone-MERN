import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> {'>'} Muhammad Ahmed Raza {'>'}
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://th.bing.com/th/id/R.e99bb831a5df4b568cd44740df53b079?rik=0ijGO2r0xspRUw&pid=ImgRaw&r=0"
              alt="user"
            />
            <p>
              Salam Ahmed! Kya tumhare paas kal wali image hai jo humne dekhi thi?
            </p>
          </div>
          <div className="item owner">
            <img
              src="/images/man.png"
              alt="owner"
            />
            <p>
              Waalikum Assalam! Haan haan, yeh dekho, mujhe mil gayi thi. Tumhein bhej raha hoon.
            </p>
          </div>
          <div className="item">
            <img
              src="https://th.bing.com/th/id/R.e99bb831a5df4b568cd44740df53b079?rik=0ijGO2r0xspRUw&pid=ImgRaw&r=0"
              alt="user"
            />
            <p>
              Bohat khoobsurat hai! Kahan se li thi yeh?
            </p>
          </div>
          <div className="item owner">
            <img
              src="/images/man.png"
              alt="owner"
            />
            <p>
              Yeh Pexels se download ki thi, unki gallery mein thi. Mujhe bhi kaafi pasand aayi.
            </p>
          </div>
          <div className="item">
            <img
              src="https://th.bing.com/th/id/R.e99bb831a5df4b568cd44740df53b079?rik=0ijGO2r0xspRUw&pid=ImgRaw&r=0"
              alt="user"
            />
            <p>
              Nice! Kya isay apne project mein use kar sakte hain?
            </p>
          </div>
          <div className="item owner">
            <img
              src="/images/man.png"
              alt="owner"
            />
            <p>
              Haan, bilkul. Pexels ke license free hain personal aur commercial use ke liye.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea type="text" placeholder="Write a message" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
