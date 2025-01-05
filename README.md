# Newsify - React News App

Newsify is a dynamic and user-friendly news application built using React and Bootstrap. It utilizes the [News API](https://newsapi.org/) to fetch the latest articles across various categories like Sports, Entertainment, Technology, and more. 

## Features

- 🌟 **Category-Based News**: Easily filter news by categories such as Sports, Entertainment, Technology, Business, and more.
- ⚡ **Real-Time Updates**: Fetches live news updates from the News API.
- 🎨 **Responsive Design**: Built with Bootstrap for a seamless experience across all devices.
- 🔍 **Search Functionality**: Quickly find specific articles with an integrated search feature.
- 🚀 **Lightweight and Fast**: Optimized React components for efficient performance.

---

## Technologies Used
- React: JavaScript library for building the user interface.
- Bootstrap: For responsive and mobile-first design.
- News API: To fetch live news updates.
- Axios: For HTTP requests.
- React Router: For navigation between pages.

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/newsify.git
   cd newsify 
2. **Install Dependencies**
   ```bash
   npm install
3. **Set Up API Key**
  - Go to News API and sign up to get your API key.
  - Create a .env file in the root directory and add your API key:
    ```bash
    REACT_APP_NEWS_API_KEY=your_api_key_here
4.**Start the Development Server**
  ```bash
npm install
  ```
---
5. Open in Browser Open
```bash
http://localhost:3000
```

## Folder Structure
```bash

newsify/
├── public/ 
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Navigation bar
│   │   ├── NewsCard.js     # Component to display individual news articles
│   │   ├── NewsList.js     # Component to list all articles
│   │   ├── Footer.js       # Footer component
│   ├── pages/
│   │   ├── Home.js         # Main landing page
│   │   ├── Category.js     # Page for specific categories
│   ├── utils/
│   │   ├── api.js          # API service to fetch news data
│   ├── App.js              # Root component
│   ├── index.js            # Application entry point
│   ├── styles.css          # Custom styles
├── .env                    # API Key Configuration
├── package.json            # Project metadata


```




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
