import React from "react";
import styled from "styled-components";
import StarIcon from "../atoms/Icon/Star";
import Link from "next/link";
// import Router from "next/router";

export default function FacilButton(props) {
  // const Url = "/ReviewListPage"
  return (
    <Wrapper>
      <Link href={`/BuildingMenus?id=${props.id}`}>
        <a style={{ textDecoration: "none" }}>
          <BuildingWrapper>
            <BuildingName>{props.name}</BuildingName>
            {props.sikdans
              .slice(0, Math.min(props.sikdans.length, 3))
              .map((value, index) => (
                <MenuList key={index}>
                  <StarIcon style={{ paddingRight: "0.6rem" }} />
                  <Text>
                    <Average>{value.avg_rating.toFixed(1)}</Average>

                    <MenuName>{value.name}</MenuName>
                  </Text>
                </MenuList>
              ))}
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
  border: none;
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
const Text = styled.div`
  display: flex;
  flex-direction: row;
`;
const MenuName = styled.div`
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
const Average = styled.div`
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
