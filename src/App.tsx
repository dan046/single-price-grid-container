import Content from "./components/Content"
import ListItem from "./components/List"
import Payment from "./components/Payment"
import BottomCard from "./components/ui/BottomCard"
import Card from "./components/ui/Card"

const App = () => {
  return (
    <div className="m-4 md:m-0">
      <Card>
        <Content />
        <BottomCard>
          <Payment />
          <ListItem />
        </BottomCard>
      </Card>
    </div>
  )
}

export default App
