const { styled } = require("@mui/material");

const Image = styled("img")({
  width: "100%",
  height: "40vh",
  objectFit: "cover",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
});
const Banner = ({ src }) => {
  return <Image src={src} />;
};

export default Banner;
