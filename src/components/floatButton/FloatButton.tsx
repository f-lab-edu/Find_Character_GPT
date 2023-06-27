import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FloatButtonProps {
  buttonDesc: string;
  buttonIndex: number;
  stageNumber: string;
  clickHandler: (buttonState: string) => void;
  buttonState: string;
}

export const FloatButton = ({ buttonDesc, stageNumber, clickHandler, buttonState }: FloatButtonProps) => {
  const router = useRouter();

  const handlerButtonClick = () => {
    clickHandler(buttonState);
    router.push(stageNumber !== "10" ? `stage/${Number(stageNumber) + 1}` : `/result`);
  };

  return <FloatBtn onClick={handlerButtonClick}>{buttonDesc}</FloatBtn>;
};

const FloatBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding: 40px;
  font-weight: 600;
  font-size: 24px;
  color: #fff;
  border-radius: 15px;
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
  @media (max-width: 700px) {
    height: 30px;
    padding: 25px;
    font-size: 16px;
  }
`;
