import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cameraState } from "../../store/camera";
import List, { Camera } from "./List";

const Contain = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0px;
  top: 0px;
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const ModalContain = styled.div`
  width: 50%;
  min-width: 300px;
  height: 500px;
  background-color: yellow;
`;
const SelectModal = () => {
  const [camera, setCamera] = useRecoilState(cameraState);
  const [cameraList, setCameraList] = useState<Camera[]>([
    { id: 1, name: "카메라1" },
    { id: 2, name: "카메라2" },
    { id: 3, name: "카메라3" },
  ]);
  return (
    <Contain>
      <ModalContain>
        {camera.id == -1
          ? "확인할 위치를 골라주세요"
          : `현재 선택된 카메라는 ${camera.name}입니다`}
        <List cameraList={cameraList} />
      </ModalContain>
    </Contain>
  );
};

export default SelectModal;
