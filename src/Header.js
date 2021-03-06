import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerContext } from "./DataLayer";
function Header() {
  const [{ user }, dispatch] = useDataLayerContext();
  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon />
        <input placeholder="Search for artist,songs" type="text" />
      </div>
      <div className="header-right">
        <Avatar src={user?.image?.[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
