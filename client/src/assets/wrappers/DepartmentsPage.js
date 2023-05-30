import styled from 'styled-components'

const Wrapper = styled.main`
  text-align: center;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
  .bill {
    border-collapse: collapse;
  }
  .display-table td, .bill th {
    border: 1px solid #ddd;
  }
  .display-table tr:hover {background-color: #ddd;}
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    color: var(--red-dark);
    background: var(--red-light);
  }
  .form {
    text-align: left;
  }
`

export default Wrapper
