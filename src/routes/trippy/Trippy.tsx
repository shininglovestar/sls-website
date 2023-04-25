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
  ZoomOut,
  Zoom,
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
import shaharEynavSrc from "../../assets/reviewers/Shahar-Eynav.jpg"
import annaCarlaSrc from "../../assets/reviewers/Anna-Carla-Searing.jpg"
import amyCabbageSrc from "../../assets/reviewers/Amy-Cabbage.jpg"
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
  const CustomFade = (coefficient = 1) =>
    ({
      // in: {
      //   style: {
      //     transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      //   },
      // },
      out: {
        style: {
          opacity: (p: number) => 1 - p * 3 * coefficient,
        },
      },
    } as Animation)

  const GrowIn = () =>
    ({
      in: {
        style: {
          transform: (p: number) => `scale(${p})`,
        },
      },
      // out: {
      //   style: {
      //     opacity: (p: number) => 1 - p * 3,
      //   },
      // },
    } as Animation)

  return (
    <>
      <div className="trippy-pg">
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={FadeUp}>
              <section className="trippy" id="top-trippy-bg">
                <Background target="top-trippy-bg" />
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
            <Animator animation={batch(Fade(), Sticky())}>
              <p style={{ fontSize: 80, textAlign: "center" }}>
                I've been mentoring groups & individuals for some odd 13 years
                now
              </p>
              <br />
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
              <p style={{ fontSize: 80, textAlign: "center" }}>
                But today I'm especially excited...
              </p>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <div
              style={{
                background: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
                fontSize: 80,
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              Today I'm utterly delighted because...
            </div>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Sticky(), Fade(), ZoomIn())}>
              <span style={{ fontSize: 60 }}>I've finally met YOU!!</span>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
              <p style={{ fontSize: 80, textAlign: "center" }}>
                And you my friend...
              </p>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <div
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "white",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              <Review
                title="Like Shahar has already experienced"
                shortTxt="Brilliant! Had a great experience with Shining. Never thought that only 2 sessions can change your whole world perspective. I highly recommend sessions with Shining. It is such a powerful methodology. Shining is easy going, attentive but yet very practical  you won't regret it!"
                reviewer="Shahar Eynav"
                imgSrc={shaharEynavSrc}
              />
            </div>
          </ScrollPage>

          <ScrollPage>
            <div
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "white",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              <Review
                title="Like Anna already tasted"
                shortTxt="Shining's techniques have really changed my perspective on events that have occurred in my life allowing me to feel so much more confident and excited about the future. Amazing! 👏🏻💖✨"
                reviewer="Anna Carla Searing"
                imgSrc={annaCarlaSrc}
              />
            </div>
          </ScrollPage>

          <ScrollPage>
            <div
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "white",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              <Review
                title="Like Amy already realized..."
                shortTxt="How I used to try and deal/process things seems ludicrous and SLOW now. It’s the first time I truly believe things will actually be different - I've always had hope...but now I've tasted it"
                reviewer="Amy Cabbage"
                imgSrc={amyCabbageSrc}
              />
            </div>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
              <p style={{ fontSize: 80, textAlign: "center" }}>
                You too are part of the divine 🧝‍♀️
              </p>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Sticky(), Fade(), ZoomIn(), MoveOut())}>
              <p style={{ fontSize: 60, textAlign: "center" }}>
                Experiencing itself subjectively ✨
              </p>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "white",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              <Animator animation={batch(FadeIn(), CustomFade(), Sticky())}>
                <p style={{ fontSize: 80, textAlign: "center" }}>🐈</p>
              </Animator>
              <Animator animation={batch(FadeIn(), CustomFade())}>
                <p style={{ fontSize: 80, textAlign: "center" }}>
                  And I'm DYING from curiosity
                </p>
              </Animator>
            </div>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(FadeIn(), CustomFade(), Sticky())}>
              <p style={{ fontSize: 80, textAlign: "center" }}>🙀</p>
            </Animator>
            <Animator
              animation={batch(
                Sticky(),
                Move(600, 600, -600, -600),
                CustomFade(0.5)
              )}
            >
              <p style={{ fontSize: 80 }}>To discover together</p>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(FadeIn(), CustomFade(), Sticky())}>
              <p style={{ fontSize: 80, textAlign: "center" }}>💝</p>
            </Animator>
            <Animator
              animation={batch(
                Sticky(),
                CustomFade(0.5),
                Move(-600, 600, 600, -600)
              )}
            >
              <p style={{ fontSize: 80, textAlign: "center" }}>
                What hidden treasures await us
              </p>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
              <p style={{ fontSize: 80, textAlign: "center" }}>🫣</p>
              <p style={{ fontSize: 80, textAlign: "center" }}>
                In the deepest places you were too afraid to look
              </p>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
              <p style={{ fontSize: 80, textAlign: "center" }}>🦄</p>
              <p style={{ fontSize: 80, textAlign: "center" }}>
                Until this very magical moment
              </p>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "white",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              <Animator animation={CustomFade(2)}>
                <p style={{ fontSize: 80, textAlign: "center" }}>
                  Where we both decided to take our first step together
                </p>
                <p style={{ fontSize: 80, textAlign: "center" }}>👣</p>
              </Animator>
            </div>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
              <p style={{ fontSize: 80, textAlign: "center" }}>
                And dive into the infinite realm of possibilities
              </p>
              <p style={{ fontSize: 80, textAlign: "center" }}>🤯</p>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <section className="trippy" id="middle-trippy-bg">
              <Background target="middle-trippy-bg" />
              <article>
                <small className="drop-in">
                  Dare to dream like the child we all are inside
                </small>
                <h2 className="drop-in two">
                  Take action. Co-create. Manifest. Expand. Play.
                </h2>
                <a
                  className="grow-in"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://api.whatsapp.com/send/?phone=34657409663&text=Hi%20Shining!%20%3A)%20I've%20went%20through%20the%20site%20and%20I'm%20ready%20to%20dwell%20together%20through%20higher%20dimensions%20of%20consciousness%20%3AO"
                >
                  <img src={whatsappSrc} alt="whatsapp" />
                  <span>Go for it!</span>
                </a>
                <span className="trippy-bottom">
                  (or scroll down for more sharings)
                </span>
              </article>
            </section>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </>
  )
}
