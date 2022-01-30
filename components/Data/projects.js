import CrwnClothing from "../../public/projects/crwnclothing.png";
import SpaceX from "../../public/projects/spaceX1.png";
import UberX from "../../public/projects/uberXclone.png";

const projects = [
  {
    id: 1,
    image: CrwnClothing,
    name: "Crwn Clothing",
    title: "Serverless E-commerce",
    link: "https://github.com/KastriotOrllati/crwn-clothing",
    quote:
      "Build an E-commerce using firebase/firestore authentication. Reactjs/Redux",
  },
  {
    id: 2,
    image: SpaceX,
    name: "SpaceX",
    title: "Graphql Api",
    link: "https://space-x-inky.vercel.app/",
    quote:
      "Build a miniproject using SpaceX GraphQL Api and showing some launches. Built with NextJS and ApolloClient",
  },
  {
    id: 3,
    image: UberX,
    name: "UberX mini clone",
    title: "Mapbox api",
    link: "https://github.com/KastriotOrllati/uber-clone",
    quote:
      "Using mapbox api I made a mini uberX clone with nextjs and tailwind styled components",
  },
];

export default projects;
