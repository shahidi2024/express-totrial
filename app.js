const express = require('express')
const app = express()
const port = 5000


const courses = [
    {
        id : 1,
        title : 'JS',
        price : 0
    },
    {
        id : 2,
        title : 'React',
        price : 5000
    },
    {
        id : 3,
        title : 'Nodejs',
        price : 3500
    },
    {
        id : 4,
        title : 'MongoDB',
        price : 0
    },
]

app.get('/courses/:courseId', (req, res) => {

    const course = courses.find( item => item.id === Number(req.params.courseId) )
    if (course) {
        res.json(course)
    } else {
        res.send('no course found :))')
    }

  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
