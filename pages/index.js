import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">Shinigami Tech</h1>
        <p className="description">Just humans socializing with machines.</p>
      </main>

      <footer className="footer">
        Powered by Coffee and Sleepless Nights.{" "}
      </footer>
    </div>
  );
}