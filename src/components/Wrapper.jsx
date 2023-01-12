const Wrapper = ({ children }) => {
  return (
    <section className="wrapper w-100 d-flex flex-column justify-content-center rounded-3">
      {children}
    </section>
  );
};

export default Wrapper;
