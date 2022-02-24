import "./App.css";
import Header from "./components/Header";
import ArtAdder from "./components/ArtAdder";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import List from "./components/List";
import Clear from "./components/Clear";
import ClearDisliked from "./components/ClearDisliked";
import getBackgroundImage from "./utils/utils";

function App() {
  const [workType, setWorkType] = useState([]);
  const [artpieces, setArtpieces] = useState([
    {
      piece: "Your first idea...",
      dislike: false,
    },
  ]);
  const [bgSrc, setBgSrc] = useState({ source: "", nasa: false });
  useEffect(() => {
    getBackgroundImage(setBgSrc);
  }, []);
  return (
    <div className="App">
      <Header bgSrc={bgSrc} />
      <main>
        <div className={bgSrc.nasa ? "directions__div" : null}>
          <h2 className={`choose__h2 ${bgSrc.nasa ? "Nasa__h2" : null}`}>
            Choose a medium to get started{" "}
          </h2>
        </div>
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
      <Footer bgSrc={bgSrc} />
    </div>
  );
}

export default App;
