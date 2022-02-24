import axios from "axios";
import background from "../images/bckgrd.jpg";

const getBackgroundImage = (setBgSrc) => {
  const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
  axios
    .get(baseUrl)
    .then((res) => {
      document.body.style.backgroundImage = `url("${res.data.url}")`;
      setBgSrc({ source: `"${res.data.title}"`, nasa: true });
    })
    .catch(() => {
      document.body.style.backgroundImage = `url("${background}")`;
      setBgSrc({ source: "Eberhard Grossgasteiger", nasa: false });
    });
};

export default getBackgroundImage;
