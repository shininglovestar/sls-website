import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  ZoomIn,
  Animator,
  Animation,
} from "react-scroll-motion"

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
import Checkbox from "../../components/checkbox/Checkbox"
import Review from "../../components/review/Review"
import natalieJohnsonSrc from "../../assets/reviewers/Natalie-Johnson.jpg"
import tinaMariniSrc from "../../assets/reviewers/Tina-Marini.jpg"
import natalieMariaSrc from "../../assets/reviewers/Natalie-Maria.jpg"
import shiningSrc from "../../assets/shining.jpeg"

export default function Trippy() {
  const handleScrollToBegin = () => {
    document.querySelector("#begin")!.scrollIntoView({
      behavior: "smooth",
    })
  }

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
  const FadeUp = batch(Fade(), Sticky())

  // Make custom animation
  const CustomFade = () =>
    ({
      // in: {
      //   style: {
      //     transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      //   },
      // },
      out: {
        style: {
          opacity: (p) => 1 - p * 3,
        },
      },
    } as Animation)

  return (
    <>
      <Background />

      <div className="trippy">
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={FadeUp}>
              <section className="top" id="trippy-bg">
                <article>
                  <small className="drop-in">
                    Consciousness Expansion Mentorship
                  </small>
                  <h1 className="drop-in two">
                    Transcend fears into superpowers
                  </h1>
                  <div className="grow-in scroll-indicator" />
                </article>
              </section>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Sticky(), Fade(), ZoomIn())}>
              <span style={{ fontSize: 60 }}>✨ Allow yourself to... ✨</span>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Sticky(), MoveIn(0, 400), CustomFade())}>
              <Review
                title="Overcome emotional baggage"
                shortTxt="Shining gave me the strategies needed to hack my mind and overcome my emotional baggage. I am so grateful to come across this strategy to help transform my painful experiences into those I look back on with love and gratitude."
                reviewer="Natalie Johnson"
                imgSrc={natalieJohnsonSrc}
              />
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator
              animation={batch(
                Sticky(),
                FadeIn(),
                CustomFade(),
                MoveIn(100, 0)
              )}
            >
              <Review
                title="Sleep like a baby"
                shortTxt="We had an amazing therapeutic session and for the first time in 6 months I was able to sleep through the night. He is kind, compassionate, patient and very helpful. I would highly recommend him and look forward to more sessions. 5 stars ⭐️"
                reviewer="Tina Marini"
                imgSrc={tinaMariniSrc}
              />
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(StickyIn(), Fade(), MoveIn(-100, 0))}>
              <Review
                title="Unravel anxiety & old programs"
                shortTxt="I admit I was a little skeptical going in, and I'm still not 100% sure what happened but it's clear that he (and his brilliant tools) helped me unravel some old programs that were causing a lot of anxiety in my life for many, many years"
                longTxt="They say the mind is a great servant but a terrible master...
                Shining has a real gift with hacking the mind! I admit I was a little skeptical going in, and I'm still not 100% sure what happened but it is clear that he (and his brilliant tools) helped me unravel some old programs that were causing a lot of anxiety in my life for many, many years and blocking forward momentum. Upon releasing the old energetic blocks I have been experiencing major shifts in all areas of my life - relationships, self belief, work and in my general outlook. I would highly recommend anyone to have a session with Shining. His manner is gentle and his model is simple, yet very powerful for reprogramming the mind to become an ally rather than an adversary. 😊👍
                "
                reviewer="Natalie Maria"
                imgSrc={natalieMariaSrc}
              />
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <span style={{ fontSize: 60 }}>So who am I anyway?</span>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
              }}
            >
              <span style={{ fontSize: 40 }}>
                <Animator animation={batch(MoveIn(-1000, 0), CustomFade())}>
                  Hello there! 👋🏻
                </Animator>
                <Animator animation={batch(MoveIn(1000, 0), CustomFade())}>
                  Nice to meet you 🙋🏻‍♀️
                </Animator>
                <Animator animation={batch(CustomFade())}>
                  <img src={shiningSrc} alt="Shining" className="shining" />
                </Animator>
                <Animator animation={batch(CustomFade())}>
                  <p>I'm Shining :)</p>
                </Animator>
              </span>
            </div>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(FadeIn(), Sticky())}>
              <p style={{ fontSize: 80, textAlign: "center" }}>
                I've been mentoring groups & individuals for some odd 13 years
                now
              </p>
              <br />
            </Animator>
          </ScrollPage>

          {/* <section className="session">
            <h2>Anatomy of a Session</h2>
            <article className="presession">
              <h4>Presession</h4>
              <ul>
                <li>
                  🎥 Send a 5 minute video of your deepest fears & desires
                </li>
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

          <section className="session" id="begin">
            <article>
              <h2>
                Beyond a consciousness quantom jump, which of the following
                would you like to address?
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

              <a
                className="whatsapp-btn gradient-bg"
                target="_blank"
                rel="noopener noreferrer nofollow"
                href="https://wa.me/34657409663?text=Hi%20Shining%20I'd%20like%20to%20talk%20to%20you%20about%20a%20consciousness%expansion%20session"
              >
                <img src={whatsappSrc} alt="whatsapp" />
                Let's Talk!
              </a>
            </article>
          </section> */}
        </ScrollContainer>
      </div>
    </>
  )
}
