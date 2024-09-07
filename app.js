const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: "Home Page",
        // message: "test Handlebars",
    });
});

// app.get('/blog', (req,res) => {
//     const blogs = [
//         {title: 'Yoshi finds egg', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//         {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//         {title: 'How to beat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//     ];
//     res.render('blog',{
//         blogs : blogs
//     });
// });

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
    });
});
app.get('/news', (req, res) => {
    res.render('news', {
        title: "News",
    });
});

// app.engine('handlebars', handlebars.engine({
//     helpers: {
//         add: (num1, num2) => num1 + num2
//     }
// }));

app.use((req, res) => {
    res.status(404).send('<h1>404, page not found</h1>')
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on http://127.0.0.1:${PORT}`);
});