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
    const [isFetching, setIsFetching] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [fetchStatus, setFetchStatus] = useState('Success');
    const [selectedGender, setSelectedGender] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getUserList(searchValue, page, selectedGender)
    },[])

    const getUserList = (searchVal, currPage, gender) => {
        setIsFetching(true);
        getUser({
            keyword: searchVal,
            page: currPage,
            gender: gender
        }).then(res => {
            if(res && res.length > 0) {
                setShowSnackbar(true)
                setFetchStatus('Success')
                setData(normalizeUserData(res))
            }
        }).catch(() => {
            setFetchStatus('Failed')
        }).finally(() => {
            setIsFetching(false)
        })
    }

    const debounceFetch = useMemo(
        () =>
        debounce((searchVal, currPage, gender) => {
            getUserList(searchVal, currPage, gender);
        }, 700), []
    );

    const resetFilter = () => {
        setSelectedGender('')
        setSearchValue('')
        setPage(1)
        debounceFetch('', 1, '')
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
                                debounceFetch(value, 1, selectedGender)
                            }}/>
                    </div>
                    <div className="select-filter">
                        <MuiSelect value={selectedGender} handleChange={({target}) => {
                            setSelectedGender(target.value)
                            getUserList(searchValue, page, target.value)
                        }}/>
                    </div>
                    <div className="reset-filter">
                        <Button variant="outlined" size="large" onClick={resetFilter}>Reset Filter</Button>
                    </div>
                </div>

                <MuiTable userData={data} isFetching={isFetching}/>
            </div>
            <div className="table-pagination">
                <Pagination
                    page={page}
                    onChange={(event, value) => {
                        getUserList(searchValue, value, selectedGender)
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