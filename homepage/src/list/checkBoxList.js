import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";

export default function CheckboxListSecondary() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      dense
      sx={{
        width: "100%",
        borderRadius: 2,
        maxWidth: { xs: 300, md: 400 } /* Adjust width based on screen size */,
        bgcolor: "#194553",
      }}
    >
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                sx={{
                  color: "teal" /* Unselected checkbox color */,

                  "&.Mui-checked": {
                    color: "lightblue" /* Selected checkbox color */,
                  },
                }}
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ "aria-labelledby": labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText
                sx={{
                  color: "whitesmoke",
                }}
                id={labelId}
                primary={`Line item ${value + 1}`}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
