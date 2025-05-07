import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpinnerLoader from "./components/SpinnerLoader";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div>
      {isLoading ? (
        <SpinnerLoader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
