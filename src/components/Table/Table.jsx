const Table = ({ children, duration }) => {
  if (duration === 0) {
    return (
      <div className="error">
        <p>Please, enter a duration greater than zero.</p>
      </div>
    );
  }
  return <table id="result">{children}</table>;
};

export default Table;
