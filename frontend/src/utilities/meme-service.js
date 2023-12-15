import config from '../config'
import * as memeAPI from './meme-api'

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

export async function addToDB(topText, bottomText, id){
    try{
        const data = {blank:`https://api.memegen.link/images/${id}/${topText}/${bottomText}`}
        console.log(data)
        await memeAPI.createDB(data)
      }
      catch(err){
      console.log(err)
      return err;
      }
}

export async function getCommunityMemes(){
    try {
        const data = await memeAPI.index();
        return data;
      } catch (err) {
        console.log(err);
        return err;
      }
}

export async function deleteMeme(id){
    try{
        const meme = await memeAPI.destroy(id);
        return meme;
      }catch(err){
        return err;
      }
}

export async function showMeme(id){
    try{
        const meme = await memeAPI.show(id);
        return meme;
      }catch(err){
        return err;
      }

}