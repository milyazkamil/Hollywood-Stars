const Image = ({ bgImage, imageSize, filter }) => {
  return (
    <div
      style={{
        filter: filter,
        background: bgImage,
        backgroundSize: imageSize,
      }}
      className="image"
    ></div>
  )
}
export default Image;