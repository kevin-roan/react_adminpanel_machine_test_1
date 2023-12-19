import { AdminSideBar, Card, ToggleButton } from "./components";
import "./styles/app.scss";

const App = () => {
  return (
    <div className="admin-container">
      <AdminSideBar />
      {pricecardProps.map((item, index) => (
        <Card
          variant="pricecard"
          heading={item.heading}
          theme={item.theme}
          crossedPrice={item.crossedPrice}
          actualPrice={item.actualPrice}
          features={item.features}
        />
      ))}
      {plancardProps.map((item, index) => (
        <Card
          variant="plancard"
          heading={item.heading}
          features={item.features}
          theme={item.theme}
          bubble={item.bubble}
        />
      ))}
    </div>
  );
};

export default App;

const pricecardProps = [
  {
    heading: "Basic",
    theme: "orange",
    crossedPrice: "$89.99/mo",
    actualPrice: "$9.99/mo",
    features: ["Up to 25 Users", "Up to 25gb Storage", "Email Support"],
  },
  {
    heading: "Standard",
    theme: "purple",
    crossedPrice: "$189.99/mo",
    actualPrice: "$99.99/mo",
    features: ["Up to 50 Users", "Up to 60gb Storage", "Email+Chat Support"],
  },
  {
    heading: "Premium",
    theme: "pink",
    crossedPrice: "$389.99/mo",
    actualPrice: "$199.99/mo",
    features: [
      "Up to 75 Users",
      "Up to 100gb Storage",
      "Email+Chat+Whatsapp Support",
    ],
  },
];

const plancardProps = [
  {
    bubble: "Free Forever",
    theme: "limegreen",
    heading: "Free Starter",
    desc: "The quickest and easiest way to try Protocols with basic functionalities",
    features: [
      "Upto 8 Users",
      "Up to 3gb Storage",
      "Email Support",
      "Basics of Documents,Task Flow,Voting,Accounting,Banking,Notes,Investor,Director and Team Management included",
    ],
  },
  {
    bubble: "Let's Connect",
    theme: "purple",
    heading: "Enterprice Plan",
    desc: "Effortlessly customize and fine-tune services as your need shift, ensuring the perfect tools for success",
    features: ["Up to 75 Users", "Customization of all other features"],
  },
];
