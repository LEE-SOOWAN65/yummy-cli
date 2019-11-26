import React from "react";
import styled from "styled-components";
import StarIcon from "../atoms/Icon/Star";

export default function BuildingDialog(props) {
  return (
    <div style={{ paddingBottom: "3.7rem" }}>
      <MenuType>
        <MenuTypeText>{props.MenuType}</MenuTypeText>
      </MenuType>
      <Wrapper>
        <MenuList>
          <MenuLine>
            <StarIcon style={{ paddingRight: "0.6rem" }} />
            <Text>
              <Average>4.3</Average>
              {/* <button onCick={() => Router.push("/ReviewListPage?id")}> */}/
              <MenuName>쌀국수</MenuName>
            </Text>
            {/*</button>*/}
          </MenuLine>

          <MenuLine>
            <StarIcon style={{ paddingRight: "0.6rem" }} />
            <Text>
              <Average>4.1</Average>
              <MenuName>베트남볶음밥</MenuName>
            </Text>
          </MenuLine>
          <MenuLine>
            <StarIcon style={{ paddingRight: "0.6rem" }} />
            <Text>
              <Average>3.2</Average>
              <MenuName>소떡소떡</MenuName>
            </Text>
          </MenuLine>
        </MenuList>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MenuType = styled.div`
  width: 6.63rem;
  display: flex;
  height: 2.12rem;
  border-radius: 1.8rem;
  background-color: #ff6565;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const MenuTypeText = styled.text`
  font-size: 1.4rem;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: #ffffff;
`;

const MenuList = styled.div`
  width: 32.2rem;
  object-fit: contain;
  border-radius: 2rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(229, 75, 75, 0.3);
  background-color: #ffffff;
`;

const MenuLine = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  align-items: center;
  padding-left: 2.06rem;
  padding-bottom: 1rem;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
`;

const Average = styled.text`
  width: 4rem;
  height: 1.7rem;
  object-fit: contain;
  font-size: 1.4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const MenuName = styled.text`
  height: 1.7rem;
  object-fit: contain;
  font-size: 1.4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;
