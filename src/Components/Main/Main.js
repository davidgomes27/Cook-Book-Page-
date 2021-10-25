import React from 'react'
import * as S from "./Styles"
import { graphql, useStaticQuery } from "gatsby"



export default function Main() {

    const data = useStaticQuery(graphql`
        
        query{
            alldata{
                mains {
                    mainbuttonsubmit
                    mainh2About
                    mainh2Pizza
                    mainh2Redvelvet
                    mainh2Subscribe
                    mainh2shake
                    mainsubtitlesiginup
                    subtitleabout
                    titlelatest
                    imgvitamina {
                      url
                    }
                    imgpizza {
                      url
                    }
                    imgcolher {
                      url
                    }
                    imgcake {
                      url
                    }
                }
            }
        }
    
    `)

    const { 
        
        mainbuttonsubmit,
        mainh2About,
        mainh2Pizza,
        mainh2Redvelvet,
        mainh2Subscribe,
        mainh2shake,
        mainsubtitlesiginup,
        subtitleabout,
        titlelatest,
        imgvitamina,
        imgpizza,
        imgcolher,
        imgcake  } = data.alldata.mains[0]


    return (
        <S.Container>
            <S.BoxSectionlatest>
                <S.BoxTitleLatet>
                    <h2>{titlelatest}</h2>
                </S.BoxTitleLatet>
                <S.BoxImgLatest >
                    <S.CardFoodCake>
                        <S.BoxsImgs>
                            <img style={{ width: "100%", height: "100%" }} src={imgcake.url} alt= "imagem de um bolo vermelho"/>
                        </S.BoxsImgs>
                        <S.BoxTitleFoods>
                            <h2>{mainh2Redvelvet}</h2>
                        </S.BoxTitleFoods>
                    </S.CardFoodCake>
                    <S.CardFoodPizza>
                        <S.BoxsImgs>
                            <img style={{ width: "100%", height: "100%" }} src={imgpizza.url} alt= "imagem de uma" />
                        </S.BoxsImgs>
                        <S.BoxTitleFoods>
                            <h2>{mainh2Pizza}</h2>
                        </S.BoxTitleFoods>
                    </S.CardFoodPizza>
                    <S.CardFoodShake>
                        <S.BoxsImgs>
                            <img style={{ width: "100%", height: "100%" }} src={imgvitamina.url} alt=" uma vitamina de banana" />
                        </S.BoxsImgs>
                        <S.BoxTitleFoods>
                            <h2>{mainh2shake}</h2>
                        </S.BoxTitleFoods>
                    </S.CardFoodShake>
                </S.BoxImgLatest>
            </S.BoxSectionlatest>
            <S.SectionColher>
                <S.BoxConteudocolher>
                    <S.BoxImgColher>
                        <img style={{ width: '100%', }} src={imgcolher.url} alt="imagem de uma colher"/>
                    </S.BoxImgColher>
                    <S.BoxTitleAbout>
                        <S.Boxtext>
                            <h2>{mainh2About}</h2>
                            <div></div>
                            <h3>{subtitleabout}</h3>
                        </S.Boxtext>
                    </S.BoxTitleAbout>
                </S.BoxConteudocolher>
            </S.SectionColher>
            <S.SectionInput >
                <S.BoxLogin>
                    <h2>{mainh2Subscribe}</h2>
                    <h3>{mainsubtitlesiginup}</h3>
                    <input placeholder="Your Email" type="email" />
                    <button>{mainbuttonsubmit}</button>
                </S.BoxLogin>
            </S.SectionInput>
        </S.Container>
    )
}
