import { FunctionComponent } from "react";

interface MarkdownProperties {
  text: string;
}

const Markdown: FunctionComponent<MarkdownProperties> = ({ text }) => {
  const lines = text.split("\n");

  const setBold = (text: string) => {
    const splitText = text.split(/(\*\*[^*]+\*\*)/g);

    return splitText.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return lines.map((line) => {
    return <p>{setBold(line)}</p>;
  });
};

export default Markdown;
