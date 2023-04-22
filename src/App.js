import Normalscreen from "./normalscreen";
import Scrollscreen from "./scrollscreen";
function App() {
  const htmlArray = (
    <h1>
      <ul>
        <li>sdfgsdf</li>
        <li>sdfgsdf</li>
        <li>sdfgsdf</li>
        <li>sdfgsdf</li>
      </ul>
    </h1>
  );
  return (
    <>
      <Normalscreen color="grey" text="Screen1" />
      <Normalscreen color="black" text="Screen2" />
      {htmlArray}
      <Normalscreen color="grey" text="Screen3" />
      <Scrollscreen />
      <Normalscreen color="black" text="Screen4" />
      <Normalscreen color="grey" text="Screen5" />
    </>
  );
}

export default App;
