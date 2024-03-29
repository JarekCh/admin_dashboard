import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import css from './AddCardModal.module.css';
import { useState } from 'react';

const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
  const customStyles = {
    background: 'rgb(58 58 58)',
    padding: '20px',
    width: '50%',
    top: '-3rem',
    height: 'fit-content',
    maxWidth: '40rem',
  };
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  return (
    <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
      <div className={css.container}>
        {/* card title */}
        <div>
          <span className={css.label}>Card Title</span>
          <input
            type='text'
            className={css.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/* card text */}
        <div>
          <span className={css.label}>Detail</span>
          <textArea
            rows={10}
            className={css.input}
            value={detail}
            type='text'
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
        {/* card button */}
        <button
          disabled={title === '' && detail === ''}
          className={css.saveButton}
          onClick={() => {
            handleCardAdd(title, detail);
            setDetail('');
            setTitle('');
          }}
        >
          Add
        </button>
      </div>
    </Rodal>
  );
};

export default AddCardModal;
