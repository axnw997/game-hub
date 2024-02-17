import { ImageProps, Image } from "@chakra-ui/react";
import bullEye from "../assets/eye.png";
import stop from "../assets/stop.png";
import thumb from "../assets/thumb.png";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: bullEye, alt: "bulleye", boxSize: "20px" },
    4: { src: stop, alt: "stop", boxSize: "25px" },
    5: { src: thumb, alt: "thumb", boxSize: "20px" },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
