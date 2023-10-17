import React from "react";
import ProjectCard from "./ProjectCard";
import koalou from "./../../Images/koalou3.png";
import octopus from "./../../Images/octopus3.png";
import postit from "./../../Images/postit1.png";
import catgame from "./../../Images/catgame1.png";
import onecomunity from "./../../Images/onecomunity.png";
import imagevault from "./../../Images/imagevault.png";
import icebreaker from "./../../Images/Icebreaker.png";

type Project = {
  imageSrc: string;
  title: string;
  description: string;
  tasks: string[];
  codeLink: string;
  websiteLink?: string; // Make websiteLink optional
};

type WorksProps = {
  theme: string;
};

const projects: Project[] = [
  {
    imageSrc: onecomunity,
    title: "One Community",
    description:
      "A global change organization creating blueprints, tools, tutorials for all aspects of sustainable living and creating",
    tasks: [
      "Maintained, optimized, and managed the in-use software built with Node.js, React.js, Redux, and MongoDB with more than 200 Developers",
      "Increased code efficiency with reusable functions, implemented new features, wrote tests with Jest",
      "Submitted PR reviews, debugging, troubleshooting, and collaborated on Github",
    ],
    codeLink: "https://github.com/OneCommunityGlobal",
  },
  {
    imageSrc: koalou,
    title: "Koalou",
    description: "A startup committed to the mental well-being of children",
    tasks: [
      "Implemented new React components with React and Typescript, with Back End calls and RESTful API endpoints",
      "Implemented a new design when a certain type of user is connected (Children authentication vs Parents authentication)",
      "Built entire responsive Web Pages with React.js and Next.js, using React-Bootstrap for the Web Site, based on Figma web designs",
      "Worked in a technical environment with Graphql, PostgreSQL, Sentry, Google Analytics, collaborated with passion on GitLab",
    ],
    codeLink: "",
    websiteLink: "https://www.koalou.com/zencool",
  },
  {
    imageSrc: icebreaker,
    title: "Ice Breaker",
    description: "A real-time game designed to break the ice with strangers",
    tasks: [
      "Built entire responsive Web Pages with React.js and Next.js, using Tailwind CSS, and Mantine",
      "Built from scratch with Next.js, React, Typescript, Tailwind CSS, Mantine, Prisma, and Playwright, using Agile Methodology",
    ],
    codeLink: "https://github.com/chingu-voyages/v45-tier3-team-51",
  },
  {
    imageSrc: imagevault,
    title: "Image Vault",
    description:
      "A place for museums, archives, and cultural organizations to share their collections",
    tasks: [
      "Took part in meetings and worked in a team with Agile Methodology",
      "Contributed to Developers' best practices for working efficiently as a team with Github and Github Project",
      "Coded my tasks with React and Redux, Typescript, Next.",
    ],
    codeLink: "https://github.com/chingu-voyages/v44-tier3-team-37",
  },
  {
    imageSrc: "Coming Soon",
    title: "Chores App",
    description: "A fun Chores App for parents and their children",
    tasks: [
      "Took part in design meetings to understand the design progress/purposes, and contributing ideas",
      "Contributed to Developers best practices for working efficiently as a team: Tickets Integration, Codebase Structure and File Naming conventions, Branches Nomenclature, Pull request template, PR resolution",
      "Started the code from scratch with React and Redux on the Front and Node.js and PostgreSQL on the back.",
    ],
    codeLink: "https://github.com/LucileTech",
  },
  {
    imageSrc: octopus,
    title: "Octopus",
    description: "An e-commerce for artists and creators",
    tasks: [
      "Coded Back End and Front End from scratch with Node.js, React, JavaScript, Express.js, CSS & HTML",
      "Made designs on Figma and converted them into UI",
      "Integrated React user-facing components with back-end services and responsive design and UX",
      "Built an API with Node.js and tested it with Postman, used MongoDB with Mongoose connectors, implemented admin rights",
      "Deployed with Netlify and hosted the data with MongoDB Atlas",
    ],
    codeLink: "https://github.com/LucileTech/octopus-ecommerce-client",
  },
  {
    imageSrc: postit,
    title: "Post It",
    description: "An organizational Web App",
    tasks: [
      "Coded Back End and Front End from scratch with JavaScript, Axios, Express.js, Node.js, Handlebars.js, MongoDB, CSS & HTML",
      "Implemented the API with MongoDB on MongoDB Cloud",
      "Created the authentication",
      "Deployed with Onrender and hosted the data with MongoDB Atlas",
    ],
    codeLink: "https://github.com/LucileTech/post-it-project",
  },
  {
    imageSrc: catgame,
    title: "The Cat and The Fantastic Forest",
    description: "A browser game",
    tasks: [
      "Coded with JavaScript, CSS & HTML",
      "Handled the animation with Canvas",
      "Deployed with Git Pages",
    ],
    codeLink: "https://github.com/LucileTech/the-cat-and-the-fantastic-forest",
  },
];

const Works: React.FC<WorksProps> = ({ theme }) => {
  return (
    <div className="App-section App-work-section" id="projectsSection">
      <h2 className="Section-title work">MY PROJECTS</h2>
      <div className="container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Works;
