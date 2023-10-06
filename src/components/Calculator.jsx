import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import Button from "./Button";
import { useState } from "react";

const Calculator = () => {
  const [number, setNumber] = useState("");

  const calculate = (numberFirst, operation, numberSecond) => {
    numberFirst = Number(numberFirst);
    numberSecond = Number(numberSecond);

    switch (operation) {
      case "+":
        return numberFirst + numberSecond;
      case "-":
        return numberFirst - numberSecond;
      case "/":
        return numberFirst / numberSecond;
      case "*":
        return numberFirst * numberSecond;
      default:
        return;
    }
  };
  const equal = () => {
    let parts = number.split(" ");
    let result = Number(parts[0]);
    console.log("33333", parts, result);
    for (let i = 1; i < parts.length; i += 2) {
      let operation = parts[i];
      let nextNumber = Number(parts[i + 1]);
      result = calculate(result, operation, nextNumber);
      console.log(
        "aaaa",
        operation,
        "bbbbb",
        nextNumber,
        "cccc",
        (result = calculate(result, operation, nextNumber))
      );
    }

    setNumber(result.toString());
  };

  const pm = () => {
    if (number === "") return;
    let calc = Number(number);
    setNumber((Math.sign(calc) < 0 ? Math.abs(calc) : -calc).toString());
  };

  return (
    <main className="d-flex justify-content-center align-items-center">
      <Wrapper>
        <Screen value={number ? number : 0} />
        <ButtonBox>
          <Button item="Ac" onclick={() => setNumber("")} />
          <Button item="+/-" value={"pm"} onclick={pm} />
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
            onclick={() => setNumber(number.slice(0, -1))}
          />
        </ButtonBox>
      </Wrapper>
    </main>
  );
};

export default Calculator;
