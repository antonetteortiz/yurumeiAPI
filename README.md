Garifuna Music API

Description: The purpose of the project was to create a restful CRUD API using tools like Mongodb, Express.js, Node.js etc. and deploy it with Heroku. I built this Garifuna Music Directory API creating data of garifuna musicians and their albums. The directory model references artist name, album title, genre, label, producer, year, track list and album artwork. In addition to having full CRUD functionality which allows users to create, read, update, and delete whatever data they would like, it also follows the restful guidelines.

Technologies: MongoDB Heroku Express.js Node.js Mongo Atlas Axios VS code

Required Installations: Fork and clone the repository Inside the directory run: npm init npm install express npm install mongo npm install body-parser Code away

To Run the app use node index.js

## Backend JSON API PROJECT

---

## Deployed Url

https://bombrecipeapi.herokuapp.com/

**Description**

---

API was created using the frameworks Node.js and express, and the database Mongodb in conjuction with the library mongoose. Testing was done with the application postman. This api provides information for recipes including title, summary, time to cook, servings, images, cuisine genre, ingredients, instructions, and whether or not the dish if vegetarian, vegan, or dairy free.

**Development Process**

| **Date**  | **Progress**                                                                                                                                           | **Working On**                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| 11/3/2020 | API connection attempting to be established so that information can be seeded into mongodb database.                                                   | API connection giving some issues |
| 11/4/2020 | API connection established and working. Filtered through a model and seeded into a local mongo database. Routes established through CRUD functinality. | Working on readme.                |
| 11/5/2020 | Stylized Readme.md and deployed API via heroku                                                                                                         | NA                                |

**API Accessibility**

---

- Users of this API can access a multitude of different recipes. They can be accessed in bulk or through searching by type of cuisine.
- User can also create more recipes, update existing ones, or delete through established routes.

**Model**

```
recipeSchema = {
  name: String,
  description: String,
  photo: String,
  servings: String,
  ingredients: [String],
  steps: [String],
  author: String
}

musicSchema = {
  artistName: String,
  title: String,
  genre: String,
  year: String,
  link: String,
  artwork: String
}
```

**Routes**

---

| **Method** | **Path**                           | **Description**                                                                                     |
| ---------- | ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| Get        | localhost:3000/                    | Gets all recipes in the user database                                                               |
| Get        | localhost:3000/:name               | Place the style of cuisine you would like to retreive and they will populate below                  |
| Get        | localhost:3000/searchByTitle/:name | Place the title of the recipe you are looking for in the name portion of this url (spaces included) |
| Post       | localhost:3000/new                 | This can create a new recipe via postman                                                            |
| Put        | localhost:3000/recipe/:name        | Place the name of the recipe behind the recipe backslash to find a recipe and edit it               |
| Delete     | localhost:3000/remove/:name        | Place the name behind the remove backslach to find the recipe by name and remove that recipe        |

**Tools used: Postman**
Postman was used to test out CRUD functionality to manipulate the db.

**Installation Instructions**
After cloning this repository run npm install to install all dependencies included in the package.json file. Users will also need to have mongodb established on their computer.
