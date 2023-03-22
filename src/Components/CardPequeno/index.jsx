import styled from "styled-components"


export default function CardPequeno(props) {
    return (
        <>
            <CardP>
                <img src={props.thumbnail} alt="" />
                <div className="infos">
                    <h1>{props.title}</h1>
                    <h2>{props.price}</h2>
                </div>
            </CardP>


        </>
    )
}

// ==================================== STYLES ===============================//

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