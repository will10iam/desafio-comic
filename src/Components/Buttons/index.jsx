import styled from 'styled-components';

export default function Button(props) {
    return (
        <>
            <Bbutton>
                {props.name}
            </Bbutton>

        </>
    )
}


// ==================================== STYLES ===============================//

const Bbutton = styled.div`
    background-color: #F26722;
    border-radius: 8px;
    margin-top: 150px;
    width: 120px;
    text-align: center;
    padding: 10px;
    color: #fff;
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    font-size: 20px;
`