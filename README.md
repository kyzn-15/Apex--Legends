# Apex Legends Website Clone

This is a clone of the Apex Legends official website built using **Express.js** as the backend framework, **Handlebars.js** for templating, and **Bootstrap** for responsive design. The project aims to replicate the layout and functionality of the official site using a lightweight server and front-end technologies.

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
- **Templating**: Uses Handlebars.js for dynamic HTML templating.
- **Server**: Backend powered by Express.js for routing and serving pages.
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

3. Run the application:
   ```bash
   node app.js
   ```

4. Visit the application in your browser at `http://127.0.0.1:3000/`.

## Usage

1. **Homepage**: Shows the main banner and featured content.
2. **About Page**: Provides background information about the game.
3. **News Page**: Displays the latest game-related news articles.

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
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

- **public**: Contains static files like CSS and images.
- **views**: Handlebars templates are organized here. Layouts, partials, and page-specific templates.
- **app.js**: Main application file where routes and the Express server are set up.

## Technologies Used

- **Express.js**: Web framework for Node.js.
- **Handlebars.js**: Templating engine for dynamic HTML.
- **Bootstrap**: Frontend framework for responsive, mobile-first websites.
- **CSS**: Custom styling to complement Bootstrap.

## Contributing

Feel free to fork this project and submit pull requests. Any contribution that improves the quality of the clone or adds new features is welcome.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

This `README.md` gives an overview of the project, instructions on setup and usage, and outlines the technologies involved. Let me know if you'd like to add or change anything!
