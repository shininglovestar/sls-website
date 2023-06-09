import tinaMartiniSrc from "../../assets/reviewers/Tina-Marini.jpg"
import avatarSleepSrc from "../../assets/avatar/avatar-sleep.jpeg"
import avatarYesSrc from "../../assets/avatar/avatar-yes.png"
import avatarLoveSrc from "../../assets/avatar/avatar-love-dogs.png"
import avatarLaughSrc from "../../assets/avatar/avatar-laugh.png"
import avatarBurnSrc from "../../assets/avatar/avatar-burning-eyes.jpeg"
import avatarOmgSrc from "../../assets/avatar/avatar-omg.png"
import Card from "../../components/card/Card"
import "./ConsciousnessSessionLp.css"

export default function ConsciousnessSessionLp() {
  return (
    <div className="lp">
      <section className="hp-h-container">
        <small className="lp-h">
          Consciousness Expansion Sessions & Performances
        </small>
        <p className="lp-h1">Transcending fears to superpowers</p>
        <div className="cta">
          <div className="text">Ready to explore higher dimensions?</div>
          <button>Let's Begin</button>
        </div>
      </section>

      <section className="reviews">
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

      <section className="benefits-separator">
        {/* <div className="top">
          <img src={rockEmojiSrc} />
        </div> */}

        <h2>Side effects include...</h2>
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
            <span class="benefit-text">Burst out laughing</span>
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

      <section className="middle-cta">
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
    </div>
  )
}
