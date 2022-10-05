import ShowBox from "./components/ShowBox";
function App() {
  const projectData = [
    {
      image: "gg",
      title: "demo title",
      technology: ["html", "css", "tailwind", "react"],
      live: "",
      source: "",
    },
  ];

  return (
    <div className="">
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 m-1 ">
        <ShowBox dataPoints={projectData} />
        <ShowBox />
        <ShowBox />
        <ShowBox />
        <ShowBox />
        <ShowBox />
        <ShowBox />
        <ShowBox />
        <ShowBox />
        <ShowBox />
        <ShowBox />
        <ShowBox />
      </section>
    </div>
  );
}

export default App;
