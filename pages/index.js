import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json'

function Title(props) {
    const Tag = props.tag;
    return (
        <>
            <Tag>{props.children} </Tag>
            <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals['000']};
          font-size: 24px;
          font-weight: 600;
          text-align: center;
        }
        `}</style>
        </>
    );
};

function IndexPage() {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [showImage, setShowImage] = useState(false);
    const [texto, setTexto] = useState('Digite um usuário!');
    const roteador = useRouter();

    async function teste() {

        if (username == '') {
            setTexto('Digite um usuário!')
            setShowImage(false);
        } else {
            const url = `https://api.github.com/users/${username}`
            const response = await fetch(url);
            if (!response.ok) {
                setShowImage(false);
                setTexto('Usuario não Encontrado!')
            } else {
                setShowImage(true);
            }
            const resultado = await response.json();
            setLocation(resultado)
        }
    }

    useEffect(() => {
        teste()
    }, [username])


    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',

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
                        as="form"
                        onSubmit={function (event) {
                            event.preventDefault();
                            roteador.push(`/chat?username=${username}`)
                        }}
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
                            placeholder='Usuário'
                            onChange={(event) => {
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
                            disabled={!showImage}
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[700],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                    {showImage &&
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

                            <Box
                                styleSheet={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}

                            >
                                <Text
                                    variant="body4"
                                    styleSheet={{
                                        textAlign: 'center',
                                        color: appConfig.theme.colors.neutrals[200],
                                        backgroundColor: appConfig.theme.colors.neutrals[900],
                                        padding: '3px 10px',
                                        margin: '5px',
                                        borderRadius: '1000px'
                                    }}
                                >
                                    {username}
                                </Text>
                                <Text
                                    variant="body4"
                                    styleSheet={{
                                        textAlign: 'center',
                                        color: appConfig.theme.colors.neutrals[200],
                                        backgroundColor: appConfig.theme.colors.neutrals[900],
                                        padding: '3px 10px',
                                        margin: '5px',
                                        borderRadius: '1000px'
                                    }}
                                >
                                    {location.location}
                                </Text>
                                <Text
                                    variant="body4"
                                    styleSheet={{
                                        textAlign: 'center',
                                        color: appConfig.theme.colors.neutrals[200],
                                        backgroundColor: appConfig.theme.colors.neutrals[900],
                                        padding: '3px 10px',
                                        margin: '5px',
                                        borderRadius: '1000px'
                                    }}
                                >
                                    {location.company}
                                </Text>
                            </Box>

                        </Box>}

                    {!showImage &&
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
                            <Title tag="h2">{texto}</Title>

                        </Box>
                    }
                </Box>
            </Box>


        </>


    )
}

export default IndexPage