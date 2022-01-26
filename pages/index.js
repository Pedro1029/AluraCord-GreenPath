import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useState } from 'react';
import appConfig from '../config.json'

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

function Title(props) {
    console.log(props);
    const Tag = props.tag;
    return (
        <>
            <Tag>{props.children} </Tag>
            {/* o style jsx esta gerenciando os estilos */}
            <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals['000']};
          font-size: 24px;
          font-weight: 600;
        }
        `}</style>
        </>
    );
};

function HomePage() {
    const [username, setUsername] = useState('Pedro1029');

    return (
        <>
            <GlobalStyle />

            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: 'url(http://pm1.narvii.com/6905/d280e6dd0a2e942c635a4d0578ded284b40b37e0r1-2048-1458v2_uhq.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                  }}
            >

                <Box

                    styleSheet={{

                        display: 'flex',
                        width: '100%',
                        maxWidth: '700px',
                        borderRadius: '5px',
                        padding: '32px',
                        margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                          },

                    }}

                >
                    <Box

                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' },
                            textAlign: 'center',
                            
                            marginBottom: '32px',

                        }}
                    >
                        <Title tag="h2">Seja bem vindo(a)!</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>

                        <TextField
                            onChange={function (event) {
                                const valor = event.target.value;
                                setUsername(valor);
                              }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals['000'],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[700],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],

                            }}
                        />
                    </Box>

                    <Box
                    styleSheet={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: '200px',
                        padding: '16px',
                        borderRadius: '10px',
                        flex: 1,
                        minHeight: '240px',
                    }}
                >
                    <Image
                        styleSheet={{
                            borderRadius: '50%',
                            marginBottom: '16px',
                        }}
                        src={`https://github.com/${username}.png`}
                    />
                    <Text
                        variant="body4"
                        styleSheet={{
                            color: appConfig.theme.colors.neutrals[200],
                            backgroundColor: appConfig.theme.colors.neutrals[900],
                            padding: '3px 10px',
                            borderRadius: '1000px'
                        }}
                    >
                        {username}
                    </Text>
                </Box>
                </Box>
            </Box>


        </>


    )
}

export default HomePage