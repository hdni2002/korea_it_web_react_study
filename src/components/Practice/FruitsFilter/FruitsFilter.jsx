import { useEffect, useState } from "react";

const fruits = [
  "apple",
  "Banana",
  "Cherry",
  "Grape",
  "Orange",
  "Strawberry",
  "Watermelon",
];

function FruitsFilter() {
  const [search, setSearch] = useState("");
  const [filterfruit, setFilterFruit] = useState(fruits);

  const searchOnChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filtered = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(search.toLowerCase())
    );
    setFilterFruit(filtered);
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="과일 검색"
        value={search}
        onChange={searchOnChangeHandler}
      />
      <ul>
        {filterfruit.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitsFilter;

// useEffect (() => {
// }, [])
//  input 하나 만들고 ul하나 만들고 input에 과일 이름을 검색해서 필터를 거친뒤에 li로 출력
//  최초에는 전체 과일을 보여주고 내가 입력을 할때마다 즉시 filter를 거쳐서 li로 보여주기
// 대소문자 상관없이
