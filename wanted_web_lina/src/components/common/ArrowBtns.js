import styled from "styled-components";

export const PrevArrowBtn = (props) => {
  return (
    <Button type="button" className="prev-arrow" onClick={props.onClick}>
      <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
        <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
      </svg>
    </Button>
  );
};

export const NextArrowBtn = (props) => {
  return (
    <Button type="button" className="next-arrow" onClick={props.onClick}>
      <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
      </svg>
    </Button>
  );
};

export const TopBannerPrevArrow = () => {
  return (
    <TopBannerBtn type="button" className="prev-arrow">
      <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
        <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
      </svg>
    </TopBannerBtn>
  );
};

export const TopBannerNextArrow = () => {
  return (
    <TopBannerBtn type="button" className="next-arrow">
      <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
      </svg>
    </TopBannerBtn>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 10%);
  border: 1px solid #e1e2e3;
  border-radius: 50%;
  z-index: 99;
  background-color: #fff;
  position: absolute;
  svg {
    width: 1em;
    height: 1em;
    color: #767676;
  }
`;

const TopBannerBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  z-index: 10;
  svg {
    width: 1em;
    height: 1em;
    color: #767676;
  }
`;