import { useState } from "react";
import "../App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 class=" p-8 text-3xl font-bold underline">
          SmartIntern AI , AI-Powered Internship Recommendation & Allocation
          Platform
        </h1>
        <p class="mt-4 text-lg p-6 bg-blue-500 text-white" >
          The system follows a modular, scalable, and AI-integrated architecture
          designed to support large-scale internship matching for the PM
          Internship Scheme and global private companies. It separates user
          interaction, business logic, and AI intelligence into independent
          layers to ensure performance, explainability, and ease of integration.
        </p>
      </div>
    </>
  );
}

export default App;
