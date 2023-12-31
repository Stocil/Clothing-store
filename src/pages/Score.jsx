import { useDispatch, useSelector } from "react-redux";

import { increaseScore, decreaseScore } from "../store/actions";

export function Score() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);

  return (
    <div className="container">
      <p> {score.score} </p>
      <p> </p>
      <button onClick={() => onIncrease(5)}>Увеличить</button>
      <button onClick={() => onDecrease(5)}>Уменьшить</button>
    </div>
  );

  function onIncrease(n) {
    dispatch(increaseScore(n));
  }

  function onDecrease(n) {
    dispatch(decreaseScore(n));
  }
}
