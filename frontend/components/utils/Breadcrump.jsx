import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Breadcrump({ breadcrumbs }) {
    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb">
            {breadcrumbs}
        </Breadcrumbs>
    );
}

export default Breadcrump;
