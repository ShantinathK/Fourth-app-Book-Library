# Application Name : Book Librabry
# Includes 3 Phases
1. Local, Non-ersisted list of books
2. List of books persisted with outside API
3. OutSide API + centralised state


# Local, Non-ersisted list of books
1. Will be discussing about how to handle forms
2. How to get value from Input field - using "event.target.value" inside a function - onChange
3. What is event.preventDefault?
4. How to pass data bewteen components using props, state and event management?
5. What is promise?
6. State management on Array? IMP
7. Why we cannot use push menthod to update state - because useState referencee to location in memory, when you Array using push method it mutates the existing array so location remains same and state this no changes made- so no rendering - should use "setTerm[...array, {id:123, title:event}]" - it reference new location.

8. About Filter function - removing elements
9. About map function - modifing funtion using rest or spread operator(...array)

10. Data persistance with API request
11. What is JSON-server? - Open source project for development and learning - similar to production server
12. how to setup JSON -server and run it?
14. API requests
15. what is Standalone API Client?
16. what is api.http?
17. What is UseEffect()?
18. 3 ways to use UseEffect function?

---------------------------------------------------------------------------
Till now, There was absolutely Zero persistent to data -> Soon user referesh page or open new window data used to vanish or loss all data 

TO resolve this - will move to next phase

# List of books persisted with outside API




-----------------------------------------------------------------------------


















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
