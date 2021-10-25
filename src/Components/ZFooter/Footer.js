import React from 'react'
import * as S from "./Styles"
import { graphql, useStaticQuery} from "gatsby"


export default function Footer() {

    const data = useStaticQuery(graphql`
    
        query{
            alldata{
                footers {
                    footerbtnabout
                    footerbtnrecipes
                    footerbtnsubscribe
                    footertitlecredtis
                    footerimgtwt {
                      url
                    }
                    footerimgpint {
                      url
                    }
                    footerimginsta {
                      url
                    }
                    footerimgface {
                      url
                    }
                }
            }
        }
    
    `)



        const {  
            
            footerbtnabout,
            footerbtnrecipes,
            footerbtnsubscribe,
            footertitlecredtis,
            footerimgtwt, 
            footerimgpint,
            footerimginsta, 
            footerimgface   } = data.alldata.footers[0]



    return (
        <S.Container>
        <S.SocialBox>
            <S.BoxSocialImgs>
                <div>
                    <img style={{width: '100%'}} src={ footerimginsta.url } alt="imagem logo instagram " />
                </div>
                <div>
                    <img style={{width: '100%'}} src={ footerimgtwt.url } alt="imagem logo twitter " />
                </div>
                <div>
                    <img style={{width: '100%'}} src={ footerimgface.url } alt="imagem logo  facebook" />
                </div>
                <div>
                    <img style={{width: '100%'}} src={ footerimgpint.url } alt="imagem logo pinteres " />
                </div>
            </S.BoxSocialImgs>
            <S.ImnputsBox>
                <button>{ footerbtnabout }</button>
                <button>{ footerbtnrecipes }</button>
                <button>{ footerbtnsubscribe }</button>
            </S.ImnputsBox>
        </S.SocialBox>
        <S.Copyright>
            <h3>{ footertitlecredtis }</h3>
        </S.Copyright>
    </S.Container>
    )
}
