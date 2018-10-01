## Application

This single page application fetches data from XML file to display list of sales. The XML file is saved in the root directory.

---

## Getting Started

**Prerequisites** 

1. Install [yarn](https://yarnpkg.com/en/).
2. For macOS users, please follow these [instructions](https://yarnpkg.com/lang/en/docs/install/#mac-stable).
2. For Windows users, please follow these [instructions](https://yarnpkg.com/lang/en/docs/install/#windows-stable). There are several ways to install yarn, you can select one option.

If you have problems in installing *yarn* on your machine, you can also run the application using *npm*. Install [Node.js](https://nodejs.org/en/) & [npm](https://www.npmjs.com). Instead of *yarn* commands below, use *npm* commands like, *npm install*. 

---

## Build & Run the App

The XML file is converted to JSON format & it is stored in the root directory. If you wish to re-generate the file again, run *node xml2json.js*. A new file name *data.json* will be created.

Inside the cloned directory, run the following commands.

1. **yarn install**. This will install all the dependencies.
2. **yarn run build-prod**. This will run webpack in production mode.
3. **yarn run serve**. This will run the application on localhost via *live-server* & automatically opens a web browser showing the application running.

## App Walkthrough

Now that you have it running, I would like to explain the architecture of the application. I've used ES6 standard to code this application.

If Delivery Information or end date for a sale is not available in XML file, the fields are marked as *Not Available* 

**Webpack**

I've used webpack, a module bundler to run babel & also to build the project. After building, webpack outputs a single JS (bundle.js) file containing all the javascript files & a single CSS (styles.css) containing all the styles.

**Directory Structure**

All the JS code live in */src/* directory. *app.js* is the entry point for the application, all other files are imported when they are necessary. I've added components & other files to their respective sub-directories. This allows us to manage the code easily.

**Components**

1. App - This is the main component for the application. '*Item*' component is called from here.
2. Item - Shows an individual Sale.

**Styling**

SCSS is used to style the app. I've used bootstrap to import basic styling. Styles live in '*/src/styles*' directory. Compiled into CSS via webpack loaders & separated to a styles.css using '*mini-css-extract-plugin*'.          