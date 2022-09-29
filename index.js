const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

let courses = [
  {
    url: "https://www.youtube.com/watch?v=gyMwXuJrbJQ",
    title: "Full Stack Blockchain",
    stack: ["solidity", "nextjs", "javascript", "hardhat", "tailwindcss"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit ",
    language: "ingles",
  },
  {
    url: "https://www.youtube.com/watch?v=FAMWIoKvfRs",
    title: "Solidity",
    stack: ["solidity", "hardhat", "tailwindcss"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit ",
    language: "Español",
  },
];

let resources = [
  {
    id: "que-es-blockchain",
    topic: "Blockchain",
    icon: "blockchain",
    title: "Que es Blockchain?",
    date: "6 de Sep 2022",
    hosted: "local",
  },
  {
    id: "por-que-es-buena-idea-aprender-solidity-para-este-2023",
    topic: "Solidity",
    icon: "solidity",
    title: "Por que es buena idea aprender Solidity para este 2023?",
    date: "6 de Sep 2022",
    hosted: "local",
  },
  {
    id: "que-es-bitcoin",
    topic: "Bitcoin",
    icon: "bitcoin",
    title: "Que es Bitcoin?",
    date: "6 de Sep 2022",
    hosted: "local",
  },
  {
    id: "como-funciona-la-maquina-virtual-de-ethereum",
    topic: "Ethereum",
    icon: "ethereum",
    title: "Como funciona la Maquina Virtual de Ethereum?",
    date: "6 de Sep 2022",
    hosted: "external",
  },
];

app.get("/api/resources", (req, res) => {
  res.json(resources);
});

app.get("/api/resources/:id", (req, res) => {
  const id = req.params.id;

  let resource = resources.find((resource) => resource.id === id);

  if (resources) {
    res.json(resource);
  } else {
    res.status(404).end();
  }
});

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.delete("/api/resources/:id", (req, res) => {
  const id = req.params.id;

  resources = resources.filter((resource) => resource.id !== id);

  res.status(204).end();
});

app.post("/api/resources", (req, res) => {
  const resource = req.body;

  console.log(resource);
  if (!resource.title) {
    return res.status(400).json({ error: "No title provided." });
  }

  let id = resource.title.replaceAll(" ", "-").replaceAll(":", "");

  const newResource = {
    id: id,
    topic: resource.topic,
    icon: resource.icon,
    title: resource.title,
    date: new Date().toISOString(),
    hosted: resource.hosted,
  };

  resources = [...resources, newResource];

  res.status(201).json(newResource);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
