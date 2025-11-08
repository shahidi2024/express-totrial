const express = require("express");
const app = express();
app.use(express.json())



const port = 5000;

const courses = [
  {
    id: 1,
    title: "JS",
    price: 0,
  },
  {
    id: 2,
    title: "React",
    price: 5000,
  },
  {
    id: 3,
    title: "Nodejs",
    price: 3500,
  },
  {
    id: 4,
    title: "MongoDB",
    price: 0,
  },
];

app.get("/courses/:courseId", (req, res) => {
  const course = courses.find(
    (item) => item.id === Number(req.params.courseId)
  );
  if (course) {
    res.json(course);
  } else {
    res.send("no course found :))");
  }
});


app.post('/courses', ( req, res ) => {
    console.log(req.body);
    
    res.statusCode = 201;
    res.send(`New Courses Created Successfully`)
})

app.delete('/courses/:id', ( req, res ) => {
    res.status(200).send('Main Courses Removed Successfully')
})

app.put('/courses/:id', ( req, res ) => {
    res.status(401).send('Main Courses Updated Successfully')
})


app.get("/api/users/:userId/article/:articleId", (req, res) => {
  console.log(`UserId: ${req.params.userId}`);
  console.log(`ArticleId: ${req.params.articleId}`);

  res.json({
    message : "Main User Articles Send To Client :))"
  })

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
