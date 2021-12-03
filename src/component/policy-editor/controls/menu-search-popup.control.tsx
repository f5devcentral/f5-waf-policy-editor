import React, { useEffect, useRef, useState } from "react";
import { Popover } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import scrollIntoView from "scroll-into-view-if-needed";

export type MenuSearchPopupProps = {
  open: boolean;
  anchorEl: any;
  items: string[];
  onClose: () => void;
  onSelect: (item: string, index: number) => void;
};

export const MenuSearchPopupControl: React.FunctionComponent<MenuSearchPopupProps> =
  ({ open, anchorEl, items, onSelect, onClose }) => {
    const [filter, setFilter] = useState("");
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const selectedRef = useRef<null | HTMLElement>(null);

    const strItems = JSON.stringify(items);
    const filteredItems = items
      .filter((x) => x.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
      .sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });

    function getIndex(item: string) {
      return items.indexOf(item);
    }

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
      } else if (e.key === "Enter") {
        const x = filteredItems[selectedIndex];
        onSelect(x, getIndex(x));

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
                  <>
                    <ListItem
                      button
                      key={x}
                      onClick={() => onSelect(x, getIndex(x))}
                      selected={index === selectedIndex}
                    >
                      <ListItemText primary={x} ref={selectedRef} />
                    </ListItem>
                  </>
                ) : (
                  <ListItem
                    button
                    key={x}
                    onClick={() => onSelect(x, getIndex(x))}
                  >
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
