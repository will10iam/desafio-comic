import exampleimg from '../../Assets/exampleimg.png'
import styled from 'styled-components'
import Button from '../Buttons/index'


export default function CardGrande(props) {
    return (
        <>
            <CardG>
                <img src={props.thumbnail} alt="" />
                <div className="infos">
                    <h1>{props.title}</h1>
                    <h2>{props.description}</h2>
                    <p>{props.price}</p>
                    <Button name="COMPRAR" />
                </div>
            </CardG>





        </>
    )
}


// ==================================== STYLES ===============================//

const CardG = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    width: auto;


    img {
        width: 20%;
        height: 20%;
        border-radius: 15px;
        
    }

    .infos {
        
        background-color: #0A0B0B;
        width: 550px;
        height: 350px;
        padding: 15px;
        border-radius: 10px;
        
    }
    h1 {
        
        font-family: 'League Spartan', sans-serif;
        font-weight: 600;
        background-color: #0A0B0B;
        font-size: 1.8em;
        
    }

    h2 {
        font-family: 'League Spartan', sans-serif;
        margin-top: 40px;
        font-size: 1.3em;
        background-color: #0A0B0B;
       
        font-weight: 500;
    }

    p {
        background-color: #0A0B0B;
        font-family: 'League Spartan', sans-serif;
        font-size: 1.9em;
        font-weight: 600;
        margin-top: 30px;
        margin-bottom: -140px;
    }
`