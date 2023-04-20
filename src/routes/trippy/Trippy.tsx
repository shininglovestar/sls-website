import Background from "./Background"
import tinaMartiniSrc from "../../assets/reviewers/Tina-Marini.jpg"
import avatarSleepSrc from "../../assets/avatar/avatar-sleep.jpeg"
import avatarYesSrc from "../../assets/avatar/avatar-yes.png"
import avatarLoveSrc from "../../assets/avatar/avatar-love-dogs.png"
import avatarLaughSrc from "../../assets/avatar/avatar-laugh.png"
import avatarBurnSrc from "../../assets/avatar/avatar-burning-eyes.jpeg"
import avatarOmgSrc from "../../assets/avatar/avatar-omg.png"
import whatsappSrc from "../../assets/whatsapp-96.png"
import Card from "../../components/card/Card"
import "./Trippy.css"
import { Parallax } from "react-scroll-parallax"
import Checkbox from "../../components/checkbox/Checkbox"

export default function Trippy() {
  return (
    <>
      <Background />
      <div className="trippy">
        <section className="top" id="trippy-bg">
          <article>
            <small className="drop-in">Consciousness Expansion Sessions</small>
            <h1 className="drop-in two">Transcend fears into superpowers</h1>
            {/* <div className="cta">
              <div className="text">Ready to explore higher dimensions?</div>
              <button>Let's Begin</button>
            </div> */}
            <button className="grow-in">🛸 Elevate My Soul 🛸</button>
          </article>
        </section>

        <section className="gradient-bg reviews-container">
          {/* <Parallax speed={100}> */}
          <Parallax translateY={["50vh", "0vh"]} speed={-100}>
            <article className="reviews">
              <Card
                title="Tina Martini"
                imgSrc={tinaMartiniSrc}
                text="for the first in 6 months I was able to sleep through the night"
              />
              <Card
                title="Tina Martini"
                imgSrc={tinaMartiniSrc}
                text="for the first in 6 months I was able to sleep through the night"
              />
              <Card
                title="Tina Martini"
                imgSrc={tinaMartiniSrc}
                text="for the first in 6 months I was able to sleep through the night"
              />
            </article>
          </Parallax>
        </section>

        <Parallax translateY={["50vh", "-50vh"]} speed={-10}>
          <section className="benefits-separator">
            {/* <div className="top">
          <img src={rockEmojiSrc} />
        </div> */}

            <h2>Allow Yourself To...</h2>
            <div className="bottom">
              <div className="benefit">
                <div className="img-container">
                  <img src={avatarSleepSrc} alt="Sleep" />
                </div>

                <span class="benefit-text">Sleep better</span>
              </div>
              <div className="benefit">
                <div className="img-container">
                  <img src={avatarYesSrc} alt="Say yes" />
                </div>
                <span class="benefit-text">Say YES to life</span>
              </div>
              <div className="benefit">
                <div className="img-container">
                  <img src={avatarLoveSrc} alt="Love" />
                </div>
                <span class="benefit-text">Drown in love</span>
              </div>
              <div className="benefit">
                <div className="img-container">
                  <img src={avatarLaughSrc} alt="Laugh" />
                </div>
                <span class="benefit-text">Laugh more</span>
              </div>
              <div className="benefit">
                <div className="img-container">
                  <img src={avatarBurnSrc} alt="Burning Energy" />
                </div>

                <span class="benefit-text">Burn with energy</span>
              </div>
              <div className="benefit">
                <div className="img-container">
                  <img src={avatarOmgSrc} alt="Laugh" />
                </div>
                <span class="benefit-text">Mind = Blown</span>
              </div>
            </div>
          </section>
        </Parallax>

        <section className="middle-cta gradient-bg">
          <div className="cta">
            <div className="text">Ready to explore higher dimensions?</div>
            <button>Let's Begin</button>
          </div>
        </section>

        <section className="session">
          <h2>Anatomy of a Session</h2>
          <article className="presession">
            <h4>Presession</h4>
            <ul>
              <li>🎥 Send a 5 minute video of your deepest fears & desires</li>
              <li>📱 5 Minute Compatibility vid-call</li>
              <li>💸 Secure online payment</li>
            </ul>
          </article>

          <article className="actual-session">
            <h4>Session</h4>
            <ul>
              <li>🤝 Greetings & Settings Parameters</li>
              <li>🛸 Ascending to a higher dimension together</li>
              <li>🧝‍♀️ Program your being & outcomes on higher planes</li>
              <li>🌎 Descending back to our shared 3 dimensional reality</li>
              <li>🧚‍♀️ Integration</li>
            </ul>
          </article>

          <article className="post-session">
            <h4>Postsession followup</h4>
            <ul>
              <li>😌 Solidifying your higher self</li>
              <li>🤔 Where do we go from here</li>
            </ul>
          </article>
        </section>

        <section className="reviews gradient-bg">
          <Card
            title="Tina Martini"
            imgSrc={tinaMartiniSrc}
            text="for the first in 6 months I was able to sleep through the night"
          />
          <Card
            title="Tina Martini"
            imgSrc={tinaMartiniSrc}
            text="for the first in 6 months I was able to sleep through the night"
          />
          <Card
            title="Tina Martini"
            imgSrc={tinaMartiniSrc}
            text="for the first in 6 months I was able to sleep through the night"
          />
        </section>

        <section className="session">
          <article>
            <h2>
              Beyond a consciousness quantom jump, which of the following would
              you like to address?
            </h2>

            <form className="checkbox-form">
              <Checkbox>Allergy</Checkbox>
              <Checkbox>Anxiety / panic attacks</Checkbox>
              <Checkbox>Depression</Checkbox>
              <Checkbox>Sleep</Checkbox>
              <Checkbox>Money</Checkbox>
              <Checkbox>Peak performance & skills</Checkbox>
              <Checkbox>Self talk & inner voice</Checkbox>
              <Checkbox>Trauma</Checkbox>
              <Checkbox>Physical / chronic pain</Checkbox>
              <Checkbox>Habits / addictions</Checkbox>
              <Checkbox>Grief / loss / breakup</Checkbox>
              <Checkbox>Anger</Checkbox>
              <Checkbox>Fears & phobias</Checkbox>
              <Checkbox>None of the above</Checkbox>
            </form>

            {/* <button className="whatsapp-btn">
              <img src={whatsappSrc} alt="whatsapp" />
              Let's talk!
            </button> */}
            <a
              className="whatsapp-btn gradient-bg"
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://wa.me/34657409663?text=Hi%20Shining%20I'd%20like%20to%20talk%20to%20you%20about%20a%20consciousness%20expanding%20session"
            >
              <img src={whatsappSrc} alt="whatsapp" />
              Let's Talk!
            </a>
          </article>
        </section>
      </div>
    </>
  )
}
