/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-children-prop */
import PropTypes from 'prop-types';

// import ReactMarkdown from 'react-markdown';
import ReactMarkdown from 'markdown-to-jsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as prism from 'react-syntax-highlighter/dist/esm/styles/prism';

const Code = ({ className, children }) => {
  const firstIndex = /```css\n/gi.exec(children);
  const lastIndex = /}\n```/gi.exec(children);
  let code;
  let codeBefore;
  let codeAfter;
  if (firstIndex && lastIndex) {
    code = children.slice(firstIndex.index + firstIndex[0].length, lastIndex.index);
    codeBefore = children.slice(0, firstIndex.index);
    codeAfter = children.slice(lastIndex.index + lastIndex[0].length);
    return (
      <>
        <ReactMarkdown>
          {codeBefore}
        </ReactMarkdown>
        <SyntaxHighlighter language="css" style={prism.dracula}>
          {code}
        </SyntaxHighlighter>
        <ReactMarkdown >
          {codeAfter}
        </ReactMarkdown>
      </>
    );
  }
  return (
    <ReactMarkdown>
      {children}
    </ReactMarkdown>
  );
};

function Markdown({ markdownText, type }) {
  if (type) {
    return (
      <SyntaxHighlighter language="css" style={prism.dracula}>
        {markdownText}
      </SyntaxHighlighter>
    );
  }

  return (
    <Code
      className={type}
    >
      {markdownText}
    </Code>
  );
}

Markdown.propTypes = {
  markdownText: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Markdown.defaultProps = {
  type: '',
};

export default Markdown;
