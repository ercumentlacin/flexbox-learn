/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-children-prop */
import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as prism from 'react-syntax-highlighter/dist/esm/styles/prism';

function Markdown({ markdownText, type }) {
  if (type) {
    return (
      <SyntaxHighlighter
        children={markdownText}
        style={prism.dracula}
        language={type}
      />
    );
  }

  return (
    <ReactMarkdown
      children={markdownText}
      components={{
        code({
          node, inline, className, children, ...props
        }) {
          console.log({
            node, inline, className, children: type ? type + children : children, ...props,
          });
          const match = /language-(\w+)/.exec(className || '');

          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={prism.dracula}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
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
