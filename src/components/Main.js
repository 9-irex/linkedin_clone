import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <SharedBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button>start apost</button>
        </div>

        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="photo_" />
            <span>photo</span>
          </button>

          <button>
            <img src="/images/video-icon.svg" alt="" />
            <span>video</span>
          </button>

          <button>
            <img src="/images/event-icon.svg" alt="" />
            <span>event</span>
          </button>

          <button>
            <img src="/images/article-icon.svg" alt="" />
            <span>write article</span>
          </button>
        </div>
      </SharedBox>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const commonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%) 0 0 0 rgb(0 0 0 20%);
`;

const SharedBox = styled(commonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      cursor: pointer;

      img {
        width: 18px;
        height: 18px;
        margin-right: 5px;
      }
    }

    &:first-child {
      display: flex;
      align-items: center;
      margin: 8px 16px 0 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        margin-right: 4px;
      }
    }
  }
`;

export default Main;
