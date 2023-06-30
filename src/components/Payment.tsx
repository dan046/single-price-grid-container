import MonthlyValue from "./MonthlyValue"
import Button from "./ui/Button"

const Payment = () => {
  return (
    <div className="flex w-full flex-col justify-between bg-list-color p-7 text-white">
      <h3 className="text-xl font-bold">Monthly Subscription</h3>
      <MonthlyValue value={29} duration="per month" />
      <p>Full access for less than $1 a day</p>
      <Button text="Sign Up" />
    </div>
  )
}

export default Payment
