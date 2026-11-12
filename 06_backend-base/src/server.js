import express from "express";

const app = express();

/**
 * endpoint = api request
 * http methods: GET POST UPDATE DELETE
 * GET - get information
 * POST - create new resource
 * UPDATE - update resource
 * DELETE - deleting a resource
 */

// PORT => empty room => server application 3001
// PORT => 3001 is empty => npm run dev running out frontend react application

// http://localhost:3001
// request is incoming
// response is outbound
app.get("/", (request, response) => {
  return response.send("This is coming from our server");
});

const products = [
  { id: 1, name: "tv", price: 100 },
  { id: 2, name: "orange", price: 20 },
  { id: 3, name: "shoes", price: 60 },
];

app.get("/products", (request, response) => {
  return response.send(products);
});

app.post("/signup", (request, response) => {
  // some interaction with the database
  // send something to the frontend
});

app.listen(3001, () => console.log("Server starting on port: 3001"));

/**
 * POST request from the frontend - context form submit request
 * first_name, last_name, password
 *
 * const [firstName, setFirstName] = useState();
 * const [lastName, setLastName] = useState();
 * const [password, setPassword] = useState();
 *
 * const options = {
 *  method: "POST"
 *  headers: {
 *      "content-type": "application/json"
 *  }
 *  body: {
 *      "first_name": firstName,
 *      "last_name": lastName,
 *      "password": password
 *  }
 * }
 * fetch("http://localhost:3001/signup", options)
 *
 */
