import "./Checkbox.css"

export default function Checkbox({ children }: IProps) {
  return (
    <label class="form-control">
      <input type="checkbox" name="checkbox" />
      {children}
    </label>
  )
}

interface IProps {
  children: any
}
