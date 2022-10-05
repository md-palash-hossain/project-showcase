import ShowBox from "./ShowBox";
function ProjectList(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 m-1 ">
      {props.dataPoints.map((dataPoint) => (
        <ShowBox
          key={dataPoint.id}
          title={dataPoint.title}
          image={dataPoint.image}
          tech={dataPoint.technology}
        />
      ))}
    </div>
  );
}

export default ProjectList;
