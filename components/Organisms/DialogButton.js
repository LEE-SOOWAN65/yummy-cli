import React from "react";
import styled from "styled-components";
import StarIcon from "../atoms/Icon/Star";
import Link from "next/link";
// import Router from "next/router";

export default function FacilButton(props) {
  // const Url = "/ReviewListPage"

  return (
    <Wrapper>
      <Link href="/BuildingMenus">
        <a style={{ textDecoration: "none" }}>
          <BuildingWrapper>
            <BuildingName>한우리집</BuildingName>

            <MenuList>
              <StarIcon style={{ paddingRight: "0.6rem" }} />
              <Text>
                <Average>4.3</Average>
                {/* <button onCick={() => Router.push("/ReviewListPage?id")}> */}

                <MenuName>쌀국수</MenuName>
              </Text>
              {/*</button>*/}
            </MenuList>

            <MenuList>
              <StarIcon style={{ paddingRight: "0.6rem" }} />
              <Text>
                <Average>4.1</Average>
                <MenuName>베트남볶음밥</MenuName>
              </Text>
            </MenuList>
            <MenuList>
              <StarIcon style={{ paddingRight: "0.6rem" }} />
              <Text>
                <Average>3.2</Average>
                <MenuName>소떡소떡</MenuName>
              </Text>
            </MenuList>
          </BuildingWrapper>
        </a>
      </Link>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2.69rem;
  width: 84%;
  align-items: center;
`;
const BuildingWrapper = styled.button`
  width: 32.2rem;
  object-fit: contain;
  border-radius: 2rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(229, 75, 75, 0.3);
  background-color: #ffffff;
  align-items: center;
`;
const BuildingName = styled.div`
  height: 2.4rem;
  padding-top: 1.6rem;
  padding-left: 1.9rem;
  object-fit: contain;
  font-size: 1.4rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  align-items: center;
  padding-left: 2.06rem;
  padding-bottom: 1rem;
`;
const Text = styled.text`
  display: flex;
  flex-direction: row;
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
