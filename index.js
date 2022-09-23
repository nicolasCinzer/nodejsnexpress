const express = require("express");
const app = express();

app.use(express.json());

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
    icon: "<SiHiveBlockchain />",
    title: "Que es Blockchain?",
    date: "6 de Sep 2022",
    hosted: "local",
  },
  {
    id: "por-que-es-buena-idea-aprender-solidity-para-este-2023",
    topic: "Solidity",
    icon: "<SiSolidity />",
    title: "Por que es buena idea aprender Solidity para este 2023?",
    date: "6 de Sep 2022",
    hosted: "local",
  },
  {
    id: "que-es-bitcoin",
    topic: "Bitcoin",
    icon: "<SiBitcoin />",
    title: "Que es Bitcoin?",
    date: "6 de Sep 2022",
    hosted: "local",
  },
  {
    id: "como-funciona-la-maquina-virtual-de-ethereum",
    topic: "Ethereum",
    icon: "<SiEthereum />",
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

app.post("/api/resources", () => {});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
