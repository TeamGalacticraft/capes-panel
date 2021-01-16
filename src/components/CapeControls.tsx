import { Button, Grid, Switch, FormControlLabel } from "@material-ui/core";
import React from "react";
import CapeSelect from "./CapeSelect";

export default function CapeControls({
  cape,
  setCape,
  elytra,
  setElytra,
}: {
  cape: string;
  setCape: Function;
  elytra: boolean;
  setElytra: Function;
}) {
  const handleElytraChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setElytra(event.target.checked);
  };

  return (
    <>
      <CapeSelect cape={cape} setCape={setCape} />
      <FormControlLabel
        control={
          <Switch
            checked={elytra}
            onChange={handleElytraChange}
            name="elytra"
            color="primary"
          />
        }
        label="Show Elytra?"
      />
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
