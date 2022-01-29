import React, {useEffect, useMemo, useState} from 'react';
import debounce from "lodash.debounce";
import {Button, Pagination} from "@mui/material";

import MuiTable from "./components/MuiTable";
import MuiSelect from "./components/MuiSelect";

import MuiSnackbar from "../../components/MuiSnackbar";
import MuiSearchBar from "../../components/MuiSearchBar";

import {getUser} from "../../services/user";
import {normalizeUserData} from "../../utils/user-utils";

import './styles.scss';

const Home = () => {
    const [data, setData] = useState([]);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [fetchStatus, setFetchStatus] = useState('Success');
    const [selectedGender, setSelectedGender] = useState('');
    const [resetSort, setResetSort] = useState(false);
    const [sortBy, setSortBy] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        getUserList(searchValue, page, selectedGender, sortBy, sortOrder)
    },[])

    const debounceFetch = useMemo(
        () =>
            debounce((searchVal, currPage, gender, sortBy, sortOrder) => {
                getUserList(searchVal, currPage, gender, sortBy, sortOrder);
            }, 700), []
    );

    const getUserList = (searchVal, currPage, gender, sortBy, sortOrder) => {
        getUser({
            keyword: searchVal,
            page: currPage,
            gender: gender,
            sortBy: sortBy,
            sortOrder: sortOrder
        }).then(res => {
            if(res && res.length > 0) {
                setShowSnackbar(true)
                setFetchStatus('Success')
                setData(normalizeUserData(res))
            }
        }).catch(() => {
            setFetchStatus('Failed')
        })
    }

    const resetFilter = () => {
        setSelectedGender('')
        setSearchValue('')
        setPage(1)
        debounceFetch('', 1, '', '', '')
        setResetSort(!resetSort)
        setSortOrder('')
        setSortBy('')
    }

    const handleSort = (sortBy, value) => {
        const currentSortOrder = value === true ? 'ascend' : 'descend'
        setSortBy(sortBy)
        setSortOrder(currentSortOrder)
        getUserList(searchValue, page, selectedGender, sortBy, currentSortOrder)
    }

    return (
        <div className="home">
            <h1 style={{ color: 'white' }}>Ajaib Frontend - User Table</h1>
            <div className="table-container">

                <div className="filter-container">
                    <div className="search-bar-filter">
                        <MuiSearchBar
                            value={searchValue}
                            onInputChange={value => {
                                setSearchValue(value)
                                setPage(1)
                                debounceFetch(value, 1, selectedGender, sortBy, sortOrder)
                            }}/>
                    </div>
                    <div className="select-filter">
                        <MuiSelect value={selectedGender} handleChange={({target}) => {
                            setSelectedGender(target.value)
                            getUserList(searchValue, page, target.value, sortBy, sortOrder)
                        }}/>
                    </div>
                    <div className="reset-filter">
                        <Button variant="outlined" size="large" onClick={resetFilter}>Reset Filter</Button>
                    </div>
                </div>

                {/* Render Table User*/}
                <MuiTable userData={data} handleSort={handleSort} resetSort={resetSort}/>
            </div>
            <div className="table-pagination">
                <Pagination
                    page={page}
                    onChange={(event, value) => {
                        getUserList(searchValue, value, selectedGender, sortBy, sortOrder)
                        setPage(value)
                    }}
                    count={100}
                    color="primary"
                    size="large"
                />
            </div>

            <MuiSnackbar
                messageText={fetchStatus}
                type={fetchStatus === 'Success' ? 'success' : 'error'}
                open={showSnackbar}
                handleClose={() => setShowSnackbar(false)}
            />
        </div>
    )
}

export default Home;