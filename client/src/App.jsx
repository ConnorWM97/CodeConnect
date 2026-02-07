import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://server:3001/api/health")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Health Check:", data);
      })
      .catch((error) => {
        console.error("Error fetching API health:", error);
      });
  }, []);

  return (
    <div>
      <h1>CodeConnect</h1>
      <p>Check the console for API health status.</p>
    </div>
  );
}

export default App;

