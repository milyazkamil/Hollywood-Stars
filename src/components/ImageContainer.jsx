import { useState } from "react";
import { socialIcons } from "../data";
import Name from "./Name";
import Image from "./Image";

const ImageContainer = ({ imageUrl, name, surname, age }) => {

  const [imageStyles, setImageStyles] = useState({
    opacity: "0",
    imageSize: "300px",
    filter: "grayscale(0)",
    bgImage: `url(${imageUrl}) center center no-repeat`,
  });

  const changeImage = () => {
    setImageStyles({
      opacity: '1',
      imageSize: '600px',
      filter: 'grayscale(100%)',
      bgImage: `url(${imageUrl}) left center no-repeat`,
    });
  };

  const resetImage = () => {
    setImageStyles({
      opacity: '0',
      imageSize: '300px',
      filter: 'grayscale(0)',
      bgImage: `url(${imageUrl}) center center no-repeat`,
    })
  };

  const { opacity, imageSize, filter, bgImage } = imageStyles;

  return (
    <>
      <div
        onMouseEnter={changeImage}
        onMouseLeave={resetImage}
        className="main-container-image"
      >
        <Name name={name} surname={surname} age={age} opacity={opacity} />
        <Image bgImage={bgImage} imageSize={imageSize} filter={filter} />
        <div className="icons-container" style={{ opacity: opacity }}>
          {
            socialIcons.map((icon) => (
              <a href={icon.iconHref} key={icon.id} target="_blank">
                <i className={icon.className}></i>
              </a>
            ))
          }
        </div>
      </div>
    </>
  )
}
export default ImageContainer;