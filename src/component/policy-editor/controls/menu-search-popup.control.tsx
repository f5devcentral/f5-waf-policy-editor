import React, { useEffect, useRef, useState } from "react";
import { Popover } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import RootRef from "@material-ui/core/RootRef";
import scrollIntoView from "scroll-into-view-if-needed";

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
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const selectedRef = useRef<null | HTMLElement>(null);

    const strItems = JSON.stringify(items);
    const filteredItems = items.filter(
      (x) => x.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );

    useEffect(() => {
      if (!open) return; // avoid blinking....
      setFilter("");
      setSelectedIndex(0);
    }, [open]);

    useEffect(() => {
      setSelectedIndex(0);
    }, [strItems, filter]);

    useEffect(() => {
      selectedRef?.current &&
        scrollIntoView(selectedRef?.current, {
          scrollMode: "if-needed",
          block: "nearest",
          inline: "nearest",
        });
    }, [selectedIndex]);

    function handleKeyDown(e: any) {
      if (e.key === "ArrowUp") {
        if (selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
        }
        e.stopPropagation();
        e.preventDefault();
      } else if (e.key === "ArrowDown") {
        if (selectedIndex < filteredItems.length - 1) {
          setSelectedIndex(selectedIndex + 1);
        }
        e.stopPropagation();
        e.preventDefault();
      }
    }

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
        onKeyDown={handleKeyDown}
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
          <Box style={{ overflowY: "auto", maxHeight: "60vh" }}>
            <List>
              {filteredItems.map((x, index: number) =>
                index === selectedIndex ? (
                  <RootRef rootRef={selectedRef}>
                    <ListItem
                      button
                      key={x}
                      onClick={() => onSelect(x)}
                      selected={index === selectedIndex}
                    >
                      <ListItemText primary={x} ref={selectedRef} />
                    </ListItem>
                  </RootRef>
                ) : (
                  <ListItem button key={x} onClick={() => onSelect(x)}>
                    <ListItemText primary={x} />
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Box>
      </Popover>
    );
  };
