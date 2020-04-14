import React, { useEffect, useState } from 'react';
import axios from "axios";
import CardList from "./CardList";

const Search = () => {
    const [pics, setPics] = useState([]);
    const [searchstate, setSearch] = useState('');

    const fetchPics = async () => {
        try {
            const { data } = await axios.get(`/api/pics`);
            setPics(data.pics)
        }
        catch (err) { console.log(err) }
    }

    useEffect(() => {
        fetchPics();
    }, [])

    const onSearchChange = event => setSearch(event.target.value)

    const picsfilter = pics.filter(pic => {
        return (pic.tags.toLowerCase().includes(searchstate.toLowerCase()));
    });

    return (
        <div className='tc'>
            <div>
                <h3>Search pictures by HASHTAGS:</h3>
                <input className='pa3 ba b--dark-blue'
                    type="search"
                    placeholder="serch here"
                    onChange={onSearchChange} />
            </div>
            <CardList pics={picsfilter} />
        </div>
    )
}

export default Search;