import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='ko-KR'>
        <Head>
          <meta name='keywords' content='pet, pet style, 애견 미용, 애견 미용샵' />
          <meta
            name='description'
            content='애견 미용 플랫폼 Pet Style Book을 통해 애견 미용 스타일과 미용샵을 만나보세요!'
          />
          <meta name='author' content='8dong' />
          <link rel='icon' href='data:,' />
          <link
            rel='stylesheet'
            href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'
          ></link>
          <link
            rel='stylesheet'
            href='https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
