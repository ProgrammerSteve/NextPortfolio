import ecommercePhoto from "./photos/ecommerceCMS.webp";
import frontendEcommercePhoto from "./photos/ecommerceFrontend.webp";
import tfliteAndroid from "./photos/TfliteAndroidApp.webp";
import d3Photo from "./photos/d3scatter.webp";
import nasaPhoto from "./photos/nasa.webp";
import pokedexPhoto from "./photos/pokedex.webp";
import rnSearchBar from "./photos/searchbar.webp";
import nextZaya from "./photos/ZayaNextJs.webp";
import drawingPic from "./photos/drawing.webp";
import ionicPic from "./photos/ion_app.webp";
import assessmentPic from "./photos/assessment.webp";
import mandarinPic from "./photos/hskpic.webp";
import crwnClothingPic from "./photos/crwn.webp";
import reactGamePic from "./photos/game.webp";
import robofriendsPic from "./photos/robots.webp";
import apexAirElectric from "./photos/apexairelectric.webp";
import angularClips from "./photos/angularClips.webp";
import nextMusic from "./photos/nextMusic.webp";
import warpConvert from "./photos/warpConvert.webp";
import threejsDemo from "./photos/threejsDemo.webp";
import webGLDemo from "./photos/webgldemo.webp";
import MLPic from "./photos/MLPic.webp"
import CubeAnimation from "./photos/cubeAnimation.webp"
import ElectronScraping from "./photos/electronScraping.webp"
import AndroidFirebase from "./photos/androidFirebase.webp"
import BankCli from './photos/bankCli.webp'
import JavalinApp from "./photos/javalinApp.webp"
import RNClock from "./photos/RNClock.webp"
import KafkaDemo from "./photos/KafkaDemo.webp"
import ClickableThree from "./photos/ClickableThreeDemo.webp"
import Fibonacci from "./photos/fibonacci_calculator.webp"

// import { ecommercePhoto } from "./photos";
import type { Project } from "./page";

