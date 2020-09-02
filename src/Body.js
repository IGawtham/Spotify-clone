import React from "react";
import "./Body.css";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDataLayerContext } from "./DataLayer";
import SongRow from "./SongRow";
function Body({ spotify }) {
  const [{ discoverWeekly }, dispatch] = useDataLayerContext();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body-info">
        <img alt="" src={discoverWeekly?.images?.[0].url} />
        <div className="body-info-text">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
      <div className="body-song">
        <div className="body-icons">
          <PlayCircleFilledIcon className="body-shuffle" />
          <FavoriteIcon size="large" />
          <MoreHorizIcon />
        </div>
        {discoverWeekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
