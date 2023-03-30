import css from './Orders.module.css';

const Orders = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <div className={css.head}>
        <img src='./logo.png' alt='logo' />
        <span>Orders today</span>
      </div>

      <div className={`grey-container ${css.stat}`}>
        <span>Amount</span>
        <span>$ {groupNumber(4560)}</span>
      </div>
    </div>
  );
};

export default Orders;
