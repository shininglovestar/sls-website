import "./Review.css"

export default function Review({
  title,
  shortTxt,
  longTxt,
  imgSrc,
  reviewer,
}: IProps) {
  return (
    <article className="review">
      <h2>{title}</h2>
      <img src={imgSrc} alt={reviewer} />
      <p>
        <em>{shortTxt}</em>
      </p>
      <small>{reviewer}</small>
    </article>
  )
}

interface IProps {
  title: string
  shortTxt: string
  longTxt?: string
  imgSrc: string
  reviewer: string
}
