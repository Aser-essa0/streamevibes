import useWidth from "../hooks/useWidth";

// eslint-disable-next-line react/prop-types
function SectionHeader({ title, paragraph, children, className }) {
  const width = useWidth();
  return (
    <>
      <div
        className={`mb-[60px] flex items-center justify-between max-sm:mb-10 max-sm:flex-col max-sm:items-baseline ${className}`}
      >
        <div className="flex flex-col gap-2.5 pr-[20px] max-sm:p-0">
          <h3 className="text-[28px] font-bold leading-[150%] text-white max-lg:text-2xl">
            {title}
          </h3>
          {paragraph && (
            <span className="leading-[150%] max-lg:text-sm">
              {width >= 768 ? paragraph : paragraph}
            </span>
          )}
        </div>
        {children}
      </div>
    </>
  );
}

export default SectionHeader;
