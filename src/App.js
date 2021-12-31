import "./App.css";
import Header from "./components/header";
import ArtAdder from "./components/artAdder";
import { useState } from "react";
import Footer from "./components/footer";
import List from "./components/list";
import Clear from "./components/clear";
import ClearDisliked from "./components/clearDisliked";

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
