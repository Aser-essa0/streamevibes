function CheckInput() {
  return (
    <div className="inline-flex items-center">
      <div className="relative flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="checked:black-shade-5 checked:black-shade-1 peer h-6 w-6 cursor-pointer appearance-none rounded border border-black-shade-5 shadow transition-all hover:shadow-md"
          id="check"
        />
        <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white opacity-0 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default CheckInput;
