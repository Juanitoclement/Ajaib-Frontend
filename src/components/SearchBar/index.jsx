import React from 'react';
import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ value, onInputChange }) => {
    return(
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                value={value}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Here"
                inputProps={{ 'aria-label': 'search here' }}
                onChange={onInputChange}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar;