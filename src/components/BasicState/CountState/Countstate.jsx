import { useState } from "react";
import CountHeader from "../CountHeader/CountHeader";
import CountButton from "../CountButton/CountButton";
function Countstate() {
  const [count, setCount] = useState(0);
  // let count = 0;
  console.log("counterState 렌더링");
  const onClickHandler = (e) => {
    const num = parseInt(e.target.value);
    setCount(num + count);
    // count += num;
    // console.log(count);
    // document.querySelector("h1").innerText = count
  };
  /**
   * state란 컴포넌트가 가질 수 있는 상태를 의미
   * state를 이용해서 컴포넌트가 랜더링 될때 데이터를 보유하고 ,이 데이터를 업데이트해
   * 화면을 다시 렌더링 할 수 있다
   * useState는 배열을 반환, 첫번째 요소가 현재 상태의 값, 두번째 요소가 상태를 업데이트해주는 함수를 반환
   * 자동 재렌더링 되어 state 데이터들이 변경되면 html에도 자동적으로 반경사항이 적용된다.
   * 상태가 변경되고 새로고침을 할 필요가 없어진다
   *
   */

  return (
    <div>
      <CountHeader count={count} />
      <CountButton value={1} onClick={onClickHandler} text={"+1"}/>
      <CountButton value={-1} onClick={onClickHandler} text={"-1"}/>
    </div>
  );
}

export default Countstate;

/**
 * 리액트의 동작원리
 * 1. 가상돔(Virtual DOM)
 * 우리가 실제로 보는 돔(DOM)이라는 트리구조로 관리, 화면이 변화가 생길때마다 이 실제 돔을 직접 조작하는것은
 * 비효율적이다.
 * 실제 돔의 구조를 그대로 복사한 가상 돔을 메모리에 만듦.
 * 상태(state)에 변화가 생기면, 리액트는 실제 돔을 바로 건드리지 않고 메모리에 새 가상돔을 만든다.
 * 이전 가상돔과 상태가 바뀐 가상돔과 비교하여 무엇이 바뀌었는지 그 차이점(diff)을 빠르게 찾아낸다
 * 찾아낸다음 변경된 부분 만 모아서 실제 돔에게 이 부분만 바뀌었으니 여기만 바꿔봐 라고 최종 업데이트를 요청한다.
 *
 * 2. 컴포넌트
 * 재사용이 가능한 레고블럭
 * 재사용이 가능하도록 ui를 만들고 여러 조각으로 나누어서 관리하는데, 이 조각 하나하나를 컴포넌트라 한다
 * 한 화면은 여러 컴포넌트들을 조합해서 합쳐서 하나의 화면을 만든다
 */
