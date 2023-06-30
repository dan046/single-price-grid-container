interface Props {
  text: string
}
const Button = ({ text }: Props) => {
  return (
    <button className="w-full rounded-md bg-custom-green p-5 font-bold text-white shadow-md transition-colors hover:bg-green-600">
      {text}
    </button>
  )
}

export default Button
