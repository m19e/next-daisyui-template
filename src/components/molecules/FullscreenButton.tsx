import type { FullScreenHandle } from "react-full-screen"

interface Props {
  handle: FullScreenHandle
}

export const FullScreenButton = ({ handle }: Props) => {
  return (
    <button
      className="flex justify-center items-center w-10 h-10 bg-gradient-to-bl from-white to-[#dcdcfe] rounded-lg border border-gray-600"
      onClick={() => (handle.active ? handle.exit() : handle.enter())}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        {handle.active ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        )}
      </svg>
    </button>
  )
}
