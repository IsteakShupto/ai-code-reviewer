let fallBackMarkdown =
  "## 🐾 Intro\n\nMeow~ Hello there, human. 😼 I, the great code reviewing feline, have graced your humble code with my presence. Prepare for my purr-fectly honest assessment! Hiss!\n\n## 🐞 Issues Found\n\n### ✨ Format\n\n*   The code...it's so...*minimal*. Where's the pizzazz? The drama? It's like a plain bowl of milk when it should be a gourmet salmon dinner!\n*   Missing semicolon! I know, I know, javascript forgives you, but a cat never forgets. 😼\n*   No comments? How am I supposed to understand your *human* logic without being spoon-fed?\n\n## 🛠️ Suggestions\n\n```javascript\n// A grand entrance, a dramatic statement!\nconsole.log('Hello, world!'); // Greetings, Earthlings! Bow before my coding prowess.\n```\n\n## 🐾 Final Thoughts\n\nPurr~ Well, it *technically* works, I suppose. But next time, remember to add a little *meow-gic* to your code! Or else... hiss! 😹\n";

import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import { useSelector } from "react-redux";

export default function MarkdownWrapper() {
  const review = useSelector((state) => state.review);

  if (review.loading === true) {
    return (
      <>
        <div className="text-xl text-center py-1">
          Loading <span className="loading loading-spinner loading-xs"></span>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="bg bg-neutral p-3 mt-3">
        <Markdown
          rehypePlugins={[rehypeHighlight]}
          components={{
            h1: ({ children, ...props }) => (
              <h1 className="text-4xl my-3" {...props}>
                {children}
              </h1>
            ),
            h2: ({ children, ...props }) => (
              <h2 className="text-3xl my-3" {...props}>
                {children}
              </h2>
            ),
            h3: ({ children, ...props }) => (
              <h3 className="text-2xl my-3" {...props}>
                {children}
              </h3>
            ),
            p: ({ children, ...props }) => (
              <p className="mb-3" {...props}>
                {children}
              </p>
            ),
            pre: ({ children, ...props }) => (
              <pre className="my-5" {...props}>
                {children}
              </pre>
            ),
            ul: ({ children, ...props }) => (
              <ul className="mb-3" {...props}>
                {children}
              </ul>
            ),
          }}
        >
          {review.text || fallBackMarkdown}
        </Markdown>
      </section>
    </>
  );
}
