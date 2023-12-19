import "../styles/components/card.scss";
import { HiArrowNarrowRight } from "react-icons/hi";

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
    <div
      className={`card-container ${
        variant === "pricecard" ? "pricecard" : "plancard"
      }`}
    >
      <div className="top">
        <div className="bubble" style={{ backgroundColor: theme }}>
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
        {features && features.map((item, index) => <p key={index}>{item}</p>)}
        <u>Explore Features</u>
      </div>
    </div>
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
