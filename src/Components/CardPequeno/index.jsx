import React, { useEffect, useState } from "react"

import styled from "styled-components"

import api from "../../services/api"


export default function CardPequeno(props) {
    const [comics, setComics] = useState([])


    useEffect(() => {
        api
            .get('/comics')
            .then(response => {
                setComics(response.data.data.results);
            })
            .catch(err => console.log(err));
    }, [comics]);

    return (
        <>
            <Grid>
                {comics.map(comic => {
                    return (
                        <CardP key={comic.id}>
                            <img
                                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                alt={`Foto do ${comic.title}`}
                            />
                            <div className="infos">
                                <h1>{comic.title}</h1>
                                <h2>{props.price}</h2>
                            </div>
                        </CardP>
                    )
                })}

            </Grid>

        </>
    )
}

// ==================================== STYLES ===============================//

const Grid = styled.div`
    max-width: 1400px;
    display: grid;
    margin-top: 50px;
    justify-items: center;

    @media (min-width: 900px){
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
    }


`

const CardP = styled.div`
    display: flex;
    justify-content: stretch;
    color: #fff;
    height: min-content;
    width: min-content;
    padding: 10px;
    

    img {
        width: 30%;
        height: 30%;
        border-radius: 15px;
        
    }

    .infos {
        background-color: #0A0B0B;
        width: 350px;
        padding: 5px;
        border-radius: 10px;
    }
    h1 {
        
        font-family: 'League Spartan', sans-serif;
        font-weight: 600;
        background-color: #0A0B0B;
        
        font-size: 1.3em;
    }

    h2 {
        font-family: 'League Spartan', sans-serif;
        margin-top: 40px;
        font-size: 1.8em;
        background-color: #0A0B0B;
        
    }
        
`