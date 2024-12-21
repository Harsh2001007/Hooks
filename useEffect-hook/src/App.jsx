import { use } from "react";
import { useEffect, useState } from "react";

function App() {
  const [resourceType, setResourceType] = useState("Posts");
  const [testState, setTestState] = useState("");
  const [apiData, setApiData] = useState([]);
  const [windowWidth, setWindowwidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("Bye world");
  }, [testState]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((resp) => resp.json())
      .then((json) => setApiData(json));
  }, [resourceType]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowwidth(window.innerWidth);
    console.log("changing");
  };
  return (
    <>
      <div>{windowWidth}</div>
      <div>
        <button onClick={() => setResourceType("Posts")}>Posts</button>
        <button onClick={() => setResourceType("Users")}>Users</button>
        <button onClick={() => setResourceType("Comments")}>Comments</button>
        <button onClick={() => setTestState("Like")}>Like</button>
        <button onClick={() => setTestState("Dislike")}>Dislike</button>
      </div>
      <h1>{resourceType}</h1>
      <h1>{testState}</h1>
      {apiData.map((item, index) => (
        <pre key={index}>{JSON.stringify(item)}</pre>
      ))}
    </>
  );
}

export default App;
