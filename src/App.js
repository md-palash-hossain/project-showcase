import ProjectList from "./components/ProjectList";
function App() {
  const projectData = [
    {
      id: "p1",
      image: "gg",
      title: "demo title 1",
      technology: ["html", "tailwind", "react"],
      live: "",
      source: "",
    },
    {
      id: "p2",
      image: "gg",
      title: "demo title 2",
      technology: ["css", "tailwind", "react"],
      live: "",
      source: "",
    },
    {
      id: "p3",
      image: "gg",
      title: "demo title 3",
      technology: ["html", "css", "tailwind"],
      live: "",
      source: "",
    },
    {
      id: "p4",
      image: "gg",
      title: "demo title 4",
      technology: ["html", "css", "react"],
      live: "",
      source: "",
    },
  ];

  return (
    <section>
      <ProjectList dataPoints={projectData} />
    </section>
  );
}

export default App;
