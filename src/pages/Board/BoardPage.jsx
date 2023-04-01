import Board, {
  moveCard,
  moveColumn,
  removeCard,
  addCard,
} from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import useBoard from '../../store/Board';
import './BoardPage.css';

const BoardPage = () => {
  const { board, setBoard } = useBoard();

  const handleColumnMove = (_card, source, destination) => {
    const updatedBoard = moveColumn(board, source, destination);
    setBoard(updatedBoard);
  };

  const handleCardMove = (_card, source, destination) => {
    const updatedBoard = moveCard(board, source, destination);
    setBoard(updatedBoard);
  };

  return (
    <div className='board-container'>
      <span>Trello Board</span>
      <Board
        allowAddColumn
        allowRenameColumn
        allowRemoveCard
        onCardDragEnd={handleCardMove}
        onColumnDragEnd={handleColumnMove}
      >
        {board}
      </Board>
    </div>
  );
};

export default BoardPage;
