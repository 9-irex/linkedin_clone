import styled from "styled-components";
import PostModal from "./postModal";

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
      <div>
        <Article>
          <SharedActor>
            <a href>
              <img src="./images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="./images/ellipsis-h-solid.svg" alt="__NO__" />
            </button>
          </SharedActor>
          <Description>description</Description>
          <SharedImage>
            <a href>
              <img src="./images/one.jpg" alt="" />
            </a>
          </SharedImage>
          <SocialCounts>
            <li>
              <button>
                <img src="./images/like.png" alt="" />
                <img src="./images/clap.png" alt="" />
                <span>13.4K</span>
              </button>
            </li>
            <li>
              <a href>2 comments</a>
            </li>
          </SocialCounts>
          <Actions>
            <button>
              <img src="./images/likes.svg" alt="" />
              <span>like</span>
            </button>
            <button>
              <img src="./images/comment.svg" alt="" />
              <span>comment</span>
            </button>
            <button>
              <img src="./images/share.svg" alt="" />
              <span>share</span>
            </button>
            <button>
              <img src="./images/send.svg" alt="" />
              <span>send</span>
            </button>
          </Actions>
        </Article>
        <PostModal />
      </div>
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
const Article = styled(commonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: hidden;
  position: relative;
`;

const SharedActor = styled.div`
  padding-right: 4px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  /* background-color: #ff99fb; */

  img {
    object-fit: cover;
    width: 100%;
    height: 400px;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 2px 14px;
  padding: 0px 0;
  border-bottom: 1px solid #595959;
  list-style: none;

  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      display: flex;

      img {
        width: 15px;
        height: 15px;
        margin: 0 3px;
      }
    }
  }
`;

const Actions = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8px;
    margin: 0px 1px;

    img {
      width: 15px;
      height: 15px;
    }

    span {
      text-transform: capitalize;
      font-weight: 500;
      padding-left: 3px;
    }
  }
`;

export default Main;
