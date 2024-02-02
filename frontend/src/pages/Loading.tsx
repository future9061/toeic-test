import styled from 'styled-components';
import MoonLoader from 'react-spinners/MoonLoader';

const Wapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #2e66dd 0%, #639fc8 72.5%, #7ac3ce 100%);
`;

const LoadImg = styled.img`
  margin-top: 20px;
`;

function Loading() {
  return (
    <>
      <Wapper>
        <MoonLoader color="#333333" loading size={45} speedMultiplier={0.5} />
        <LoadImg
          src={`${process.env.PUBLIC_URL}/img/loading.webp`}
          alt="loading"
        />
      </Wapper>
    </>
  );
}

export default Loading;
