import * as React from "react"
import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import Header from '../Components/Header/Header'
import Main from '../Components/Main/Main'
import Footer from '../Components/ZFooter/Footer'


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`


const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <title>Cook Book</title>
      </Helmet>
      <GlobalStyle />
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default IndexPage
