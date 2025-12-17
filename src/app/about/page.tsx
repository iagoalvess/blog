export default function AboutPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        About me
      </h1>
      <article className="space-y-4 text-justify">
        <p>
          I live in Belo Horizonte, MG. I&apos;ve always been passionate about sports, 
          having competed in mountain biking and motocross, which taught me a lot about 
          discipline and perseverance.
        </p>
        <p>
          Since a young age, I&apos;ve been fascinated by computers and technology. 
          My natural curiosity and enjoyment in solving problems led me to pursue a career in this field.
        </p>
        <p>
          I&apos;m currently finishing my Information Systems degree at{" "}
          <a
            href="https://ufmg.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Federal University of Minas Gerais (UFMG)
          </a>
          . My academic journey has given me a strong foundation in software development.
        </p>
        <p>
          My professional path began at{" "}
          <strong>Pi Júnior</strong>, where I worked for a year. As a Project Analyst, 
          I had the opportunity to dive into full-stack development with Python, 
          build dashboards, automate processes, manage projects, and interact directly with clients.
        </p>
        <p>
          I then joined <strong>Group Software</strong> as a Software Development Intern, 
          focusing on backend and system integrations. After my internship, I was promoted to 
          Junior Software Engineer, where I continue working on maintaining and evolving complex systems, 
          developing new features, and fixing bugs using technologies like .NET, C#, Java, Spring Boot, and SQL Server.
        </p>
        <p>
          I&apos;m a growing professional who proactively seeks new challenges, constantly improving 
          my skills through study and personal projects.
        </p>
        <p>
          If you&apos;d like to get in touch, find me on{" "}
          <a
            href="https://www.linkedin.com/in/iago-alvess"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          or send me an email at{" "}
          <a href="mailto:iagoalves.voador@gmail.com">
            iagoalves.voador@gmail.com
          </a>
          .
        </p>
        <p>
          Best regards,
          <br />
          Iago
        </p>
      </article>
    </>
  );
}
