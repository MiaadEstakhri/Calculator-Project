import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import Button from "./Button";

const Calculator = () => {
  return (
    <main className="d-flex justify-content-center align-items-center">
      <Wrapper>
        <Screen />
        <ButtonBox>
          <Button item="Ac" />
          <Button item="+/-" />
          <Button item="%" />
          <Button item="/" />
          <Button item="7" />
          <Button item="8" />
          <Button item="9" />
          <Button item="x" />
          <Button item="4" />
          <Button item="5" />
          <Button item="6" />
          <Button item="-" />
          <Button item="1" />
          <Button item="2" />
          <Button item="3" />
          <Button item="+" />
          <Button item="0" />
          <Button item="." />
          <Button item="=" />
          <Button className="fs-4" item="C" />
        </ButtonBox>
      </Wrapper>
    </main>
  );
};

export default Calculator;
