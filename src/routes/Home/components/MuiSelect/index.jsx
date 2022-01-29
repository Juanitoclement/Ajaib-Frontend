import React from 'react';
import {FormControl, MenuItem, Select} from "@mui/material";

const MuiSelect = ({value , handleChange }) => {
    return (
        <FormControl sx={{ minWidth: 120 }}>
            <Select
                id="select-gender"
                value={value}
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>All</em>
                </MenuItem>
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
            </Select>
        </FormControl>
    )
}

export default MuiSelect;