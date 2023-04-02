import { v4 as uuidv4 } from 'uuid';

let reviews = [] // to be replaced once DAOs integrated
let users = [] // to be replaced once DAOs integrated

export const addReview = (request, response) => {
    const review = request.body;
    reviews.push({ ...review, id: uuidv4() }); // add new review object with added unique review ID (using UUID package) to array
    response.send(`Review submitted`);
};

export const getReviews = (request, response) => {
    const { establishment } = request.params;
    const reviews = reviews.find((establishment) => establishment.id == id); // is 'find' the right method to use here?
    response.send(reviews);
};

export const deleteReview = (request, response) => {
    const { id } = request.params;
    // Filter through the users array, and users in array will be reassigned to include only the users whose IDs are not equal to the user being passed in
    reviews = reviews.filter((review) => review.id!== id);
    response.send(`Your review has been deleted.`)
};

// PATCH request method:
export const updateReview = (request, response) => {
    // Extract the id parameter from the request object using destructuring assignment
    const { id } = request.params;
    // Extract the parameters from the request object's body using destructuring assignment
    const { starRating, review, recommendations } = request.body;
    // Search the array for a user matching the user ID passed in
    const user = users.find((user) => user.id == id);
    // If user is found, update the review's properties based on any or all of the values passed in
    if (starRating) reviews.starRating = starRating;
    if (review) reviews.review = review;
    if (recommendations) reviews.recommendations = recommendations;

    response.send(`User information for ${this.user.username} has been updated.`)
};

// TODO test each of these methods