import Footer from "./Footer";
import Info from "./Info";
import Interest from "./Interest";

function About() {
  return (
    <>
      <section className="section_about">
        <h2 className="about">About</h2>
        <p className="about__text">
          I am a front-end developer with a particular interest in making things
          simple and usable. I try to keep up with best practices and am always
          looking for new things to learn.
        </p>
      </section>
    </>
  );
}

const Card2 = () => (
  <main className="main">
    <section className="main__section">
      <Info />
      <About />
      <Interest />
      <Footer />
    </section>
  </main>
);

export default Card2;
