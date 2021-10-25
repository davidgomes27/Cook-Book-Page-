module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "cookbook2.0",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckv2v9ke12oxz01yz1ils939e/master",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'React go',
        short_name: 'Reactgo',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/chefe-de-cozinha.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans Mono`,
          `source sans pro\:300,400,400i,700`,
           
        ],
        display: 'swap'
      }
    },
  ],
};
