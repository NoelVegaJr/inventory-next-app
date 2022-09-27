import Document, { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html>
      <Head />
      <body>
        <div id='backdrop' />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
