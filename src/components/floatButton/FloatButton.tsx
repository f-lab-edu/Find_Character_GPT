import styled from "styled-components";
import Link from "next/link";

interface FloatButtonProps {
  buttonDesc: string;
  stageNumber: string;
  clickHandler: (buttonDesc: string) => void;
}

export const FloatButton = ({ buttonDesc, stageNumber, clickHandler }: FloatButtonProps) => {
  return (
    <Link href={stageNumber !== "10" ? `stage/${Number(stageNumber) + 1}` : `/result`}>
      <FloatBtn onClick={() => clickHandler(buttonDesc)}>{buttonDesc}</FloatBtn>
    </Link>
    // {/* disable해주기 useState를 활용하여 loading화면 띄우기 */}
  );
};

const FloatBtn = styled.button`
  width: 130px;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: all 0.2s;
  background: #25809f;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  margin-top: 1em;

  &:hover {
    margin-left: 0px;
    transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -webkit-transform: scale(1.1, 1.1);
    will-change: transform;
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  }
}`;