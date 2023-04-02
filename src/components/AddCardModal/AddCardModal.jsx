import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import css from './AddCardModal.module.css';

const AddCardModal = ({ visible, onClose }) => {
  return (
    <Rodal visible={visible} onClose={onClose}>
      modal
    </Rodal>
  );
};

export default AddCardModal;
