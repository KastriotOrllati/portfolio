import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Loader from "../components/loader/loader";
import {
  UilLinkedin,
  UilGithub,
  UilMessage,
  UilArrowRight,
  UilArrowLeft,
  UilAngleDoubleRight,
  UilAngleDoubleLeft,
  UilCalling,
  UilDiscord,
  UilEnvelope,
  UilLocationPoint,
  UilAngleDoubleDown,
  UilReact,
  UilJavaScript,
  UilHtml5,
  UilCss3Simple,
  UilVisualStudio,
  UilSlack,
  UilServer,
  UilBracketsCurly,
  UilBright,
} from "@iconscout/react-unicons";

import Blob from "../components/svg/blob";
import Image from "next/image";
// import Blob from "../public/blob.svg";
import ProfilePic from "../public/bg.png";
import data from "../components/Data/projects";

export default function Home() {
  const [openTab, setOpenTab] = useState([true, true, true]);
  const [projects, setProjects] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = projects.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, projects]);

  return (
    <main className={styles.main}>
      <section className={styles.home}>
        <div className={styles.homeContainer}>
          <div className={styles.homeData}>
            <h1 className={styles.homeTitle}>Hi Im Kastriot.</h1>
            <h3 className={styles.homeSubtitle}>Web Developer</h3>
            <p className={styles.homeDescription}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
              modi.
            </p>
            <a href="#contact" className={styles.button}>
              Contact Me <UilMessage className={styles.buttonIcon} />
            </a>
          </div>
          <div className={styles.homeContent}>
            <div className={styles.socials}>
              <a
                href="linkedin.com/"
                target="_blank"
                className={styles.button2}
              >
                <UilLinkedin size={40} color={"#00567a"} />
              </a>
              <a href="github.com/" target="_blank" className={styles.button2}>
                <UilGithub size={40} color={"#00567a"} />
              </a>
              <a href="github.com/" target="_blank" className={styles.button2}>
                <UilDiscord size={40} color={"#00567a"} />
              </a>
              <a href="" className={styles.button2}></a>
            </div>
            <div className={styles.homeImg}>
              <Blob />
            </div>
          </div>
          <div className={styles.homeScroll}></div>
        </div>
      </section>

      <h1 className={styles.centerTitle}>About me</h1>
      <section className={styles.about}>
        <div className={styles.aboutMe}>
          <div className={styles.imageHolder}>
            <Image
              src={ProfilePic}
              width={200}
              height={200}
              alt="profile picture"
            />
          </div>
          <div className={styles.info}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
              ipsum dolor sit amet consectetur adipisicing elit. At, sint?.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              odit.
            </p>
            <p>
              <h3>
                Education:
                <span>Bachelor CSE -UBT</span>
              </h3>
            </p>
          </div>
        </div>
      </section>
      <h1 className={styles.centerTitle}>Skills</h1>
      <section className={styles.skills}>
        <div className={styles.skillsContainer}>
          <div
            className={styles.frontend}
            onClick={() => {
              let newArr = [...openTab];
              newArr[0] = !openTab[0];
              setOpenTab(newArr);
            }}
          >
            <div className={styles.skillsInfo}>
              <UilBracketsCurly color={"#2c8eb3"} size={25} />
              <h2>Frontend</h2>
              <UilAngleDoubleDown
                size={30}
                color={"#2c8eb3"}
                className={styles.buttonIcon}
              />
            </div>
            <ul className={openTab[0] ? styles.showList : styles.hideList}>
              <li>
                <UilReact color={"#2c8eb3"} /> Reactjs
              </li>
              <li>
                <UilJavaScript color={"#2c8eb3"} /> Javascript
              </li>
              <li>
                <UilHtml5 color={"#2c8eb3"} /> Html5
              </li>
              <li>
                <UilCss3Simple color={"#2c8eb3"} /> Css
              </li>
            </ul>
          </div>
          <div
            className={styles.backend}
            onClick={() => {
              let newArr = [...openTab];
              newArr[1] = !openTab[1];
              setOpenTab(newArr);
            }}
          >
            <div className={styles.skillsInfo}>
              <UilServer color={"#2c8eb3"} size={25} />
              <h2>Backend</h2>
              <UilAngleDoubleDown
                size={30}
                color={"#2c8eb3"}
                className={styles.buttonIcon}
              />
            </div>
            <ul className={openTab[1] ? styles.showList : styles.hideList}>
              <li>
                <UilBracketsCurly color={"#2c8eb3"} /> .NET
              </li>
              <li>
                <UilServer color={"#2c8eb3"} /> PostgreSQL
              </li>
              <li>
                <UilServer color={"#2c8eb3"} />
                MSSQL
              </li>
            </ul>
          </div>
          <div
            className={styles.tools}
            onClick={() => {
              let newArr = [...openTab];
              newArr[2] = !openTab[2];
              setOpenTab(newArr);
            }}
          >
            <div className={styles.skillsInfo}>
              <UilBright color={"#2c8eb3"} size={25} />
              <h2>Tools</h2>
              <UilAngleDoubleDown
                size={30}
                color={"#2c8eb3"}
                className={styles.buttonIcon}
              />
            </div>
            <ul className={openTab[2] ? styles.showList : styles.hideList}>
              <li>
                <UilVisualStudio color={"#2c8eb3"} /> VS Code
              </li>
              <li>
                <UilGithub color={"#2c8eb3"} /> Git
              </li>
              <li>
                <UilGithub color={"#2c8eb3"} /> Github
              </li>
              <li>
                <UilSlack color={"#2c8eb3"} /> Slack
              </li>
            </ul>
          </div>
        </div>
      </section>
      <h1 className={styles.centerTitle}>Projects</h1>
      <section className={styles.portfolioSection}>
        <div className={styles.sectionCenter}>
          {projects.map((project, projectIndex) => {
            const { id, image, name, title, quote } = project;

            let position = "nextSlide";
            if (projectIndex === index) {
              position = "activeSlide";
            }
            if (
              projectIndex === index - 1 ||
              (index === 0 && projectIndex === projects.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={styles[position]} key={id}>
                <img
                  src={image}
                  alt={name}
                  width={350}
                  height={"100%"}
                  className={styles.portfolioImg}
                />
                <div className={styles.projectInfo}>
                  <h4>{name}</h4>
                  <p className="text">{quote}</p>
                  <p className="title">{title}</p>
                </div>
              </article>
            );
          })}

          <div className={styles.prev} onClick={() => setIndex(index - 1)}>
            <UilAngleDoubleLeft size={70} color={"#2c8eb3"} />
          </div>
          <div className={styles.next} onClick={() => setIndex(index + 1)}>
            <UilAngleDoubleRight size={70} color={"#2c8eb3"} />
          </div>
        </div>
      </section>
      <h1 className={styles.centerTitle}> Contact Me</h1>
      <section className={styles.contactMe}>
        <span className={styles.subtitle}> Get in touch</span>

        <div className={styles.contactMeContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.information}>
              <UilCalling />

              <h4 className={styles.contactTitle}>Telephone: </h4>
              <span>0-800-HOTLINE</span>
            </div>
            <div className={styles.information}>
              <UilEnvelope />
              <h3 className={styles.contactTitle}>Email: </h3>
              <span>kastriotorllati@gmail.com</span>
            </div>
            <div className={styles.information}>
              <UilLocationPoint />
              <h3 className={styles.contactTitle}>Location</h3>
              <span>Vushtrri, Kosova 42000</span>
            </div>
          </div>

          <form action="" className={styles.form}>
            <div className={styles.contactInput}>
              <div className={styles.contactContent}>
                <label htmlFor="email" className={styles.contactLabel}>
                  Name
                </label>
                <input type="text" className={styles.contactInput} />
              </div>
              <div className={styles.contactContent}>
                <label htmlFor="email" className={styles.contactLabel}>
                  Email
                </label>
                <input type="text" className={styles.contactInput} />
              </div>
              <div className={styles.contactContent}>
                <label htmlFor="email" className={styles.contactLabel}>
                  Message
                </label>
                <textarea
                  cols={0}
                  rows={4}
                  type="text"
                  className={styles.contactInput}
                />
              </div>
              <a href="#" className={styles.button}>
                Send Message <UilMessage className={styles.buttonIcon} />
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

// <img
//   className={styles.portfolioImg}
//   src={image}
//   alt="imageofprojects"
//   width={500}
//   height={500}
// />
// <h3>SpaceX Graphql</h3>
// <p>
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
//   qui?
// </p>
// <a href="#">
//   BUTTON Demo
//   <UilArrowRight />
// </a>

// <div className={styles.mainContainer}>
//   <div className={styles.leftContainer}>
//     <h1>Kastriot Orllati</h1>
//     <div className={styles.socials}>
//       <div>IN</div>
//       <div>IG</div>
//       <div>Email</div>
//     </div>
//     <div className={styles.imageHolder}>
//       <Image
//         src={profilePic}
//         alt="bg"
//         className={styles.bg}
//         height={400}
//         width={400}
//       />
//     </div>
//   </div>
//   <div className={styles.rightContainer}>
//     <h1>Web developer Lorem ipsum dolor sit amet.</h1>
//     <p>
//       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
//       aut magnam nulla labore cupiditate neque?
//     </p>
//   </div>
// </div>

// <h2>Portfolio</h2>
// <span>Most recent work</span>
