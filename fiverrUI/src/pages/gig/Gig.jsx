import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Gig.scss";

const Gig = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
  });

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            FIVERR {'>'} GRAPHICS & DESIGN {'>'}
          </span>
          <h1>I will create AI generated art for you</h1>
          <div className="user">
            <img
              className="pp"
              src="https://th.bing.com/th/id/R.e99bb831a5df4b568cd44740df53b079?rik=0ijGO2r0xspRUw&pid=ImgRaw&r=0"
              alt="user profile"
            />
            <span>Muhammad Ahmed Raza</span>
            <div className="stars">
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <img src="/images/star.png" alt="star" />
              <span>5</span>
            </div>
          </div>

          {/* Keen Slider */}
          <div className="slider-wrapper">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide number-slide1">
                <img
                  src="https://th.bing.com/th/id/OIP.KmkFjBLupS8AxAW4DoRu3gHaE8?rs=1&pid=ImgDetMain"
                  alt="slide 1"
                />
              </div>
              <div className="keen-slider__slide number-slide2">
                <img
                  src="https://th.bing.com/th/id/OIP.R63GZqhEcMWoli9PqQ54mQHaEB?w=2558&h=1389&rs=1&pid=ImgDetMain"
                  alt="slide 2"
                />
              </div>
              <div className="keen-slider__slide number-slide3">
                <img
                  src="https://th.bing.com/th/id/OIP.wCnvInAh8dgayWV-anA_tAHaE8?o=7rm=3&rs=1&pid=ImgDetMain"
                  alt="slide 3"
                />
              </div>
            </div>
            <div className="slider-controls">
              <button onClick={() => instanceRef.current?.prev()}>&lt;</button>
              <button onClick={() => instanceRef.current?.next()}>&gt;</button>
            </div>
          </div>

          <h2>About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g.
            Esports team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images.
            You can also be incredibly precise if you have a clear image of what
            you want in mind. All of the images I create are original and will
            be found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>

          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img
                className="pp"
                src="https://th.bing.com/th/id/R.e99bb831a5df4b568cd44740df53b079?rik=0ijGO2r0xspRUw&pid=ImgRaw&r=0"
                alt="seller profile"
              />
              <div className="info">
                <span>Muhammad Ahmed Raza</span>
                <div className="stars">
                  <img src="/images/star.png" alt="star" />
                  <img src="/images/star.png" alt="star" />
                  <img src="/images/star.png" alt="star" />
                  <img src="/images/star.png" alt="star" />
                  <img src="/images/star.png" alt="star" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>

            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://th.bing.com/th/id/R.e99bb831a5df4b568cd44740df53b079?rik=0ijGO2r0xspRUw&pid=ImgRaw&r=0"
                  alt="reviewer profile"
                />
                <div className="info">
                  <span>Muhammad Ahmed Raza</span>
                  <div className="country">
                    <img
                      src="https://th.bing.com/th/id/OIP.7tWL0whMwpOv3Yn0Q3JJAwHaD9?rs=1&pid=ImgDetMain"
                      alt="country flag"
                    />
                    <span>USA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free
                to request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/images/like.png" alt="like" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="dislike" />
                <span>No</span>
              </div>
            </div>
            <hr />

            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://th.bing.com/th/id/R.e99bb831a5df4b568cd44740df53b079?rik=0ijGO2r0xspRUw&pid=ImgRaw&r=0"
                  alt="reviewer profile"
                />
                <div className="info">
                  <span>Muhammad Ahmed Raza</span>
                  <div className="country">
                    <img
                      src="https://th.bing.com/th/id/OIP.7tWL0whMwpOv3Yn0Q3JJAwHaD9?rs=1&pid=ImgDetMain"
                      alt="country flag"
                    />
                    <span>USA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free
                to request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/images/like.png" alt="like" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="dislike" />
                <span>No</span>
              </div>
            </div>
            <hr />

            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://th.bing.com/th/id/R.e99bb831a5df4b568cd44740df53b079?rik=0ijGO2r0xspRUw&pid=ImgRaw&r=0"
                  alt="reviewer profile"
                />
                <div className="info">
                  <span>Muhammad Ahmed Raza</span>
                  <div className="country">
                    <img
                      src="https://th.bing.com/th/id/OIP.7tWL0whMwpOv3Yn0Q3JJAwHaD9?rs=1&pid=ImgDetMain"
                      alt="country flag"
                    />
                    <span>USA</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/star.png" alt="star" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free
                to request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/images/like.png" alt="like" />
                <span>Yes</span>
                <img src="/images/dislike.png" alt="dislike" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$59.99</h2>
          </div>
          <p>
            I will create a unique and creative AI generated art for you based
            on your text description.
          </p>
          <div className="details">
            <div className="item">
              <span>Duration</span>
              <span>3 days</span>
            </div>
            <div className="item">
              <span>Revisions</span>
              <span>2</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
