import { v4 as uuidv4 } from 'uuid';

let users = []

export const createUser = (request, response) => {
    const user = request.body;
    users.push({ ...user, id: uuidv4() }); // add new registered user object with added unique user ID (using UUID package) to array
    response.send(`Welcome, ${user.username}! Cheers!`);
};

export const getUser = (request, response) => {
    const { id } = request.params;
    const foundUser = users.find((user) => user.id == id);
    response.send(foundUser);
};

export const deleteUser = (request, response) => {
    const { id } = request.params;
    // Filter through the users array, and users in array will be reassigned to include only the users whose IDs are not equal to the user being passed in
    users = users.filter((user) => user.id !== id);
    response.send(`User account for ${this.user.username} has been deleted.`)
};

// PATCH request method:
export const updateUser = (request, response) => {
    // Extract the id parameter from the request object using destructuring assignment
    const { id } = request.params;
    // Extract the firstName, lastName, and age parameters from the request object's body using destructuring assignment
    const { firstName, lastName, username, age } = request.body;
    // Search the array for a user matching the user ID passed in
    const user = users.find((user) => user.id == id);
    // If user is found, update the user's properties based on any or all of the values passed in
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (username) user.username = username;
    if (age) user.age = age;

    response.send(`User information for ${this.user.username} has been updated.`)
};