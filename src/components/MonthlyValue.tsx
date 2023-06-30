interface Props {
  value: number
  duration: string
}
const MonthlyValue = ({ value, duration }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <h3 className="text-3xl font-bold">${value}</h3>
      <small className="font-semibold opacity-70">{duration}</small>
    </div>
  )
}

export default MonthlyValue
