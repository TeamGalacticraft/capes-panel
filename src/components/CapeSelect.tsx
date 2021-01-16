import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

export default function CapeSelect({
  cape,
  setCape,
}: {
  cape: string;
  setCape: Function;
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCape(event.target.value as string);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="cape-select-label">Cape</InputLabel>
        <Select
          labelId="cape-select-label"
          id="cape-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={cape}
          onChange={handleChange}>
          <MenuItem value="">None</MenuItem>
          <ListSubheader>Legacy</ListSubheader>
          <MenuItem value="legacy/capeBlue">Legacy Blue Cape</MenuItem>
          <MenuItem value="legacy/capeBrown">Legacy Brown Cape</MenuItem>
          <MenuItem value="legacy/capeCyan">Legacy Cyan Cape</MenuItem>
          <MenuItem value="legacy/capeDarkGray">Legacy Dark Gray Cape</MenuItem>
          <MenuItem value="legacy/capeDarkGreen">
            Legacy Dark Green Cape
          </MenuItem>
          <MenuItem value="legacy/capeLightBlue">
            Legacy Light Blue Cape
          </MenuItem>
          <MenuItem value="legacy/capeLightGray">
            Legacy Light Gray Cape
          </MenuItem>
          <MenuItem value="legacy/capeLime">Legacy Lime Cape</MenuItem>
          <MenuItem value="legacy/capeMagenta">Legacy Magenta Cape</MenuItem>
          <MenuItem value="legacy/capeOrange">Legacy Orange Cape</MenuItem>
          <MenuItem value="legacy/capePink">Legacy Pink Cape</MenuItem>
          <MenuItem value="legacy/capePurple">Legacy Purple Cape</MenuItem>
          <MenuItem value="legacy/capeRainbow">Legacy Rainbow Cape</MenuItem>
          <MenuItem value="legacy/capeRed">Legacy Red Cape</MenuItem>
          <MenuItem value="legacy/capeYellow">Legacy Yellow Cape</MenuItem>
          <ListSubheader>Modern</ListSubheader>
          <MenuItem value="modern/cape_earth">Modern Earth Cape</MenuItem>
          <MenuItem value="modern/cape_jupiter">Modern Jupiter Cape</MenuItem>
          <MenuItem value="modern/cape_mars">Modern Mars Cape</MenuItem>
          <MenuItem value="modern/cape_mercury">Modern Mercury Cape</MenuItem>
          <MenuItem value="modern/cape_moon">Modern Moon Cape</MenuItem>
          <MenuItem value="modern/cape_neptune">Modern Neptune Cape</MenuItem>
          <MenuItem value="modern/cape_plain">Modern Plain Cape</MenuItem>
          <MenuItem value="modern/cape_space_station">
            Modern Space Station Cape
          </MenuItem>
          <MenuItem value="modern/cape_sun">Modern Sun Cape</MenuItem>
          <MenuItem value="modern/cape_uranus">Modern Uranus Cape</MenuItem>
          <MenuItem value="modern/cape_venus">Modern Venus Cape</MenuItem>
          <ListSubheader>Develper</ListSubheader>
          <MenuItem value="developer/cape_blue">Developer Blue Cape</MenuItem>
          <MenuItem value="developer/cape_gold">Developer Gold Cape</MenuItem>
          <MenuItem value="developer/cape_red">Developer Red Cape</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
