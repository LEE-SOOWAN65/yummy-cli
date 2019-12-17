import React from "react";
import styled from "styled-components";
import StarIcon from "../atoms/Icon/Star";
import Link from "next/link";

export default function BuildingDialog(props) {
  return (
    <div style={{ paddingBottom: "2.4rem" }}>
      <MenuType>
        <MenuTypeText>{`식단${props.number}`}</MenuTypeText>
      </MenuType>
      <Wrapper>
        <MenuList>
          {props.dishes.map((value, index) => (
            <MenuLine key={index}>
              <StarIcon style={{ paddingRight: "0.6rem" }} />
              <Text>
                <Average>
                  {value.avg_rating < 0 ? "-" : value.avg_rating.toFixed(1)}
                </Average>
                <Link
                  href={
                    value.avg_rating < 0
                      ? ""
                      : `/ReviewList?id=${value.id}&name=${value.name}&avg_rating=${value.avg_rating}&buildingName=${props.name}`
                  }
                >
                  <a style={{ textDecoration: "none" }}>
                    <MenuName>{value.name}</MenuName>
                  </a>
                </Link>
              </Text>
            </MenuLine>
          ))}
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

const MenuTypeText = styled.div`
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
  padding: 1rem 2.06rem 1rem;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
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

const MenuName = styled.div`
  font-size: 1.4rem;
  text-align: left;
  color: #000000;
  border-radius: 1.8rem;
`;
