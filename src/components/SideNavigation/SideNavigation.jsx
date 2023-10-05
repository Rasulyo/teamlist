import { Menu } from "antd";
import { Logo } from "../../assets/Logo";
import { UnionIcon } from "../../assets/UnionIcon";
import { ProfileIcon } from "../../assets/ProfileIcon";
import { DocIcon } from "../../assets/DocIcon";
import { MessageIcon } from "../../assets/MessageIcon";
import { ImagesIcon } from "../../assets/ImagesIcon";
import { CommunityIcon } from "../../assets/CommunityIcon";
import { DealIcon } from "../../assets/DealIcon";
import { CoinDollarIcon } from "../../assets/CoinDollarIcon";
import { CoinsIcon } from "../../assets/CoinsIcon";
import { ExitIcon } from "../../assets/ExitIcon";
import { getItem } from "../../utils";

const items = [
  getItem("logo", <Logo />),
  getItem("avatar", <Logo />),
  getItem("union", <UnionIcon />),
  getItem("profile", <ProfileIcon />),
  getItem("docs", <DocIcon />),
  getItem("messages", <MessageIcon />),
  getItem("images", <ImagesIcon />),
  getItem("community", <CommunityIcon />),
  getItem("deals", <DealIcon />),
  getItem("dollar", <CoinDollarIcon />),
  getItem("coins", <CoinsIcon />),
  getItem("exit", <ExitIcon />),
];

export const SideNavigation = () => {
  return (
    <Menu
      style={{
        width: 100,
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 34,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
