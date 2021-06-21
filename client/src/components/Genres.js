import axios from 'axios'
import React, { useEffect } from 'react'
import Chip from '@material-ui/core/Chip';

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    type,
    genres,
    setGenres,
    setPage,
}) => 

{
    const handleAdd = (g) =>{
        setSelectedGenres([...selectedGenres, g]);
        setGenres(genres.filter((gn) => gn.id !== g.id));
        setPage(1);
    }
    const handleRemove = (g) =>{
        setSelectedGenres(selectedGenres.filter((select) => select.id !== g.id));
        setGenres([...genres, g]);
        setPage(1);
    }
    const fetchGenres = async() => {
     const {data} =  await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
     setGenres(data.genres);
     console.log(genres);
    }
    useEffect(() => {
        fetchGenres(); 
        return () => {
            setGenres({});
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div style={{padding: "6px 0"}}>
        {selectedGenres && selectedGenres.map((g) => (
            <Chip label={g.name} style={{margin:2}} color="primary" size="small" key={g.id} clickable onDelete={() => handleRemove(g)}/>
        ))}
            {genres && genres.map((g) => (
                <Chip label={g.name} style={{margin:2}} size="small" key={g.id} clickable onClick={() => handleAdd(g)}/>
            ))}
        </div>
    )
}

export default Genres
