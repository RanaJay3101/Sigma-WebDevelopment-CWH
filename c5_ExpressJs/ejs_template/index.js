const express = require('express');
const app = express();
const port = 3000;

// const ejs = require('ejs');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.sendFile("templates/index.html", { root: __dirname });

    let siteName = "Adidas";
    let searchText = "Search Here";
    res.render("index", { siteName: siteName, searchText: searchText });
});

app.get('blog/:slug', (req, res) => {
    let slug = req.params.slug;
    let blogTitle = "Blog Title - Adidas";
    let blogContent = "Blog Content - this is content of the blog";
    // res.sendFile("templates/blog.html", { root: __dirname });

    res.render('blog', { title: blogTitle, content: blogContent });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});