import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shinigami Tech | Machines deserve to be loved too.</title>
        <meta
          name="description"
          content="Shinigami Tech is a duo of human engineers exploring the deep and awkward world of tech for the sake of socialization."
        />
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
