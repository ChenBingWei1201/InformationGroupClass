import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config(); // for .env
const port = process.env.PORT;

const app: Express = express();
app.use(express.json());

const courses = [
    { id: 1, name: "Chinese" },
    { id: 2, name: "Math" },
    { id: 3, name: "English" }
];

// function to validate courses
function validateCourses(course: any) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })

    return schema.validate(course);
}

// root page
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// GET
app.get('/api/courses', (req: Request, res: Response) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req: Request, res: Response) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course){
        res.status(404).send('The course of the given ID is not found.');
        return;
    }
    res.send(course);
})

// POST
app.post('/api/courses', (req: Request, res: Response) => {
    const { error } = validateCourses(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});


// PUT
app.put('/api/courses/:id', (req: Request, res: Response) => {
    // if the id isn't exit
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course){
        res.status(404).send('The course of the given ID is not found.');
        return;
    }
    // if the name is not vaild
    const { error } = validateCourses(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    // update
    course.name = req.body.name;
    res.send(course);
})

// DELETE
app.delete('/api/courses/:id', (req: Request, res: Response) => {
    // if the id isn't exit
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course){
        res.status(404).send('The course of the given ID is not found.');
        return;
    }

    // delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
})

// listen to the port
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});