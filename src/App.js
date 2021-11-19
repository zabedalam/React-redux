import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./state/index";

function App() {
  const state = useSelector((state) => state.bank);

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actions, dispatch);
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw</button>
    </div>
  );
}

export default App;
