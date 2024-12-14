// eslint-disable-next-line react/prop-types
function SectionContainer({ className, id, children }) {
  return (
    <>
      <div id={id} className={`m-auto w-full overflow-hidden ${className}`}>
        {children}
      </div>
    </>
  );
}

export default SectionContainer;
