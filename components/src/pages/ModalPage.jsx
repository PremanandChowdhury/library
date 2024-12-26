import { useState } from "react";

// Local imports
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleVisibility = () => {
    setShowModal(!showModal);
  };

  const actionBar = (
    <div className="flex justify-end">
      <Button primary onClick={handleVisibility}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal
      showModal={showModal}
      handleClose={handleVisibility}
      className={"inset-20"}
      actionBar={actionBar}
    >
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleVisibility}>Open Modal</Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
