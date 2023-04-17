import modelingWithMarina from "../../assets/modeling-with-marina.jpeg"
// @ts-ignore
import performanceLetTheSunshine from "../../assets/performance-sunshine.mov"

export default function Home() {
  return (
    <main className="main-container">
      <div>
        <img src={modelingWithMarina} alt="modeling with Marina" />
      </div>
      <div></div>
      <div>
        <video width="400" controls autoPlay>
          <source src={performanceLetTheSunshine} type="video/mp4" />
        </video>
      </div>
    </main>
  )
}
