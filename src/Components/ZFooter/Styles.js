import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 20rem;
    background-color: #F2F4F1;

`

export const SocialBox = styled.div`
    width: 100%;
    height: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;

`

export const BoxSocialImgs = styled.div`
    width: 35%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    div{
        width: 8%;
        margin: 0.500rem;
        img{
            cursor: pointer;
        }
    }
`

export const ImnputsBox = styled.div`
    width: 35%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 3rem;
        background: transparent;
        border: transparent;
        transition-delay: 2ms; 
        text-transform: uppercase;
        font-size: 18px;
        font-family: 'Noto Sans Mono', monospace;
        color: #373737;
        cursor: pointer;

        &:hover{
            transition: 2s;
            border: 2px solid #373737;
            transition-delay: 0ms;
        }

        
    }

`


export const Copyright = styled.div`

    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #446061;


    h3{
        color: #FFFFFF;
        font-size: 0.7rem;
        font-family: 'Noto Sans Mono', monospace;
        font-weight: normal;
    }
`