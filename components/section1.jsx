const Section1 = () => {
  return (
    <>
      <section className="flex items-center mx-72 justify-between mt-32">
        <div>
          <h6 className="text-red-600 uppercase text-xs font-bold">
            Let’s shift your business
          </h6>
          <h2 className="font-bold text-5xl mt-5">
            Shift your business <br />
            fast with Shade Pro.
          </h2>
          <p className="mt-5">
            With lots of unique blocks, you can easily build a page <br />
            without coding. Build your next consultancy website within <br />
            few minutes.
          </p>
          <button className="mt-5 bg-indigo-600 text-white py-3 px-4 rounded-md text-sm">
            Get started a project
          </button>
        </div>
        <img src="/images/sec1.png" alt="" />
      </section>
    </>
  );
};

export default Section1;
