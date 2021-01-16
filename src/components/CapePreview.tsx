import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SkinViewer from "./SkinViewer";

const useStyles = makeStyles((theme) => ({
  center: {
    "text-align": "center",
  },
}));

const CapePreview = ({ cape, elytra }: { cape: string; elytra: boolean }) => {
  const classes = useStyles();
  return (
    <div className={classes.center}>
      <SkinViewer
        skinUrl="https://crafatar.com/skins/e655aa985fec4b4eb03a7cd71df90b05.png"
        capeUrl={cape !== "" ? `/capes/${cape}.png` : ""}
        elytra={elytra}
      />
    </div>
  );
};

export default CapePreview;
