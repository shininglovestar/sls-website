import cx from "classnames"
import "./Review.css"

export default function Review({
  title,
  shortTxt,
  longTxt,
  color,
  imgSrc,
  reviewer,
}: IProps) {
  return (
    <article className="review">
      <header>
        <h2>{title}</h2>
        <div className={cx("review-ruler", color)} />
      </header>
      <div className="review-body">
        <img src={imgSrc} alt={reviewer} />
        <div>
          <p>
            <em>{shortTxt}</em>
          </p>
          <span className="review-author">{reviewer}</span>
        </div>
      </div>
    </article>
  )
}

interface IProps {
  title: string
  shortTxt: string
  color: "blue" | "orange" | "red"
  longTxt?: string
  imgSrc: string
  reviewer: string
}
