import { useEffect, useState } from "react";
import classes from "./Image.module.css";
const ImageSlideShow = () => {
  const slides = [
    {
      id: "img1",
      src: "/assets/img1.jpg",
      alt: "Very fast car",
    },
    {
      id: "img2",
      src: "/assets/img2.jpg",
      alt: "Very fast car 2",
    },
    {
      id: "img3",
      alt: "Very fast car 3",
      src: "/assets/img3.jpg",
    },
  ];
  const [currentindex, setindex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setindex((prev) => {
        if (prev < slides.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className={classes.imageslide}>
        {slides.map((image, index) => {
          return (
            <img
              src={image.src}
              alt={image.alt}
              className={index === currentindex ? classes.active : ""}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default ImageSlideShow;
