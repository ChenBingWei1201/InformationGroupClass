const Joi = require("joi"); // return is a class
const express = require("express"); // return is a function
const app = express();

app.use(express.json()); // use(return a piece of middleware) 

const courses = [
  { id: 1, name: "Chinese" },
  { id: 2, name: "Math" },
  { id: 3, name: "English" }
]

// router
app.get('/', (req,res) => {
  res.send("Hello world");
});

app.get('/api/courses', (req,res) => {
  res.send(courses);
});

app.post('/api/courses', (req, res) => {
  const { error } = validateCourse(req.body);
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

// update data
app.put('/api/courses/:id', (req, res) => {

  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send('The course of the given ID is not found.');
  
  //
  const { error } = validateCourse(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  // 
  course.name = req.body.name;
  res.send(course);
  
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });
  
  return schema.validate(course);
}



// /api/course/1
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send('The course of the given ID is not found.');
  res.send(course);
});

// app.get('/api/post/:year/:month', (req, res) => {
//   res.send(req.query);
// });

// port
const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening to the port ${port}...`));




// delete
app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send('The course of the given ID is not found.');
  
  // delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});