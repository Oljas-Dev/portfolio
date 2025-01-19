import Modal from "../ui/Modal";
import Decoration from "../ui/Decoration";
import { NavBack } from "../Variables/Variables";

function Options() {
  return (
    <Decoration>
      <Decoration.Main>
        <NavBack to="/home" $top="10rem" $display="none" />
        <Modal>
          <Modal.Options mode="options" path="/home" />
        </Modal>
      </Decoration.Main>
    </Decoration>
  );
}

export default Options;
