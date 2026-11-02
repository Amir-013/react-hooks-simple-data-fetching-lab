import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch a dog image.");
        }

        return response.json();
      })
      .then((data) => setDogImage(data.message))
      .catch((fetchError) => setError(fetchError));
  }, []);

  if (error) {
    return <p>Unable to load a dog image.</p>;
  }

  if (!dogImage) {
    return <p>Loading...</p>;
  }

  return <img src={dogImage} alt="A Random Dog" />;
}

export default App;
