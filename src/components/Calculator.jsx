import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import Button from "./Button";
import { useState } from "react";

const Calculator = () => {
  const [number, setNumber] = useState("");

  // plus numbers
  const add = (numberFirst, numberSecond) => {
    let total = Number(numberFirst) + Number(numberSecond);
    setNumber(number + " = " + total);
  };

  //   mines numbers
  const mines = (numberFirst, numberSecond) => {
    let total = Number(numberFirst) - Number(numberSecond);
    setNumber(number + " = " + total);
  };

  //   Division numbers
  const division = (numberFirst, numberSecond) => {
    let total = Number(numberFirst) / Number(numberSecond);
    setNumber(number + " = " + total);
  };

  //   multiple numbers
  const multiple = (numberFirst, numberSecond) => {
    let total = Number(numberFirst) * Number(numberSecond);
    setNumber(number + " = " + total);
  };

  const equal = () => {
    let [numberFirst, operation, numberSecond] = number.split(" ");

    switch (operation) {
      case "+":
        return add(numberFirst, numberSecond);
        break;

      case "-":
        return mines(numberFirst, numberSecond);
        break;

      case "/":
        return division(numberFirst, numberSecond);
        break;

      case "*":
        return multiple(numberFirst, numberSecond);
        break;

      default:
        return operation;
    }
  };

  return (
    <main className="d-flex justify-content-center align-items-center">
      <Wrapper>
        <Screen value={number} />
        <ButtonBox>
          <Button item="Ac" onclick={() => setNumber("")} />
          <Button item="+/-" onclick={() => setNumber(number * "-1")} />
          <Button item="%" onclick={() => setNumber(number / 100)} />
          <Button item="/" onclick={() => setNumber(number + " / ")} />
          <Button item="7" onclick={() => setNumber(number + "7")} />
          <Button item="8" onclick={() => setNumber(number + "8")} />
          <Button item="9" onclick={() => setNumber(number + "9")} />
          <Button item="x" onclick={() => setNumber(number + " * ")} />
          <Button item="4" onclick={() => setNumber(number + "4")} />
          <Button item="5" onclick={() => setNumber(number + "5")} />
          <Button item="6" onclick={() => setNumber(number + "6")} />
          <Button item="-" onclick={() => setNumber(number + " - ")} />
          <Button item="1" onclick={() => setNumber(number + "1")} />
          <Button item="2" onclick={() => setNumber(number + "2")} />
          <Button item="3" onclick={() => setNumber(number + "3")} />
          <Button item="+" onclick={() => setNumber(number + " + ")} />
          <Button item="0" onclick={() => setNumber(number + "0")} />
          <Button item="." onclick={() => setNumber(number + ".")} />
          <Button
            item="="
            onclick={() => {
              setNumber(number + "=");
              equal();
            }}
          />
          <Button
            className="fs-4"
            item="C"
            onclick={() => setNumber(number.slice(0, -2))}
          />
        </ButtonBox>
      </Wrapper>
    </main>
  );
};

export default Calculator;
