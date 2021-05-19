import * as React from "react";
import {useStyles} from "../../../utils/styles.hook";
import {usePolicyEditorDispatch, usePolicyEditorState} from "../../../store/policy-editor/policy-editor.hooks";
import Box from "@material-ui/core/Box";
import {GridTableValueControl} from "../controls/grid.table-value.control";
import {BlockingSettingsVisitorFactory} from "../../../store/policy-editor/visitor/factory/blocking-settings.visitor-factory";

export const BlockingSettingsPage: React.VoidFunctionComponent = () => {
    const classes = useStyles();

    const dispatch = usePolicyEditorDispatch();
    const { jsonCurrentPolicy } = usePolicyEditorState();
    const blockingSettingsVisitorFactory = new BlockingSettingsVisitorFactory(
        dispatch,
        jsonCurrentPolicy
    );

    const {titles, visitors} = blockingSettingsVisitorFactory.getVisitors();

    return (
        <Box className={classes.pageContent}>
            <GridTableValueControl titles={titles} visitors={visitors} />
        </Box>
    );
}