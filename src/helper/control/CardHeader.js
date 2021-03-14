import React, { useReducer, useEffect, Fragment } from "react";
import * as RIIcons from "react-icons/ri";
import * as GIIcons from "react-icons/gi";
import * as BIIcons from "react-icons/bi";
import * as MDIcons from "react-icons/md";

import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    avatar: {
        background: "linear-gradient(45deg, #283747   30%, #283747   90%)",
    },
}));

export default function IconThemeButton(props) {
    const classes = useStyles();
    const initialIconState = null;
    const reducer = (state, action) => {
        switch (action.type) {
            case "classIcon":
                return <RIIcons.RiArtboardFill />;
            case "termIcon":
                return <RIIcons.RiNewspaperFill />;
            case "streamIcon":
                return <GIIcons.GiPapers />;

            case "ItemIcon":
                return <BIIcons.BiSitemap />;
            case "ModeIcon":
                return <MDIcons.MdChromeReaderMode />;
            case "transportIcon":
                return <BIIcons.BiBusSchool />;
            default:
                return state;
        }
    };

    const [stateIcon, dispatchIcon] = useReducer(reducer, initialIconState);
    useEffect(() => {
        dispatchIcon({ type: props.icon });
    }, [props.icon]);

    return (
        <Fragment>
            <CardHeader
                {...props}
                avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                        {stateIcon}
                    </Avatar>
                }
                titleTypographyProps={{ variant: "h6" }}
                title={props.title}
            />
            <Divider />
        </Fragment>
    );
}
