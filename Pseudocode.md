### MEME GENERATOR

# Description
- Build a meme generator that allows users to insert custom text on meme images fetched automatically.

# Goals
- A user can enter random text and select from a few randomly selected meme images
- A user can search for new meme images if nothing matches the text
- A user can see memes created by other users

# Frontend needs
 - Main page to search for the meme images, list of imagees will appear, previously created memes will be stored below the search bar
 - "show" page - shows individual meme selected by user, includes "favoirte" and "edit" button
 - "edit" page - append text to each image
 - "myFavorites" page - stores a list of memes
 - "Header" - nav bar - "Explore/Home" "Favorites"

 # Backend needs 
  - Routes for main, show, edit, update, myFavorites, delete : (CRUD)
  - controlllers for all the routes
  - API connection
  - mongoose model of a meme
    - image
    - text
    - array[ids of favorited memes]
