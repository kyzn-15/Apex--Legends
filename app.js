const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Blog = require("./models/blog");
const { log } = require("handlebars");

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// MongoDB connection string
const dbURI = "mongodb+srv://admin1:12345@kyzn.vrph9.mongodb.net/?retryWrites=true&w=majority&appName=Kyzn";
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("Connected to db");
    const PORT = 8000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://127.0.0.1:${PORT}`);
    });
  })
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/news", (req, res) => {
  res.render("news", { title: "News" });
});

// Single route to fetch blogs
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs", { blogs: result, title: "Blogs" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).render("500", { title: "Server Error" }); // Handle server error
    });
});

app.get("/create-blog", (req, res) => {
  res.render("create_blog", { title: "Create a new blog" });
});

app.post("/blogs", urlencodedParser, (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    snippet: req.body.snippet,
    body: req.body.body
  });

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).render("500", { title: "Server Error" }); // Handle server error
    });
});

// Fetch blog details
app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Fetching blog with id: ${id}`);
  Blog.findById(id)
    .then((result) => {
      if (!result) {
        console.log(`No blog found with id: ${id}`);
        return res.status(404).render("404", { title: "Blog Not Found" });
      }
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(`Error fetching blog with id: ${id}`, err);
      res.status(500).render("500", { title: "Server Error" }); // Handle server error
    });
});

// Handle blog deletion
app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error deleting blog'); // Handle server error
    });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

