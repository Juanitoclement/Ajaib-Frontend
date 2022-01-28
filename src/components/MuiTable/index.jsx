import React from 'react';
import {
    TableCell,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";

import './styles.scss';

const DEFAULT_TABLE_ROW_NAME = [
    'Username',
    'Name',
    'Email',
    'Gender',
    'Registered Date'
]

const MuiTable = ({ userData }) => {
    return (
        <div className="table">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            {DEFAULT_TABLE_ROW_NAME.map((colName, key) => {
                                return (
                                    <TableCell align="left" key={colName + key}>{colName}</TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData.map((res, i) => (
                            <TableRow key={i}>
                                <TableCell >{res.username}</TableCell>
                                <TableCell >{res.name}</TableCell>
                                <TableCell >{res.email}</TableCell>
                                <TableCell >{res.gender}</TableCell>
                                <TableCell >{res.registeredDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MuiTable