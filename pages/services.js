export async function getUserInformationsGithub(username) {

        const url = `https://api.github.com/users/${username}`
        const response = await fetch(url);
        const resultado = await response.json();
        console.log(resultado)

        return resultado
}