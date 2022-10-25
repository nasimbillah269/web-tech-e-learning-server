const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('course API Running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_course = courses.find(n => n.category_id === id);
    res.send(category_course)


})


app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(n => n.id === id);
    res.send(selectedCourses)

    // console.log(req.params.id)
})


app.listen(port, () => {
    console.log('web tech Server running on port:', port);
})