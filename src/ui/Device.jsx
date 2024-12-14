// eslint-disable-next-line react/prop-types
function Device({ name, children }) {
  return (
    <div
      className="card h-[230px] rounded-[10px] p-10 max-sm:p-5"
      style={{
        backgroundImage: "linear-gradient(208deg, #e5000057 -95%, #0f0f0f 46%)",
      }}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-[54px] w-[54px] items-center justify-center rounded-[10px] border border-black-shade-4 bg-black-shade-2">
          {children}
        </span>
        <p className="text-xl font-semibold text-white">{name}</p>
      </div>
      <p className="mt-6">
        StreamVibe is optimized for both Android and iOS smartphones. Download
        our app from the Google Play Store or the Apple App Store
      </p>
    </div>
  );
}

export default Device;
