import React from "react";
import styled from "styled-components";

const Volunteer = ({ title, img }) => {
  return (
    <VolunteerContainer>
      <div className="image">
        <img src={img} alt={title} />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <button>Donate</button>
      </div>
    </VolunteerContainer>
  );
};
const VolunteerContainer = styled.div`
  position: relative;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.08);
  padding: 0.5rem;
  border-radius: 5px;
  .image {
    height: 240px;
    overflow: hidden;
    border-radius: 5px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .info {
    margin: 0.6rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      padding: 0.2rem 0.6rem;
      border: none;
      outline: none;
      background-color: var(--primary-color);
      color: var(--white-color);
      font-family: "poppins";
      font-size: 0.9rem;
      border-radius: 5px;
    }
  }
`;
export default Volunteer;
