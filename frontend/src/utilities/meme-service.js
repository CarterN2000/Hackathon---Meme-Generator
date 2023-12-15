import config from '../config'

export async function getMemeTemplates() {
    const res = await fetch(config.BASE_URL, {method: 'GET'})
    if(res.ok) {
        return res.json()
    }
}