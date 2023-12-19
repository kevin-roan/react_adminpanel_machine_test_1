import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdContactMail } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaPuzzlePiece } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { BiPowerOff } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import "../styles/components/adminsidebar.scss";

const AdminSidebar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100,
  );
  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <GiHamburgerMenu />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <UserDetails
          username="Ram Mohan"
          email="rammohan@gmail.com"
          imgUrl="https://images.pexels.com/photos/4307710/pexels-photo-4307710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <DashBoardItems />
        <button>
          Log Out <BiPowerOff />
        </button>
        {phoneActive && (
          <>
            <button id="close-sidebar" onClick={() => setShowModal(false)}>
              <TfiClose />
            </button>
          </>
        )}
      </aside>
    </>
  );
};

interface UserDetailsProps {
  username: string;
  email: string;
  imgUrl: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({
  username,
  email,
  imgUrl,
}: UserDetailsProps) => {
  return (
    <div className="user-details-container">
      <img
        src={imgUrl}
        alt="user avatar"
        style={{ borderRadius: "100px", height: "5rem", width: "5rem" }}
      />
      <div>
        <h1>{username}</h1>
        <a href="/user/userdetails">
          <IoIosArrowForward />
        </a>
      </div>
      <p>{email}</p>
    </div>
  );
};

const DashBoardItems = () => (
  <div>
    <ul>
      <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} />
      <Li url="/admin/perks" text="Perks" Icon={PiPottedPlantFill} />
      <Li url="/admin/addons" text="Addons" Icon={FaPuzzlePiece} />
      <Li url="/admin/faq" text="FAQ" Icon={LuMessagesSquare} />
      <Li url="/admin/support" text="Support" Icon={MdContactMail} />
    </ul>
  </div>
);

interface LiProps {
  url: string;
  text: string;
  Icon: IconType;
}
const Li = ({ url, text, Icon }: LiProps) => (
  <li>
    <a href={url}>
      <Icon />
      {text}
    </a>
  </li>
);

export default AdminSidebar;
