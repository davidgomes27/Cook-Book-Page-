import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding-top: 10rem;
    background-color: #DFE4DE;

`

export const BoxSectionlatest = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 60rem;
`

export const BoxTitleLatet = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Noto Sans Mono', monospace;
    text-transform: uppercase;

    &:after{
        content:"";


        position: relative;
        width: 4.500rem;
        height: 0.300rem;
        background-color: #373737;

        top: 1rem;
    }

`
export const BoxImgLatest = styled.div`
    width: 90%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;

    
`

export const CardFoodCake = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30%;
    height: 35.5rem;
    background-color: #fff;
    color: #373737;
    box-shadow: 0px 7px 6px #00000029;

    
`

export const CardFoodPizza = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30%;
    height: 35.5rem;
    background-color: #fff;
    margin: 0 3rem 0 3rem;
    color: #373737;
    box-shadow: 0px 7px 6px #00000029;


   
`

export const CardFoodShake = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30%;
    height: 35.5rem;
    background-color: #fff;
    color: #373737;
    box-shadow: 0px 7px 6px #00000029;
    

`

export const BoxsImgs = styled.div`
    width: 100%;

`

export const BoxTitleFoods = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 16rem;

    &:before{
        content:"";
        

        position: relative;
        background-color: #373737;
        width: 2.500rem;
        height: 0.200rem;
        bottom: 1rem;

    }
    

    h2{
        font-family: 'Noto Sans Mono', monospace;
        font-weight: normal;
        text-transform: capitalize;
    }
`



export const SectionColher = styled.section`
    display: flex;
    width:100%;
    
`

export const BoxConteudocolher = styled.div`
    display: flex;
    width:100%;
    height: 40rem;
`

export const BoxImgColher = styled.div`
    width: 50%;
    display: flex;



`

export const BoxTitleAbout = styled.div`
    width: 50%;
    background-color: #fff ;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans Mono', monospace;
    color: #373737;
    

`

export const Boxtext = styled.div`
    width: 60%;
    background-color: #fff ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
    


    h2{
        font-weight: bolder;
        text-transform: uppercase;
    }

    div{
        width: 7%;
        height: 4px;
        margin: 0.900rem 0 3rem 0;
        background-color: #373737;
    }
    
    h3{
        width: 101%;
        font-weight: normal;
        font-size: 0.980rem;
        
    }

`

export const SectionInput = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BoxLogin = styled.div`
    width: 100%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: #373737;
    font-family: 'Noto Sans Mono', monospace;

    h2{
        font-size: 35px;
        text-transform: uppercase;
    }

    h3::first-letter{
        text-transform: capitalize; 
    }

    input{
        width: 30%;
        height: 15%;
        border: none;
        border-radius: 5px;
        padding-left: 3rem;
        background-color: #EFF1EE;
    }

    button{
        width: 10%;
        height: 10%;
        border: transparent;
        background: transparent;
        cursor: pointer;
        border: 3px solid #373737;
        text-transform: uppercase;
        font-weight: bolder;
        font-family: 'Noto Sans Mono', monospace;
        letter-spacing: 4px;
    }

`
