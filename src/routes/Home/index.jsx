import React, {useEffect, useMemo, useState} from 'react';
import debounce from "lodash.debounce";
import {Pagination} from "@mui/material";

import MuiTable from "../../components/MuiTable";
import MuiSnackbar from "../../components/MuiSnackbar";
import SearchBar from "../../components/SearchBar";

import {getUser} from "../../services/user";
import {normalizeUserData} from "../../utils/user-utils";

import './styles.scss';

const DEFAULT_RESULT_NUMBER = 10;

// using the same seed to get same result from API
const DEFAULT_SEED = 'clement'

const Home = () => {
    const [data, setData] = useState([]);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [fetchStatus, setFetchStatus] = useState('Success');
    const [page, setPage] = useState(1);

    useEffect(() => {
        console.log('helo world')
        getUserList('', 1)
    },[])

    const getUserList = (searchVal, currPage) => {
        setIsFetching(true);
        getUser({
            keyword: searchVal,
            page: currPage,
            results: DEFAULT_RESULT_NUMBER,
            seed: DEFAULT_SEED
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
        debounce((searchValue, currPage) => {
            getUserList(searchValue, currPage);
        }, 700), []
    );

    return (
        <div className="home">
            <h1>User Table</h1>
            <div className="table-container">
                <div className="filter-container">
                    <SearchBar
                        value={searchValue}
                        onInputChange={({target}) => {
                            console.log('helo wrold', target.value)
                            setSearchValue(target.value)
                            setPage(1)
                            debounceFetch(searchValue, 1)
                    }}/>
                </div>
                <MuiTable userData={data} isFetching={isFetching}/>
            </div>
            <div className="table-pagination">
                <Pagination
                    page={page}
                    onChange={(event, value) => {
                        getUserList(searchValue, value)
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