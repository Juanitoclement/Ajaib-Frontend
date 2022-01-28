import axios from "axios";

export function getUser(params) {
    let url = `https://randomuser.me/api/`

    params.results = 10;

    if(params.gender === '') {
        delete params.gender
    }

    if(params.keyword === '') {
        delete params.keyword
    }

    const result = axios.get(url, { params }).then(res => {
        if(res.status === 200){
            return res?.data?.results;
        }

        throw new Error(res.error || 'error')
    }).catch(err => {
        throw new Error(err)
    })

    return result
}