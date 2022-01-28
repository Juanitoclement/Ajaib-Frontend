import React from "react";
import './styles.scss';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="text">
                Not Found
            </div>
            <div className="back">
                <Link to="/">
                    <Button variant="outlined">
                        Go back to Home
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound;