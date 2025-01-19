import PropTypes from "prop-types";
import { StyledParagraph } from "../Variables/Variables";

function AdaptedParagraph({ item }) {
  return (
    <StyledParagraph>
      <strong>{item.strong}</strong>
      {item.text}
    </StyledParagraph>
  );
}

AdaptedParagraph.propTypes = {
  item: PropTypes.object,
};

export default AdaptedParagraph;
