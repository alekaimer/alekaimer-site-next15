import Image from "next/image";
import ReactMarkdown from "react-markdown";
import styles from "./page.module.css";

const DATA = {
  data: {
    attributes: {
      title: "Alexandre Kaimer",
      description: `Oi, tudo bem? Pode me chamar de Alê.🙂\n\rSou analista desenvolvedor com foco em plataformas de e-commerce. Também atuo como músico e produtor musical sempre que posso. ♬♪.\n\rAcredito que em qualquer atuação sempre buscamos ir além da técnica. Aprecio o lado artístico de ambas as áreas e isso sempre me incentiva a aprender, buscando a cada passo mais aprendizado, conhecimento e suas diversas aplicações.\n\rSeja bem-vinde!`,
      socialLinks: [
        {
          social: "Github",
          url: "https://github.com/alekaimer",
        },
        {
          social: "Linkedin",
          url: "https://www.linkedin.com/in/alekaimer/",
        },
        {
          social: "Instagram",
          url: "https://www.instagram.com/alekaimer/",
        },
      ],
    },
  },
};

export default function Home() {
  return (
    <>
      <link
        rel="icon"
        href="/icon.jpeg"
        type="image/jpeg"
        sizes="32x32"
      />

      <div className={styles.homeWrapper}>
        <div className={styles.ilustration}>
          <Image src="/leaf.jpeg" alt="Ilustration" width={407} height={649} />
        </div>

        <div className={styles.infos}>
          <div className={styles.avatar}>
            <Image
              src={"https://avatars.githubusercontent.com/u/13948338?v=4"}
              alt={"Avatar de Ale"}
              width={190}
              height={190}
            />
          </div>

          <h1 className={styles.mainTitle}>{DATA?.data?.attributes?.title}</h1>

          <div className={styles.description}>
            <ReactMarkdown className="markdown">
              {DATA?.data?.attributes?.description}
            </ReactMarkdown>
          </div>

          <div className={styles.socialLinks}>
            <ul>
              {DATA?.data?.attributes?.socialLinks?.map((socialLink, index) => (
                <li key={index}>
                  <a
                    href={socialLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialLink.social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
