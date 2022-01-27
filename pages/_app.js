function GlobalStyle() {

    return (
        <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
        background-image: url("http://pm1.narvii.com/6905/d280e6dd0a2e942c635a4d0578ded284b40b37e0r1-2048-1458v2_uhq.jpg");
        background-size: 'cover';
      }
      /* App fit Height */
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>


    )

}

export default function CustomApp({Component, pageProps }) {
    return (

        <> 
        
            <GlobalStyle />
            <Component {...pageProps} />
        </>


    )

}