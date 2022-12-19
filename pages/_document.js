import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="GPT-3 Writer" key="title"/>
        <meta property="og:description" content="build with buildspace" key="description"/>
        <meta
          property="og:image"
          content="https://narrow-sundae-b0d.notion.site/Try-TourGo-1bfa2c19030b436ea06632fdef499a74"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
