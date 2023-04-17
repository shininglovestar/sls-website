import "./Card.css"

export default function Card({ imgSrc, title, text }: IProps) {
  return (
    <article className="card">
      <div className="card-top">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="card-body">
        <p>{text}</p>
        <div className="card-title">{title}</div>
      </div>
    </article>
  )
}

interface IProps {
  imgSrc: string
  title: string
  text: any
}
