import styles from "@/app/ui/projects.module.css";

function Project({ name }: { name: string }) {
  return (
    <div className={styles.grid_item}>
      <h3>{name}</h3>
      <p> </p>
    </div>
  );
}

export default function Projects() {
  return (
    <div className={styles.projects_container}>
      <h3 className={styles.projects_header}>Projects</h3>

      <div className={styles.grid}>
        <a
          href="git@github.com:anthonyb8/forge.git"
          className={styles.grid_item}
        >
          <div className={styles.grid_item_head}>
            <h3>Forge</h3>
          </div>
          <div className={styles.grid_item_body}>
            <p>
              A CLI tool that helps you to make the intricacaies fo C and C++
              projects.
            </p>
            <p>
              When I first started learning C++ coming from languages like Rust
              and Python I found simply setting up a C++ project to be a pain in
              the next.Forge makes that simplier. Through an interactive CLI
              tool you pick you language, build system, package manager and test
              framework of you choice and Forge builds a Hello World application
              for yyou that can be compiled and run in seconds.
            </p>
          </div>
        </a>
        <a
          href="https://medium.com/@anthonybaxter819/building-an-http-server-in-python-4dd6d18be513"
          className={styles.grid_item}
        >
          <Project name="Pakket" />

          <p>
            A CLI tool that helps you to make the intricacaies fo C and C++
            projects.
          </p>
          <p>
            When I first started learning C++ coming from languages like Rust
            and Python I found simply setting up a C++ project to be a pain in
            the next.Forge makes that simplier. Through an interactive CLI tool
            you pick you language, build system, package manager and test
            framework of you choice and Forge builds a Hello World application
            for yyou that can be compiled and run in seconds.
          </p>
        </a>
      </div>
    </div>
  );
}
