import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/actions";

const Counter = () => {

    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return (
        <div style={{ textAlign: "center" }}>
        <h1>Contador: {count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    )
}

export default Counter;