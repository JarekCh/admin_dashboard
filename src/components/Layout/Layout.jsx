import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.container}>
      <div>Sidebar</div>
      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className='gradient-red'></div>
          <div className='gradient-orange'></div>
          <div className='gradient-blue'></div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
