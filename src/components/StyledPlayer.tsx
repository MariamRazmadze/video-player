import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex;
  width: 55vw;
  margin-top: 2rem;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

export const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background-color: #be1a07;
`;

interface ProgressBarFillProps {
  $progress: number;
}
export const ProgressBarFill = styled.div<ProgressBarFillProps>`
  height: 100%;
  background-color: #202a3a;
  width: ${(props) => props.$progress}%;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 20px;
`;
