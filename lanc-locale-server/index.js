import express from 'express';
import bodyParser from 'body-parser'; // allows us to take in incoming POST request bodies
import usersRoutes from './routes/users.js';
import establishmentRoutes from './routes/establishments.js'
import reviewRoutes from './routes/reviews.js'

const app = express(); // call Express.js as a function
const PORT = 8080;

app.use(bodyParser.json()); // use JSON data in our application

app.use('/users', usersRoutes);
app.use('/establishments', establishmentRoutes);
app.use('/reviews', reviewRoutes);

//app.get('/', (request, response) => response.send('Hello, World!'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));