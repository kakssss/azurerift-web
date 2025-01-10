import Document, { 
    Html, 
    Head, 
    Main, 
    NextScript 
  } from "next/document";
  
  class MyDocument extends Document {
    render() {
      return (
        <Html lang="zxx">
          <Head>
          <meta name="msvalidate.01" content="B28E5DB58F5EC987A8F2815E452FF811" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/images/favicon.png" className="animated-favicon"></link>
        <style>
          {`
            .animated-favicon {
          animation: rotate 2s linear infinite;
            }
            @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
            }
          `}
        </style>
          </Head>
          <body>
        <Main />
        <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;