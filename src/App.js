import "./App.css";
import Header from "./components/Header";
import ArtAdder from "./components/ArtAdder";
import { useState } from "react";
import Footer from "./components/Footer";
import List from "./components/List";
import Clear from "./components/Clear";
import ClearDisliked from "./components/ClearDisliked";

function App() {
  const [workType, setWorkType] = useState([]);
  const [artpieces, setArtpieces] = useState([
    {
      piece: "Your first idea...",
      dislike: false,
    },
  ]);
  return (
    <div className="App">
      <Header />
      <main>
        <h2 className="choose__h2">Choose a medium to get started </h2>
        <ArtAdder
          setWorkType={setWorkType}
          artpieces={artpieces}
          setArtpieces={setArtpieces}
        />
        <List
          workType={workType}
          artpieces={artpieces}
          setArtpieces={setArtpieces}
        />

        <Clear setArtpieces={setArtpieces} />
        <ClearDisliked setArtpieces={setArtpieces} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
