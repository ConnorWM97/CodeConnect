fetch("http://localhost:3001/health")
  .then((response) => response.json())
  .then((data) => {
    console.log("API Health Check:", data);
  })
  .catch((error) => {
    console.error("Error fetching API health:", error);
  });
