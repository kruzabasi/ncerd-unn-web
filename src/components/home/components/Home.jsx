import "./styles.css";
import HomeCarousel from "./Carousel";

export default function Home() {
  return (
    <div className="home-page">
      <HomeCarousel />
      <section className="main-sec">
        <aside className="sec-bit">
          <h3>Directors Statement</h3>
          <p>
            The National Centre for Energy Research and Development, University
            of Nigeria, Nsukka has a vision to build a functional, globally
            comparable and competitive Centre for Energy research and
            Development in Renewable and Alternative Energy Technologies,
            responsive to the challenges of energy and economic needs of Nigeria
            and beyond.
          </p>
          <a href="/about">
            <button className="home-button">Read More</button>
          </a>
        </aside>
        <aside className="sec-bit">
          <h3>Brief History</h3>
          <p>
            The National Centre for Energy Research and Development, University
            of Nigeria, Nsukka was established by an Act of the National
            Assembly in 1980 along with three other research centres. The Centre
            at Nsukka started operation fully in 1982. The Federal Government
            later established Energy Commission of Nigeria through decrees
            number 12 of 1988 and number 19 of 1989 and charged it with the
            legal mandate of supervising the four Centres.
          </p>
          <a href="/about">
            <button className="home-button">Read More</button>
          </a>
        </aside>
        <aside className="sec-bit">
          <h3>Related Projects</h3>
          <ul className="project-list">
            <li>
              Performance Evaluation of a 50 L-Batch Transesterification Reactor
            </li>
            <li>
              Synthesis, Characterization and Comparative analysis of Samples of
              Dye Sensitized Solar cells using natural and synthetic dyes with
              TiO2 films.
            </li>

            <li>
              Characterization of eight (8) woody Biomass samples for fast
              pyrolysis experiments.
            </li>
            <li>Design of a water scrubbing unit for biogas purification.</li>
            <li>
              Study on improvement of onset of flammable gas production from
              pumpkin stalk-cow dung blend
            </li>
          </ul>
          <a href="/projects">
            <button className="home-button">View All</button>
          </a>
        </aside>
      </section>
    </div>
  );
}
