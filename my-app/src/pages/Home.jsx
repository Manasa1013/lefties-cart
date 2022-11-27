import "../styles.css";
import { categorizedProducts, imageSources } from "../data/data";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Home = ({ slideIndex, setSlideIndex, increaseSlideIndex }) => {
  useEffect(() => {
    let slideTimerID = setInterval(() => increaseSlideIndex(), 5000);
    return () => {
      clearInterval(slideTimerID);
    };
  });
  return (
    <>
      <main>
        <div className="grid-container">
          <div className="slider">
            <div className="slide">
              <Link to="/products">
                <img
                  src={
                    imageSources.length > 0 &&
                    (imageSources[slideIndex].src || imageSources[0].src)
                  }
                  alt="left-handed accessories"
                />
              </Link>
            </div>

            <button
              className="btn btn-next"
              onClick={() => increaseSlideIndex()}
            >
              &gt;
            </button>
            <button
              className="btn btn-prev"
              onClick={() => {
                setSlideIndex((indexValue) => {
                  if (indexValue === 0) {
                    indexValue = imageSources.length - 1;
                  } else indexValue--;
                  return indexValue;
                });
              }}
            >
              &lt;
            </button>
          </div>
        </div>
        {/* <img
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/31/a6a1bba2-d8af-4feb-881d-325bd8545c071617211308576-Dk-banner.jpg"
          alt="banner"
          className="responsive-img"
        /> */}
        <section>
          <h1 className="heading">Categories</h1>
          <div className="grid-container">
            {categorizedProducts.slice(0, 3).map((prod) => {
              return (
                <div className="image-wrapper" key={prod.id}>
                  <Link to="/products">
                    <img
                      src={prod.src}
                      alt={prod.category}
                      className="responsive-img"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          <h2 className="heading">New Products</h2>
          <div className="grid-container">
            {categorizedProducts
              .slice(3, categorizedProducts.length)
              .map((prod) => {
                return (
                  <div className="image-wrapper" key={prod.id}>
                    <Link to="/products">
                      <img
                        src={prod.src}
                        alt={prod.category}
                        className="responsive-img"
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
