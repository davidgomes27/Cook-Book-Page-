import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    padding: 1.2rem;
    height: 70.5rem;

`

export const BoxImgBackground = styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${prop =>prop.back});




    .BoxNavHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3.544rem;
        width: 100%;
        height: 5rem;


        .BoxButtons{
            width: 30%;
            height: 3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: transparent;
            
            

            button{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30%;
                height: 100%;
                background: transparent;
                border: transparent;
                transition-delay: 2ms; 
                text-transform: uppercase;
                font-size: 18px;
                font-family: 'Noto Sans Mono', monospace;
                color: #373737;
                cursor: pointer;
                
                


                &:hover {
                    transition: 2s;
                    border: 2px solid #373737;
                    transition-delay: 0ms;
                }
            }
        }
    }


    .Boxtitleheader{
        display: flex;
        width: 100%;
        height: 95%;
        justify-content: center;
        align-items: center;
        font-size: 4rem;
        color: #373737;
        font-family: 'Noto Sans Mono', monospace;
        text-transform: uppercase;

    }
`