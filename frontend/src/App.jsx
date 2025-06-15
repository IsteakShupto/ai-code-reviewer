import Dropdown from "./components/Dropdown";
import Editor from "./components/Editor";
import Header from "./components/Header";
import MarkdownWrapper from "./components/MarkdownWrapper";

function App() {
  return (
    <main className="m-5 rounded-xl shadow-xl">
      <Header />
      <Dropdown />
      <section>
        <Editor />
        <MarkdownWrapper />
      </section>
    </main>
  );
}

export default App;
