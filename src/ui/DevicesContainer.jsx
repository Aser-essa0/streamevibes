// eslint-disable-next-line react/prop-types
function DevicesContainer({ children }) {
  return (
    <div className="devices gap-5 max-[987px]:m-auto max-[987px]:w-full">
      {children}
    </div>
  );
}

export default DevicesContainer;