export const projects: Project[] = [
    {
      title: "Ecommerce CMS",
      id: 0,
      description: `
      A React App that uses apollo-client, apollo-server, 
      graphql, prisma, and CockroachDB (MySQL) to store and edit items on file. 
      Backend is written with express.js and done so in typescript. Front end uses React, 
      TailwindCSS, webpack and React-router-dom to display pages. Deployed as a docker image on Fly.io
      `,
      imageSrc: ecommercePhoto,
      imageLink: "https://graphqlecommerce.fly.dev/",
      isLazy: false,
      tags: [
        "React",
        "Next.js",
        "Next-auth",
        "Apollo-GraphQL",
        "Prisma",
        "CockroachDB",
        "Express.js",
        "Node.js",
        "Typescript",
        "Docker",
        "TailwindCSS",
        "React-Router",
        "Webpack",
      ],
      links: [
        {
          title: "website",
          url: "https://graphqlecommerce.fly.dev/",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/graphqlEcommerce",
        },
      ],
    },
    {
      title: "Ecommerce Frontend",
      id: 1,
      description: `
      A Nextjs Typescript App that uses apollo-client, apollo-server, 
      graphql, prisma, and CockroachDB (MySQL) to display items that can be added to the user's account. 
      Google OAuth is used with next Auth to sign in users and then creates an account on the backend.
      TailwindCSS, webpack and React-router-dom to display pages. Deployed to vercel.
      `,
      imageSrc: frontendEcommercePhoto,
      imageLink: "https://squarenext.vercel.app/",
      isLazy: false,
      tags: [
        "React",
        "Next.js",
        "Next-auth",
        "Google OAuth",
        "Apollo-GraphQL",
        "Prisma",
        "CockroachDB",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          title: "website",
          url: "https://squarenext.vercel.app/",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/nextEcommerce",
        },
      ],
    },
    {
      title: "Kafka Demo",
      id: 10162024,
      description: `
      A React, Typescript app that uses socket.io to communicate with a Node.js, kafka consumer backend. 
      The Textual python app sends info via a post request to a go gin kafka producer backend. 
      The docker compose sets up the kafka.   
      `,
      imageSrc: KafkaDemo,
      imageLink: "https://github.com/ProgrammerSteve/kafkaDemo",
      isLazy: false,
      tags: [
        "React",
        "Node.js",
        "Python",
        "Textual",
        "Go",
        "gin",
        "Kafka",
        "docker-compose",
        "socket.io",
        "Typescript",
        "TailwindCSS",
  
      ],
      links: [
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/kafkaDemo",
        },
      ],
    },



















    {
      title: "Apex Air Electric",
      id: 2,
      description: `
      An Angular App that uses angular router, forms, tailwind and rxjs. 
      Done as a freelance project in collaboration with a friend for a HVAC company in the local area. The website was deployed on Vercel.
  
      `,
      imageSrc: apexAirElectric,
      imageLink: "https://apex-air-electric.vercel.app/",
      isLazy: false,
      tags: ["Angular", "Typescript", "Rxjs", "TailwindCSS", "Angular-router"],
      links: [
        {
          title: "website",
          url: "https://apex-air-electric.vercel.app/",
        },
      ],
    },
    {
      title: "Angular Clips",
      id: 20,
      description: `
      An Angular App for uploading and sharing videos that was made throughout a udemy course. The app uses angular router, forms, video-js, Ffmpeg, tailwind and rxjs. 
      Files and authentication is implemented through using firebase.
  
      `,
      imageSrc: angularClips,
      imageLink: "https://clips-angular-project-puce.vercel.app/",
      isLazy: false,
      tags: [
        "Angular",
        "Typescript",
        "firebase",
        "video-js",
        "Rxjs",
        "TailwindCSS",
        "Angular-router",
      ],
      links: [
        {
          title: "website",
          url: "https://clips-angular-project-puce.vercel.app/",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/clipsAngularProject",
        },
      ],
    },
    {
      title: "Udemy Machine Learning (AI) Course",
      id: 542024,
      description: `
      Developed three distinct models covering classification and regression.
      Processed data for training and utilized techniques such as hyperparameter tuning for model optimization. 
      Used a Logistic Regression model for heart disease prediction and implemented a time series regression model using RandomForestRegressor to forecast bulldozer prices. 
      Leveraged transfer learning with MobileNetV2 and TensorFlow to construct a classification model on google colab. 
      `,
      imageSrc: MLPic,
      imageLink: "https://github.com/ProgrammerSteve/heart_disease_ml",
      isLazy: true,
      tags: [
        "python",
        "numPy",
        "pandas",
        "matplotlib",
        "scikit-learn",
        "Tensorflow",
        "AI",
        "jupyter"
      ],
      links: [
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/Price_regression_ml",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/heart_disease_ml",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/DogClassificationTensorflow",
        },
      ],
    },
    {
      title: "Pokedex Android App",
      id: 7032024,
      description: `
      An android app written in java that utilizes the pokemon api to get information and display it in a recycler view. 
      Retrofit is used to make the api calls, glide is used to attach images to the image view, 
      lombok is used to prevent boilerplate code.
      `,
      imageSrc: pokedexPhoto,
      imageLink: "https://github.com/ProgrammerSteve/androidPokedex",
      isLazy: true,
      tags: [
        "java",
        "android",
        "retrofit",
        "glide",
        "lombok",
      ],
      links: [
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/androidPokedex",
        },
      ],
    },
    {
      title: "Electron Scraping App",
      id: 7122024,
      description: `
      An electron desktop app created with Typescript/TailwindCSS. Creates and scrapes webViews with chromium browser to get data from job postings. 
      Uses the contextBridge to send function from ipcMain to ipcRenderer.
      `,
      imageSrc: ElectronScraping,
      imageLink: "https://github.com/ProgrammerSteve/electronWebViewScraper",
      isLazy: true,
      tags: [
        "electron",
        "Typescript",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/electronWebViewScraper",
        },
      ],
    },










    {
      title: "Next Music",
      id: 29,
      description: `
      A Next.js app that uses howler.js to play mp3 files and displays pdf files of the sheet music using react-pdf. Redux is used to control the state and tailwind is used for most of the styling.
  
      `,
      imageSrc: nextMusic,
      imageLink: "https://next-music-zeta.vercel.app/",
      isLazy: true,
      tags: [
        "Next.js",
        "React",
        "Typescript",
        "TailwindCSS",
        "howler.js",
        "Redux",
        "react-pdf",
      ],
      links: [
        {
          title: "website",
          url: "https://next-music-zeta.vercel.app/",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/nextMusic",
        },
      ],
    },


    {
      title: "Android Firebase App",
      id: 7162024,
      description: `
     An Android app made with java that lets users sign in or register with Firebase Auth. 
     When authenticated, the user can edit details connected to a Firestore Database for their profile. 
      `,
      imageSrc: AndroidFirebase,
      imageLink: "https://github.com/ProgrammerSteve/AndroidFirebaseAuth",
      isLazy: true,
      tags: [
        "java",
        "android",
        "firebase",
        
        "firestore"
      ],
      links: [
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/AndroidFirebaseAuth",
        },
      ],
    },



    {
      title: "Javalin-Java Bank Backend",
      id: 862024,
      description: `
     A bank backend app made with the javalin framework in Java that interacts with a postgresql database. 
     Uses Docker-Compose and Docker to run the application and the PostgreSQL database. 
     Uses JWT tokens and hashing for authentication and storing passwords. Users and accounts have a one-to-many relationship.
  
      `,
      imageSrc: JavalinApp,
      imageLink: "https://github.com/ProgrammerSteve/Java-Javalin-Bank-Backend",
      isLazy: true,
      tags: [
        "java",
        "postgresql",
        "javalin",
        "docker",
        "docker-compose"
      ],
      links: [
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/Java-Javalin-Bank-Backend",
        },
      ],
    },    



    {
      title: "Java Bank Cli",
      id: 7152024,
      description: `
     A bank CLI app made with java that interacts with a postgresql database. 
     Has the following features login, register, withdraw, deposit, viewBalance. 
     Passwords are hashed and stored within the database.
  
      `,
      imageSrc: BankCli,
      imageLink: "https://github.com/ProgrammerSteve/JavaBankCli",
      isLazy: true,
      tags: [
        "java",
        "postgresql",
      ],
      links: [
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/JavaBankCli",
        },
      ],
    },











    {
      title: "WebGL Demos",
      id: 252024,
      description: `
      A React/Typescript application deployed on gh-pages that exhibits the usages of WebGL graphics api along with the gl-matrix library. 
      Tailwind CSS is used for the navigation sidebar. I'm slowly adding on to the project as I make more demos.
  
      `,
      imageSrc: webGLDemo,
      imageLink: "https://programmersteve.github.io/webGLtest/",
      isLazy: true,
      tags: [
        "WebGL",
        "React",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          title: "website",
          url: "https://programmersteve.github.io/webGLtest/",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/webGLtest",
        },
      ],
    },








    {
      title: "React Native Clock",
      id: 8252024,
      description: `
      A Typescript, React Native, expo app that uses react native Skia and reanimated library to create a canvas component with movement. 
      Clock hands are rotated after every second in order to display the current time.
  
      `,
      imageSrc: RNClock,
      imageLink: "https://github.com/ProgrammerSteve/rnClock",
      isLazy: true,
      tags: [
        "React",
        "Typescript",
        "React Native",
        "expo",
        "rn-Skia",
        "rn-reanimated",
        "TailwindCSS",
      ],
      links: [
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/rnClock",
        },
      ],
    },

    {
      title: "Clickable Three Demo",
      id: 11292024,
      description: `
      A Typescript, React demo using Three.js, Drei, Fiber, and Gsap. 
      Has sphere objects that change colors and translate vertically when clicked.
      `,
      imageSrc: ClickableThree,
      imageLink: "https://three-clickable.vercel.app/",
      isLazy: true,
      tags: [
        "React",
        "Typescript",
        "Three.js",
        "three/drei",
        "three/fiber",
        "gsap"
      ],
      links: [
        {
          title: "website",
          url: "https://three-clickable.vercel.app/",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/three-clickable",
        },
      ],
    },





    {
      title: "Three.js Demo",
      id: 1262023,
      description: `
      A Vite React app that uses Three.js, react-three/drei, react-three/fiber, and gsap to create a 3D
       Environment with multiple lights, an orbital camera, and motion using gsap. A model (car) was imported 
       and converted into .glb file and placed into the scene. App was deployed with netlify.
      `,
      imageSrc: threejsDemo,
      imageLink: "https://keen-mandazi-1c760d.netlify.app/",
      isLazy: true,
      tags: [
        "React",
        "Javascript",
        "Three.js",
        "three/drei",
        "three/fiber",
        "gsap"
      ],
      links: [
        {
          title: "website",
          url: "https://keen-mandazi-1c760d.netlify.app/",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/three-tutorial",
        },
      ],
    },
    {
      title: "Webworker Animation",
      id: 5212024,
      description: `
      A React app that uses a webworker to run a webgl animation on a canvas. 
      Random points spin around the origin as they go towards their final path along 8 lines via interpolation which forms a cube.
      The moving background is done using Vantajs.
      
      `,
      imageSrc: CubeAnimation,
      imageLink: "https://deft-blini-bd2c70.netlify.app/",
      isLazy: true,
      tags: [
        "Webgl",
        "React",
        "Webworker",
      ],
      links: [
        {
          title: "website",
          url: "https://deft-blini-bd2c70.netlify.app/",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/cube-animation",
        },
      ],
    }, 








    {
      title: "Fibonacci Calculator",
      id: 2092025,
      description: `
      A python flask app that serves a webpage and calculates the fibonacci value on another endpoint. Uses pytest on the backend to 
      test if functions work. Uses playwright to test functionality of the frontend app.
      
      `,
      imageSrc: Fibonacci,
      imageLink: "https://github.com/ProgrammerSteve/fibonacci_python_app",
      isLazy: true,
      tags: [
        "Python",
        "Flaskpy",
        "Pytest",
        "Playwright",
        "Javascript",
      ],
      links: [
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/fibonacci_python_app",
        },
      ],
    }, 














    {
      title: "Warp Convert",
      id: 11272023,
      description: `
      A Next.js app that uses serverless functions to process images to resize and change file format. 
      The MantineUI library is used to make components paired with Tailwind CSS. Code was written in Typescript and deployed on Vercel.
  
      `,
      imageSrc: warpConvert,
      imageLink: "https://www.warpconvert.com/",
      isLazy: true,
      tags: [
        "Next.js",
        "React",
        "Typescript",
        "TailwindCSS",
        "MantineUI",
        "sharp",
      ],
      links: [
        {
          title: "website",
          url: "https://www.warpconvert.com/",
        },
      ],
    },
  







    {
      title: "Tflite Obj.Detection",
      id: 3,
      description: `
      An Android App that uses a tensorflow lite model made with the tensorflowlite model maker library on python. 
      Code is writen in Kotlin on Android Studio. 
      The user selects an image and it gets pasted onto the image view with bounding boxes appended on the image. 
      `,
      imageSrc: tfliteAndroid,
      imageLink: "https://github.com/ProgrammerSteve/androidPractice3",
      isLazy: true,
      tags: ["Kotlin", "Tensorflow", "Tensorflowlite", "Android"],
      links: [
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/androidPractice3",
        },
      ],
    },
    {
      title: "d3.js regression plot",
      id: 4,
      description: `
      A Next.js app that uses the d3.js library to construct a scatter plot with a linear regression line. 
      Uses redux to share information between the graph and the points listed. Css is done partly by using 
      stylized components.
      `,
      imageSrc: d3Photo,
      imageLink: "https://d3regressionplot.vercel.app/",
      isLazy: true,
      tags: ["React", "Next.js","Javascript", "d3", "Redux"],
      links: [
        {
          title: "website",
          url: "https://d3regressionplot.vercel.app/",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/d3regressionplot",
        },
      ],
    },
    {
      title: "Nasa Project (Udemy)",
      id: 5,
      description: `
      A React/Express.js app that is deployed in a docker container on an AWS EC2 instance. 
      MongoDB is used to store data and the initial information was pulled/cached from the spaceX 
      rest API. Express router is used for versioning and organizing the code. (EC2 currently down)
      `,
      imageSrc: nasaPhoto,
      imageLink: "http://44.202.0.218:8000/",
      isLazy: true,
      tags: [
        "React",
        "Javascript",
        "React-router",
        "MongoDB",
        "Docker",
        "Express.js",
        "Node.js",
        "AWS EC2",
      ],
      links: [
        {
          title: "website",
          url: "http://44.202.0.218:8000/",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/nodeNasaProject",
        },
      ],
    },
    {
      title: "Smoothies Recipes React Native App",
      id: 6,
      description: `
      A React native app with a postgreSQL database on Supabase. Has a searchbar that makes 
      throttled api calls to the database which is filtered using a database function on Supabase. 
      The pg_trgm extension is used to search data. Uses React native navigation between screens.
      `,
      imageSrc: rnSearchBar,
      imageLink: "https://github.com/ProgrammerSteve/reactNativeSearchBar",
      isLazy: true,
      tags: ["React native","Javascript", "PostgreSQL", "Supabase"],
      links: [
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/reactNativeSearchBar",
        },
      ],
    },
    {
      title: "Nextjs Zayarenovations",
      id: 7,
      description: `
      A Typescript/Next.js app made for a small home renovation business. 
      Some of the libraries used on the site is TailwindCSS and vercel serverless functions. 
      A domain name was bought and set up to connect with the website. Using the Lighthouse plugin, 
      I was able to improve the speed and functionality of the website. Code is in a private repo.
      `,
      imageSrc: nextZaya,
      imageLink: "https://www.zayarenovations.com/",
      isLazy: true,
      tags: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          title: "website",
          url: "https://www.zayarenovations.com/",
        },
      ],
    },
    {
      title: "Drawing App",
      id: 8,
      description: `
      A Nextjs app that utilizes the canvas element for drawing. Stylized components were used for the navigation component. 
      Redux was used to share information from the inputs to the canvas context to allow for customization. 
      The app was deployed using vercel and currently only works on the desktop.
      `,
      imageSrc: drawingPic,
      imageLink: "https://drawingapp-beryl.vercel.app/",
      isLazy: true,
      tags: ["Next.js","React","Javascript", "Canvas", "Redux"],
      links: [
        {
          title: "website",
          url: "https://drawingapp-beryl.vercel.app/",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/Drawingapp",
        },
      ],
    },
    {
      title: "Ionic React App",
      id: 9,
      description: `
      An Ionic application I made for my friend's small renovation business. 
      Written in Typescript, the site has a form that uses regular expressions to validate input from users. 
      The backend is a python flask app that sends the data as an email to the owner. 
      The flask app was deployed as a docker container onto google cloud run. The site itself is deployed on firebase. 
      The app can be made into mobile app for IOS and Android.
      `,
      imageSrc: ionicPic,
      imageLink: "https://zayarenovations.web.app/",
      isLazy: true,
      tags: [
        "Ionic",
        "Typescript",
        "React.js",
        "Flask",
        "Python",
        "Docker",
        "Google Cloud Run",
        "Firebase",
      ],
      links: [
        {
          title: "website",
          url: "https://zayarenovations.web.app/",
        },
        {
          title: "github-frontend",
          url: "https://github.com/ProgrammerSteve/RenovationSite",
        },
        {
          title: "github-backend",
          url: "https://github.com/ProgrammerSteve/RenovationSite-Backend",
        },
      ],
    },
    {
      title: "React Assessment",
      id: 10,
      description: `
      Utilizes the redux-toolkit and the createAsyncThunk function to make an API call to display a 
      searchable list of profile cards. Tags can also be added and then searched through. 
      The point of the asssessment was to test my frontend skills. 
      The site was made to be responsive application that will adjust to window size. 
      A serverless function deployed on vercel acts as the backend.
      `,
      imageSrc: assessmentPic,
      imageLink: "https://programmersteve.github.io/assessment-1/",
      isLazy: true,
      tags: ["React","Javascript", "Redux", "Redux-toolkit", "serverless function"],
      links: [
        {
          title: "website",
          url: "https://programmersteve.github.io/assessment-1/",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/assessment-1",
        },
      ],
    },
    {
      title: "Mandarin HSK1 Training",
      id: 11,
      description: `
      A react typescript app that uses a random number to continously display flash cards for HSK level 1 
      vocabulary. Context is used to share information between components. 
      The backend is an express app that accesses a MongoDB server to retrieve the
       chinese character list. Tailwind CSS is used to style the components
      `,
      imageSrc: mandarinPic,
      imageLink: "https://singular-daffodil-96c4a5.netlify.app/",
      isLazy: true,
      tags: ["React","Typescript", "TailwindCSS", "MongoDB"],
      links: [
        {
          title: "website",
          url: "https://singular-daffodil-96c4a5.netlify.app/",
        },
        {
          title: "github-frontend",
          url: "https://github.com/ProgrammerSteve/chinese_language_training",
        },
        {
          title: "github-backend",
          url: "https://github.com/ProgrammerSteve/charactersbackend",
        },
      ],
    },
    {
      title: "Crwn Clothing Ecommerce App",
      id: 12,
      description: `
      A react app made while following a udemy course. This site utilizes Firebase 
      admin to handle users loging in and out of the site. 
      Firebase firestore is used to hold the data of items listed. 
      Stylized components are used for the styling and Redux/Redux-Saga is used 
      to share information between components. 
      Stripe is used as a payment system to carry out transactions.
      `,
      imageSrc: crwnClothingPic,
      imageLink: "https://teal-pastelito-882485.netlify.app/",
      isLazy: true,
      tags: [
        "Firebase",
        "React",
        "Javascript",
        "Stripe",
        "Redux-saga",
        "Redux",
        "Stylized Components",
      ],
      links: [
        {
          title: "website",
          url: "https://teal-pastelito-882485.netlify.app/",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/crwn-clothing",
        },
      ],
    },
    {
      title: "React Square Game",
      id: 13,
      description: `
      This app has 6 levels where your goal is to get the red circle to reach the yellow square while avoiding
       the purple square. Framer motion library is used to move the div element, useContext shares state 
      between the game and score cards, useEffect/useRef is used to keep track of the time per stage, 
      and the useEffect hook keeps track of any changes to the state in order to progress the game.
      `,
      imageSrc: reactGamePic,
      imageLink: "https://programmersteve.github.io/reactsquaregame/",
      isLazy: true,
      tags: ["React", "Javascript"],
      links: [
        {
          title: "website",
          url: "https://programmersteve.github.io/reactsquaregame/",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/reactsquaregame",
        },
      ],
    },
    {
      title: "Robofriends Testing",
      id: 14,
      description: `
      An app of functional and class components made throughout the udemy course that 
      utilizes jest for unit testing react components with enzyme. The application 
      also makes use of redux and redux-thunk for state management and is a progressive web app. Making
       use of an api call, the profile card information is uploaded and can be searched through 
       using the search bar at the top. The counter button was added only to show how to test it on jest.
      `,
      imageSrc: robofriendsPic,
      imageLink: "https://programmersteve.github.io/robofriends-test/",
      isLazy: true,
      tags: ["Jest", "Unit Testing", "React","Javascript", "Redux-Thunk", "Redux"],
      links: [
        {
          title: "website",
          url: "https://programmersteve.github.io/robofriends-test/",
        },
        {
          title: "github",
          url: "https://github.com/ProgrammerSteve/robofriends-test",
        },
      ],
    },
  ];