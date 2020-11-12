import styled from 'styled-components';

type IStyledIcon = {
  iconUrl: string;
};

export const StyledIcon = styled.div`
  height: 200px;
  width: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props: IStyledIcon) => props.iconUrl};
`;
export const StyledTemp = styled.div`
  font-size: 68px;
  font-weight: bold;
`;
export const StyledCardTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
`;
export const StyledWtCard = styled.div`
  height: 45vh;
  width: 30vh;
  background-color: rgba(119, 119, 119, 0.3);
  border-radius: 25px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const StyledRefreshBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  background-color: rgba(119, 119, 119, 0.3);
  border: none;
`;
export const StyledWTWraper = styled.div`
  height: 60vh;
  width: 100%;
  background-color: rgb(255, 194, 194);
  color: white;
  padding: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
