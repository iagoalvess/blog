import Translate from "../../components/Translate";

export default function AboutPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        <Translate id="about.title" />
      </h1>
      <article className="space-y-4 text-justify">
        <p>
          <Translate id="about.p1" />
        </p>
        <p>
          <Translate id="about.p2" />
        </p>
        <p>
          <Translate id="about.p3" /> {" "}
          <a
            href="https://ufmg.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            (UFMG)
          </a>
        </p>
        <p>
          <Translate id="about.p4" />
        </p>
        <p>
          <Translate id="about.p5" />
        </p>
        <p>
          <Translate id="about.p6" />
        </p>
        <p>
          <Translate id="about.p7" /> {" "}
          <a
            href="https://www.linkedin.com/in/iago-alvess"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          <a href="mailto:iagoalves.voador@gmail.com">iagoalves.voador@gmail.com</a>
        </p>
        <p>
          <Translate id="about.signoff" />
        </p>
      </article>
    </>
  );
}
