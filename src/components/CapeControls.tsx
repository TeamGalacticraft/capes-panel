import { Button, Grid } from "@material-ui/core";
import React from "react";
import CapeSelect from "./CapeSelect";

export default function CapeControls({
  cape,
  setCape,
}: {
  cape: string;
  setCape: Function;
}) {
  return (
    <>
      <CapeSelect cape={cape} setCape={setCape} />

      <Grid container>
        <Grid item>
          <Button color="primary">Save</Button>
        </Grid>
        <Grid item>
          <Button>Reset</Button>
        </Grid>
      </Grid>
    </>
  );
}
