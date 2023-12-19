import "../styles/components/card.scss";
import { HiArrowNarrowRight } from "react-icons/hi";
import { LuServerCog } from "react-icons/lu";
import { motion } from "framer-motion";
import { CiUser, CiCloud, CiMail } from "react-icons/ci";

interface CardProps {
  variant: string;
  heading: string;
  theme: string;
  crossedPrice?: string;
  actualPrice?: string;
  features?: string[];
  desc?: string;
  bubble?: string;
}

function Card({
  variant,
  heading,
  theme,
  crossedPrice,
  actualPrice,
  features,
  bubble,
  desc,
}: CardProps) {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {" "}
      <div
        className={`card-container ${
          variant === "pricecard" ? "pricecard" : "plancard"
        }`}
      >
        <div className="top">
          <div
            className="bubble"
            style={{ backgroundColor: theme, color: "black" }}
          >
            {bubble}
          </div>
          <h1>{heading}</h1>
          {variant !== "pricecard" && <p>{desc}</p>}
          <p>{crossedPrice}</p>
          <h1>{actualPrice}</h1>
          <Button title="Get Started" theme={theme} />
        </div>
        <div className="bottom">
          <p>What you'll get:</p>
          {features &&
            features.map((item, index) => (
              <p key={index}>
                <LuServerCog />
                {item}
              </p>
            ))}
          <u>Explore Features</u>
        </div>
      </div>
    </motion.div>
  );
}

interface ButtonProps {
  title: string;
  theme: string;
}

const Button = ({ title, theme }: ButtonProps) => {
  return (
    <button className="primary-button" style={{ backgroundColor: theme }}>
      {title}
      <HiArrowNarrowRight />
    </button>
  );
};

export default Card;
