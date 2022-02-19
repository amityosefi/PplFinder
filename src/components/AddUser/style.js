import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
`;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  .user-form-inputs {
    display: grid;
    grid-template-columns: repeat(2, 300px);
    grid-gap: 1rem;
  }
`;
