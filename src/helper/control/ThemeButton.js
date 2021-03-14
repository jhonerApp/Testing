import React, { useReducer, useEffect } from "react";
import { grey } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import * as RIIcons from "react-icons/ri";
import * as BIIcons from "react-icons/bi";


export default function ThemeButton(props) {
  let themes = {};

  const initialIconState = null;
  const reducer = (state, action) => {
    switch (action.type) {
      case "addIcon":
        return <BIIcons.BiAddToQueue />;
      case "refreshIcon":
        return <RIIcons.RiRefreshLine />;
      case "exitIcon":
        return <RIIcons.RiFileExcel2Line />;
      case "resetIcon":
        return <BIIcons.BiReset />;
      default:
        return state;
    }
  };

  const [stateIcon, dispatchIcon] = useReducer(reducer, initialIconState);

  useEffect(() => {
    dispatchIcon({ type: props.icon });
  }, []);

  if (props.theme === "primary") {
    themes = {
      background: "linear-gradient(45deg, #3498DB     30%, #3498DB    90%)",
      "&:hover": {
        backgroundColor: grey[700],
      },
      marginRight: 10,
      width: `${props.width}`,
    };
  }
  if (props.theme === "refresh") {
    themes = {
      background: "linear-gradient(45deg, #283747   30%, #283747   90%)",
      "&:hover": {
        backgroundColor: grey[700],
      },
      marginRight: 10,
      width: `${props.width}`,
    };
  }

  if (props.theme === "excel") {
    themes = {
      background: "linear-gradient(45deg, #283747   30%, #283747   90%)",
      "&:hover": {
        backgroundColor: grey[700],
      },
      marginRight: 10,
      width: `${props.width}`,
    };
  }
  if (props.theme === "danger") {
    themes = {
      background: "linear-gradient(45deg, #A93226  30%, #A93226  90%)",
      "&:hover": {
        backgroundColor: grey[700],
      },
      marginRight: 10,
    };
  }

  return (
    <Button
      {...props}
      style={themes}
      endIcon={stateIcon}
      variant="contained"
      color="primary"
    >
      {props.text}
    </Button>
  );
}
