import { Editor as MonacoEditor } from "@monaco-editor/react";
import { useDispatch, useSelector } from "react-redux";
import { setCode } from "../features/CodeSlice";

export default function Editor() {
  const language = useSelector((state) => state.language);

  const dispatch = useDispatch();

  const handleEditorChange = (value) => {
    dispatch(setCode(value));
  };

  return (
    <>
      <section>
        <MonacoEditor
          height="40dvh"
          language={language.monacoLang}
          onChange={handleEditorChange}
          defaultLanguage={language.monacoLang}
          value={
            language.monacoLang === "python"
              ? `"""
Select a programming language from the dropdown menu
Write your code here
Choose an animal to review your code
Hit review button to review the code
"""`
              : `/**
* Select a programming language from the dropdown menu
* Write your code here
* Choose an animal to review your code
* Hit review button to review the code
*/`
          }
          theme="vs-dark"
          options={{
            fontFamily: `'Fira Code', monospace`,
            fontSize: `16px`,
          }}
        />
      </section>
    </>
  );
}
