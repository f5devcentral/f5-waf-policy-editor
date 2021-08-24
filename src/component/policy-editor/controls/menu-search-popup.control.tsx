import React, { useEffect, useState } from "react";
import { Popover } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

export type MenuSearchPopupProps = {
  open: boolean;
  anchorEl: any;
  items: string[];
  onClose: () => void;
  onSelect: (item: string) => void;
};

export const MenuSearchPopupControl: React.FunctionComponent<MenuSearchPopupProps> =
  ({ open, anchorEl, items, onSelect, onClose }) => {
    const [filter, setFilter] = useState("");

    useEffect(() => {
      if (!open) return; // avoid blinking....
      setFilter("");
    }, [open]);

    return (
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => {
          onClose();
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box style={{ overflow: "hidden" }}>
          <Box>
            <TextField
              InputProps={{
                margin: "dense",
              }}
              InputLabelProps={{
                margin: "dense",
              }}
              value={filter}
              onChange={(x) => setFilter(x.target.value)}
              variant="outlined"
              label="Filter..."
              style={{
                width: "calc(100% - 20px)",
                margin: "10px",
              }}
            />
          </Box>
          <Box style={{ overflow: "scroll", maxHeight: "60vh" }}>
            <List>
              {items
                .filter(
                  (x) => x.toLowerCase().indexOf(filter.toLowerCase()) !== -1
                )
                .map((x) => (
                  <ListItem button key={x} onClick={() => onSelect(x)}>
                    <ListItemText primary={x} />
                  </ListItem>
                ))}
            </List>
          </Box>
        </Box>
      </Popover>
    );
  };
