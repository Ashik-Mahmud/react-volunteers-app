import React from "react";
import styled from "styled-components";
import useVolunteers from "../../hooks/useVolunteers";
import Loading from "../Loading/Loading";
import Volunteer from "../Volunteer/Volunteer";

const Home = () => {
  const { volunteers, loading } = useVolunteers();
  return (
    <section id="home">
      <div className="container">
        <SectionTitle>
          <div>
            <h1>Volunteers</h1>
            <p>charity is most unique virtue in the world.</p>
          </div>
          <div className="search">
            <input type="search" placeholder="Search Volunteers" />
            <button>Search</button>
          </div>
        </SectionTitle>
        {loading ? (
          <div className="volunteer-container">
            {volunteers.map((volunteer) => (
              <Volunteer key={volunteer._id} {...volunteer} />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};

const SectionTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin: 1rem 0rem;
  .search {
    display: flex;
    align-items: stretch;
    position: relative;
    background-color: var(--white-color);
    padding: 0.3rem;
    border-radius: 50px;
    width: min(100% - 2rem, 400px);
    input {
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 1rem;
      font-family: "poppins";
      width: 100%;
      padding: 0.6rem 1rem;
    }
    button {
      padding: 0rem 1.2rem;
      background-color: var(--primary-color);
      color: var(--white-color);
      font-size: 1rem;
      border: none;
      outline: none;
      font-family: "poppins";
      border-radius: 50px;
    }
  }
`;

export default Home;
