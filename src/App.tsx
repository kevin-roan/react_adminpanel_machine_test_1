import { AdminSideBar, PriceCard } from "./components";
import "./styles/app.scss";

const App = () => {
  return (
    <div className="adminContainer">
      <AdminSideBar />
      <PriceCard />
    </div>
  );
};

export default App;
