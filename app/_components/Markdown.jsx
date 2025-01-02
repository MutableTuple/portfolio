export const Markdown = ({ text }) => {
  const renderMarkdown = (content) => {
    const lines = content.split("\n");
    const result = [];
    let inList = false;
    let listItems = [];

    const processText = (text) => {
      return text
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>")
        .replace(/`(.+?)`/g, "<code>$1</code>");
    };

    lines.forEach((line, index) => {
      // Handle headings with proper heading hierarchy for SEO
      if (line.startsWith("# ")) {
        result.push(
          <h1
            key={index}
            className="text-3xl font-bold my-6 "
            id={`heading-${index}`}
          >
            {processText(line.slice(2))}
          </h1>
        );
        return;
      }
      if (line.startsWith("## ")) {
        result.push(
          <h2
            key={index}
            className="text-2xl font-semibold my-4 "
            id={`heading-${index}`}
          >
            {processText(line.slice(3))}
          </h2>
        );
        return;
      }
      if (line.startsWith("### ")) {
        result.push(
          <h3
            key={index}
            className="text-xl font-medium my-3"
            id={`heading-${index}`}
          >
            {processText(line.slice(4))}
          </h3>
        );
        return;
      }

      // Enhanced list handling with semantic markup
      if (line.startsWith("- ")) {
        if (!inList) {
          inList = true;
          listItems = [];
        }
        listItems.push(
          <li key={`${index}-li`} className="my-1">
            {processText(line.slice(2))}
          </li>
        );
      } else if (inList) {
        result.push(
          <ul key={`${index}-ul`} className="list-disc ml-6 my-2" role="list">
            {listItems}
          </ul>
        );
        inList = false;
        listItems = [];
      }

      // Enhanced code blocks with language support
      if (line.startsWith("```")) {
        const language = line.slice(3).trim();
        result.push(
          <pre key={index} className="bg-gray-100 p-4 my-4 overflow-x-auto">
            <code className={`language-${language}`}>{line.slice(3)}</code>
          </pre>
        );
        return;
      }

      // Enhanced image handling with lazy loading and proper alt text
      if (line.match(/!\[(.*?)\]\((.*?)\)/)) {
        const [, alt, src] = line.match(/!\[(.*?)\]\((.*?)\)/);
        result.push(
          <img
            key={index}
            src={src}
            alt={alt}
            loading="lazy"
            className="max-w-full h-auto my-4"
            width={800}
            height={600}
          />
        );
        return;
      }

      // Enhanced paragraph handling with proper semantic markup
      if (line.trim() && !inList) {
        result.push(
          <p key={index} className="my-2">
            <span dangerouslySetInnerHTML={{ __html: processText(line) }} />
          </p>
        );
      }
    });

    if (inList && listItems.length > 0) {
      result.push(
        <ul key="final-list" className="list-disc ml-6 my-2" role="list">
          {listItems}
        </ul>
      );
    }

    return result;
  };

  return <div className="prose max-w-none">{renderMarkdown(text)}</div>;
};
