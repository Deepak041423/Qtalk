// routes
import Router from "./routes";
// theme
import ThemeProvider from './theme';
// components
import ThemeSettings from './components/settings';

import { useEffect } from "react";
import { useState } from "react";
import StartingLoader from "./StartingLoader";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate an asynchronous loading process
    setTimeout(() => {
      setIsLoading(true);
    }, 4); // Set the timeout for 3 seconds (3000 milliseconds)
  }, []);

  return (

    <div>
    {isLoading ? (
      // Render your main app content when isLoading is true
          <ThemeProvider>
          <ThemeSettings>
            {" "}
            <Router />{" "}
          </ThemeSettings>
        </ThemeProvider>
    ) : (
      // Render the pre-loading page when isLoading is false
      <StartingLoader />
    )}
  </div>
    
  );
}

export default App;
