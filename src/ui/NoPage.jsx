import styled from "styled-components";

const StyledNoPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100dvh;
  background: linear-gradient(
    45deg,
    var(--color-mgradient1),
    var(--color-mgradient2)
  );

  p {
    font-size: 5rem;
    text-align: center;
  }

  a:hover {
    color: var(--color-links);
  }
`;

function NoPage() {
  return (
    <StyledNoPage>
      <p>
        Sorry, this Page was not found, but you are <br />
        still welcomed on a <a href="/home">Home</a> page 😊
      </p>
    </StyledNoPage>
  );
}

export default NoPage;
