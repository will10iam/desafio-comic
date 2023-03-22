import Header from "../../Components/Header"
import styled from 'styled-components';
import comic from '../../Assets/48.svg'

export default function Home() {
    return (
        <>
            <Header />

            <Ssection>
                <img src={comic} alt='' className="comic" />
                <h1>a sua loja de quadrinhos está aqui!</h1>
            </Ssection>

            <Ggif>
                <a href="#section2"><img src="https://static.wixstatic.com/media/3a5df9_81b94f0536ef4a379857d7195426117c~mv2.gif" alt="gif" /></a>
            </Ggif>
        </>
    )
};

//--------------------------------- STYLES -----------------------------------------//

const Ssection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .comic {
        width: 35%;
        margin-top: 10px;
        margin-left: 60px;
    }

    h1 {
        color: #FFF;
        font-family: 'League Spartan', sans-serif;
        width: 450px;
        text-align: end;
        font-size: 80px;  
        margin-right: 150px;      
    }

    p {
        text-decoration: underline dotted #F26722;
    }

    & .gif1 {
    text-align: center;
& img {
    width: 80px;
    margin-top: 125px;
    //margin-bottom: -10px;
}
}
`

const Ggif = styled.div`
    text-align: center;
    margin-top: -60px;

    & img {
    width: 80px;
}

`
