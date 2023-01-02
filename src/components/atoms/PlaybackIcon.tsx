export const PlaybackIcon = () => {
  return (
    <div
      className="flex overflow-hidden justify-center items-center pl-0.5 w-5 h-5 rounded-full border border-gray-600 cursor-pointer"
      style={{
        background: `linear-gradient(30deg, #d2d4f6 0%, #d2d4f6 47%, #fff 53%, #fff 100%)`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3 h-3 svg-shadow"
      >
        <path
          fillRule="evenodd"
          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}
