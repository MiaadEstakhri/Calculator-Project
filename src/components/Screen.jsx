const Screen = ({ value }) => {
  return (
    <section className="w-100 d-flex justify-content-center align-items-center">
      <input className="w-100  rounded-3 px-2 py-3 h3 m-2" value={value} />
    </section>
  );
};

export default Screen;
