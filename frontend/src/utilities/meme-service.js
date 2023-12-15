import config from '../config'

let imageLink = 'https://api.memegen.link/images'

export async function getMemeTemplates() {
    const res = await fetch(config.BASE_URL, {method: 'GET'})
    if(res.ok) {
        return res.json()
    }
}

export async function getTemplate(id) {
    const res = await fetch(`${imageLink}/${id}`)
    console.log(res)
    if (res.ok) {
        return res.json
    }
}