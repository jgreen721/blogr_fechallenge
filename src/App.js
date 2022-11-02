import "./App.css";
import { Header, MiddleSection, Section, Footer } from "./components";

var cardData = [
  {
    id: 1,
    title: "Introducing an extensible editor",
    blurb:
      "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
  },
  {
    id: 2,
    title: "Robuts Content Management",
    blurb:
      "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.",
  },
];

var bottomCardData = [
  {
    id: 1,
    title: "Free,open,simple",
    blurb:
      "Blogr is a free andopen source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
  },
  {
    id: 2,
    title: "Powerful tooling",
    blurb:
      "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Section
        cardData={cardData}
        title="Designed for the future"
        img="./images/illustration-editor-desktop.svg"
      />
      <MiddleSection />
      <Section
        cardData={bottomCardData}
        title=""
        img="./images/illustration-laptop-desktop.svg"
      />
      <Footer />
    </div>
  );
}

export default App;
