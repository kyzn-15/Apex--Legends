# Apex Legends Website Clone by Kevin Wilbert Johan 11 IPA 1

This is a clone of the Apex Legends official website built using **Express.js** as the backend framework, **EJS** for templating, and **Bootstrap** for responsive design. The project replicates the layout and functionality of the official site using a lightweight server, front-end technologies, and **MongoDB** as the database. Additionally, it includes a blog feature with create and delete functionalities.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Design**: Built with Bootstrap for a responsive, mobile-first design.
- **Templating**: Uses EJS for dynamic HTML templating.
- **Server**: Backend powered by Express.js for routing and serving pages.
- **Database**: MongoDB for storing blog data.
- **Blog Features**: Ability to create and delete blog posts.
- **Custom Styling**: Additional custom styling with CSS for improved visual elements.

## Installation

1. Clone this repository:
   ```bash
   https://github.com/kyzn-15/Apex-Legends.git
   cd Apex-Legends
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up MongoDB:
   - Make sure you have MongoDB installed and running.
   - Create a `.env` file with your MongoDB connection string:
     ```bash
     MONGODB_URI=mongodb://localhost:27017/apex_legends_clone
     ```

4. Run the application:
   ```bash
   node app.js
   ```

5. Visit the application in your browser at `http://127.0.0.1:3000/`.

## Usage

1. **Homepage**: Shows the main banner and featured content.
2. **About Page**: Provides background information about the game.
3. **News Page**: Displays the latest game-related news articles.
4. **Blog**: View, create, and delete blog posts.

### Blog Features

- **Create Blog Post**: Navigate to `/blog/create` to create a new blog post.
- **Delete Blog Post**: Blog posts can be deleted by clicking the delete button on each post.

## Project Structure

```bash
apex-legends-clone/
│
├── public/
│   ├── css/
│   └── assets/
│
├── views/
│   ├── layouts/
│   ├── partials/
│   └── pages/
│
├── models/
│   └── blog.js
│
├── routes/
│   └── blog.js
│
├── app.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

- **public**: Contains static files like CSS and images.
- **views**: EJS templates are organized here. Layouts, partials, and page-specific templates.
- **models**: MongoDB models, including the blog schema.
- **routes**: Express routes for handling blog logic and other pages.
- **app.js**: Main application file where routes and the Express server are set up.

## Technologies Used

- **Express.js**: Web framework for Node.js.
- **EJS**: Templating engine for dynamic HTML.
- **MongoDB**: NoSQL database for storing blog posts.
- **Mongoose**: ODM for MongoDB in Node.js.
- **Bootstrap**: Frontend framework for responsive, mobile-first websites.
- **CSS**: Custom styling to complement Bootstrap.

## Contributing

Feel free to fork this project and submit pull requests. Any contribution that improves the quality of the clone or adds new features is welcome.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
