import 'bootstrap/dist/css/bootstrap.css'
import ListGroup from './components/ListGroup'


function App() {
  const  items = ["Taiwan", "Japan", "Korea", "China"];
  const heading = "Countries";
  const onSlectItem = (item: string): void => {
    console.log(item);
  }
  return (
  <>
    <ListGroup items={items}  heading={heading} onSlectItem={onSlectItem}/>
  </>
  );
}
export default App;
