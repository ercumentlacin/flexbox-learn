/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-children-prop */
import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as prism from 'react-syntax-highlighter/dist/esm/styles/prism';

function Markdown({ markdownText, type, children: child }) {
  if (!type) {
    return <ReactMarkdown>{ child }</ReactMarkdown>;
  }

  return (
    <ReactMarkdown
      children={`~~~css\n ${markdownText}`}
      components={{
        code({
          node, inline, className, children, ...props
        }) {
          return !inline ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={prism.dracula}
              language="css"
              startingLineNumber={node.position.start.line}
              {...props}
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
  markdownText: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

Markdown.defaultProps = {
  type: '',
  children: null,
  markdownText: '',
};

export default Markdown;
