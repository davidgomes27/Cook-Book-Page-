import React from 'react'
import * as S from "./Styles"
import { graphql, useStaticQuery } from "gatsby"


export default function Header() {

    const data = useStaticQuery(graphql`
    
        query{
            alldata{
                headers {
                    btnheaderabout
                    btnheaderecipes
                    btnheadersubscribe
                    headertitle
                    headerbackgroundimg {
                      url
                    }
                    rclogoimg {
                      url
                    }
                  }
            }     
        }
    
    
    `)

    const {
        headertitle,
        headerbackgroundimg,
        btnheaderabout,
        btnheaderecipes,
        rclogoimg,
        btnheadersubscribe } = data.alldata.headers[0]
    
    return (
        <S.Container>
        <S.BoxImgBackground back = {headerbackgroundimg.url}>
            <div className = "BoxNavHeader">
                <div>
                    <img src={rclogoimg.url} alt="imagem da logo do site"/>
                </div>
                <div className = "BoxButtons">
                    <button>{btnheaderabout}</button>
                    <button>{btnheaderecipes}</button>
                    <button>{btnheadersubscribe}</button>
                </div>
            </div>
            <div className = "Boxtitleheader">
                <h1>{headertitle}</h1>
            </div>
        </S.BoxImgBackground>
    </S.Container>
)
}
