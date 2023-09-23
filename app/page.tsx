"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { Inter } from "next/font/google";

import { useState } from "react";

import ecommercePhoto from "./ecommerceCMS.jpg";
import frontendEcommercePhoto from "./ecommerceFrontend.jpg";
import tfliteAndroid from "./TfliteAndroidApp.jpg";
import d3Photo from "./d3scatter.jpg";
import nasaPhoto from "./nasa.jpg";
import rnSearchBar from "./searchbar.jpg";
import nextZaya from "./ZayaNextJs.jpg";
import drawingPic from "./drawing.jpg";
import ionicPic from "./ion_app.jpg";
import assessmentPic from "./assessment.jpg";
import mandarinPic from "./hskpic.jpg";
import crwnClothingPic from "./crwn.jpg";
import reactGamePic from "./game.jpg";
import robofriendsPic from "./robots.jpg";
import apexAirElectric from "./apexairelectric.png";
import angularClips from "./angularClips.jpg";

import {
  AiFillFile,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

type Link = {
  title: string;
  url: string;
};

type Project = {
  title: string;
  id: number;
  description: string;
  imageSrc: StaticImageData;
  imageLink: string;
  isLazy: boolean;
  tags: string[];
  links: Link[];
};

const projects: Project[] = [
  {
    title: "Ecommerce CMS",
    id: 0,
    description: `
    A React App that uses apollo-client, apollo-server, 
    graphql, prisma, and planetscale to store and edit items on file. 
    Backend is written with express.js and done so in typescript. Front end uses React, 
    TailwindCSS, webpack and React-router-dom to display pages. Deployed as a docker image on Fly.io
    `,
    imageSrc: ecommercePhoto,
    imageLink: "https://misty-night-9009.fly.dev/",
    isLazy: false,
    tags: [
      "React",
      "Next.js",
      "Next-auth",
      "Apollo-GraphQL",
      "Prisma",
      "Planetscale",
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
        url: "https://misty-night-9009.fly.dev/",
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
    graphql, prisma, and planetscale to display items that can be added to the user's account. 
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
      "Planetscale",
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
    title: "Apex Air Electric",
    id: 2,
    description: `
    An Angular App that uses angular router, forms, tailwind and rxjs. 
    Done as a freelance project in collaboration with a friend for a HVAC company in the local area. The website was deployed on Vercel.

    `,
    imageSrc: apexAirElectric,
    imageLink: "https://apexairelectric.com/",
    isLazy: false,
    tags: ["Angular", "Typescript", "Rxjs", "TailwindCSS", "Angular-router"],
    links: [
      {
        title: "website",
        url: "https://apexairelectric.com/",
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
    title: "Tflite Obj.Detection",
    id: 3,
    description: `
    An Android App that uses a tensorflow lite model made with the tensorflowlite model maker library on python. 
    Code is writen in Kotlin on Android Studio. 
    The user selects an image and it gets pasted onto the image view with bounding boxes appended on the image. 
    `,
    imageSrc: tfliteAndroid,
    imageLink: "https://github.com/ProgrammerSteve/androidPractice3",
    isLazy: false,
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
    isLazy: false,
    tags: ["React", "Next.js", "d3", "Redux"],
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
    isLazy: false,
    tags: [
      "React",
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
    tags: ["React native", "PostgreSQL", "Supabase"],
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
    tags: ["Next.js", "Canvas", "Redux"],
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
    tags: ["React.js", "Redux", "Redux-toolkit", "serverless function"],
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
    A react app that uses a random number to continously display flash cards for HSK level 1 
    vocabulary. Context is used to share information between components. 
    The backend is an express app that accesses a MongoDB server to retrieve the
     chinese character list. Tailwind CSS is used to style the components
    `,
    imageSrc: mandarinPic,
    imageLink: "https://singular-daffodil-96c4a5.netlify.app/",
    isLazy: true,
    tags: ["React", "TailwindCSS", "MongoDB"],
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
     the purple square. React motion library is used to move the div element, useContext shares state 
    between the game and score cards, useEffect/useRef is used to keep track of the time per stage, 
    and the useEffect hook keeps track of any changes to the state in order to progress the game.
    `,
    imageSrc: reactGamePic,
    imageLink: "https://programmersteve.github.io/reactsquaregame/",
    isLazy: true,
    tags: ["React"],
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
    tags: ["Jest", "Unit Testing", "React", "Redux-Thunk", "Redux"],
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

type ImageProps = {
  title: string;
  imageSrc: StaticImageData;
  imageLink: string;
  isLazy: boolean;
};
const ProjectImage = ({ title, imageSrc, imageLink, isLazy }: ImageProps) => {
  return (
    <div className="sm:w-[300px] sm:min-w-[300px] h-full flex flex-col justify-items-center align-center">
      <h1 className="mx-auto font-bold">{title}</h1>
      <div className="relative mx-auto">
        <Link href={imageLink}>
          {isLazy ? (
            <Image
              src={imageSrc}
              alt="ecommerce-website"
              layout="cover"
              loading="lazy"
              style={{
                width: "100%",
                maxWidth: "300px",
                aspectRatio: "1.61",
              }}
            />
          ) : (
            <Image
              src={imageSrc}
              alt="ecommerce-website"
              layout="cover"
              loading="eager"
              style={{
                width: "100%",
                maxWidth: "300px",
                aspectRatio: "1.61",
              }}
            />
          )}
        </Link>
      </div>
    </div>
  );
};

type DescriptionProps = {
  description: string;
};
const ProjectDescription = ({ description }: DescriptionProps) => {
  return (
    <div className="flex-1 md:flex-none px-2">
      <p className="text-xs sm:text-sm font-semibold">Description</p>
      <p className="text-xs lg:text-sm">{description}</p>
    </div>
  );
};
type TagsProps = {
  tags: string[];
  links: Link[];
  keyId: number;
};
const ProjectTagsAndLinks = ({ tags, links, keyId }: TagsProps) => {
  return (
    <div className="flex-1 md:flex-none px-2">
      <p className="text-xs sm:text-sm font-semibold">Tags</p>
      <div className="flex flex-wrap">
        {tags.map((tag, ind) => (
          <span
            key={`tag-${keyId}-${ind}`}
            className="bg-gray-500 text-white rounded-full px-2 text-xs justify-center align-middle mb-1"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-xs sm:text-sm font-semibold">Links</p>
      {links.map((link, ind) => (
        <Link href={link.url} key={`link-${keyId}-${ind}`}>
          <span className="bg-gray-800 text-white rounded-full px-2 text-xs justify-center align-middle mb-1">
            {link.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

type ProjectProps = {
  project: Project;
};
const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div className=" sm:h-[300px] flex flex-col sm:flex-row">
      <ProjectImage
        title={project.title}
        imageSrc={project.imageSrc}
        imageLink={project.imageLink}
        isLazy={project.isLazy}
        key={`image-${project.id}`}
      />
      <div className="h-full grow flex flex-col sm:flex-row md:flex-col ">
        <ProjectDescription
          description={project.description}
          key={`description-${project.id}`}
        />
        <ProjectTagsAndLinks
          tags={project.tags}
          links={project.links}
          keyId={project.id}
          key={`tags-${project.id}`}
        />
      </div>
    </div>
  );
};

const SideBar = () => {
  return (
    <>
      <div className="text-2xl font-bold">
        <div>
          <p>Steven</p>
        </div>
        <div>
          <p>Matthew</p>
        </div>
        <div>
          <p>Bautista</p>
        </div>
      </div>

      <div className="text-xl">
        <div>
          <p>Fullstack</p>
        </div>
        <div>
          <p>Developer</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid align-middle justify-start">
          <a href={"/StevenMBautista.pdf"} target="_blank" download>
            <div className="flex justify-center align-middle border-white border-2 border-solid px-8 py-1 gap-2  w-[150px] cursor-pointer hover:bg-gray-600">
              <div>Resume</div>
              <div className="grid place-items-center">
                <AiFillFile />
              </div>
            </div>
          </a>
        </div>
        <div className="grid align-middle justify-start">
          <a
            href={"https://www.linkedin.com/in/steven-bautista-04b283159/"}
            target="_blank"
          >
            <div className="flex justify-center align-middle border-white border-2 border-solid px-8 py-1 gap-2  w-[150px] cursor-pointer hover:bg-gray-600">
              <div>LinkedIn</div>
              <div className="grid place-items-center">
                <AiOutlineLinkedin />
              </div>
            </div>
          </a>
        </div>
        <div className="grid align-middle justify-start">
          <a href={"https://github.com/ProgrammerSteve"} target="_blank">
            <div className="flex justify-center align-middle border-white border-2 border-solid px-8 py-1 gap-2 w-[150px] cursor-pointer hover:bg-gray-600">
              <div>Github</div>
              <div className="grid place-items-center">
                <AiOutlineGithub />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="flex flex-col align-middle gap-3">
        <div className="text-sm">
          <div>Email</div>
          <div className="text-xs">
            <a href="mailto:Stevenmb1995@gmail.com" className="hover:underline">
              Stevenmb1995@gmail.com
            </a>
          </div>
        </div>
        <div className="text-sm">
          <div>Location</div>
          <div className="text-xs">Los Fresnos, TX</div>
        </div>
        <div className="text-sm">
          <div>Phone</div>
          <div className="text-sm">{`(956)639-0218`}</div>
        </div>
      </div>

      <div className=""></div>
    </>
  );
};

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <main className="flex flex-col md:flex-row h-screen relative">
        {isNavOpen && (
          <div className="fixed bg-[#2f2c2d] z-50 right-0 h-screen w-[200px] min-w-[200px] text-white flex md:hidden flex-col justify-around pl-4">
            <div
              className="fixed right-[20px] top-[18px] cursor-pointer"
              onClick={toggleNav}
            >
              <AiOutlineClose size={30} />
            </div>
            <SideBar />
          </div>
        )}

        <div className="bg-[#211d1f] h-[75px] flex md:hidden  align-middle">
          <div className="flex-1 "></div>
          <div className="flex-1  text-xs sm:text-base grid place-items-center text-center text-white">
            Steven Bautista, Fullstack Developer
          </div>
          <div
            className="flex-1  h-full grid justify-end items-center cursor-pointer"
            onClick={toggleNav}
          >
            <AiOutlineMenu className="mr-8" fill="white" size={25} />
          </div>
        </div>

        <div className="bg-[#211d1f] w-[200px] min-w-[200px] h-full  hidden md:flex text-white flex-col justify-around pl-4">
          <SideBar />
        </div>
        <div className=" bg-[#ded4d4f] grow h-full px-2 lg:px-16 overflow-y-scroll">
          {projects.map((project, ind) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </main>
    </>
  );
}
