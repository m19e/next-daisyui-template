import Link from "next/link"
import { FullScreen, useFullScreenHandle } from "react-full-screen"

import type { BonusDataProps as Props } from "@/types"
import { FullScreenButton } from "@/components/molecules/FullscreenButton"
import { Image } from "@/components/atoms/Image"

export const Bonus = ({ title, text }: Props) => {
  const handle = useFullScreenHandle()

  return (
    <FullScreen handle={handle}>
      <div className="relative w-full h-screen text-[#615365] bg-[#f9f9fa]">
        <RotateHToV />
        <div className="flex flex-col h-full max-h-full select-none">
          <div className="flex p-2">
            <div className="transition-transform duration-500 -translate-x-full portrait:translate-x-0">
              <div className="flex p-1 bg-white rounded-xl border-2 border-gray-400 font-latego">
                <Image
                  className="w-16 h-16"
                  src="/support-icon.png"
                  alt="サポートアイコン"
                  priority
                />
                <div className="flex flex-col">
                  <SupportLogo />
                  <span className="pt-1 pl-1.5 text-sm font-semibold">
                    {title}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex overflow-x-auto flex-col flex-1 items-center py-1 px-4 max-w-full text-lg leading-8 scrollbar font-koburi"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
            }}
          >
            <span className="max-h-[30em] font-semibold text-justify whitespace-pre-wrap">
              {text}
            </span>
          </div>

          <div className="flex justify-between p-2">
            <Link href="/">
              <a>
                <BackButton />
              </a>
            </Link>
            <FullScreenButton handle={handle} />
          </div>
        </div>
      </div>
    </FullScreen>
  )
}

const RotateHToV = () => {
  return (
    <div className="portrait:hidden flex absolute inset-0 z-10 justify-center items-center w-full h-full bg-[#32373b]">
      <Image
        className="aspect-square h-1/2 suggest-rotate h2v"
        alt="rotate"
        src="/rotation-h2v.png"
      />
    </div>
  )
}

const SupportLogo = () => {
  return (
    <div className="px-1">
      <Image
        className="w-52 h-10 border-b-2 border-gray-600 border-dotted"
        src="/support-event.png"
        alt="サポートイベント"
      />
    </div>
  )
}

const BackButton = () => {
  return (
    <div className="flex justify-center items-center w-10 h-10 bg-gradient-to-bl from-white to-[#dcdcfe] rounded-lg border border-gray-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 76.67452239990234 57.27981185913086"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M37.469.625L1.051 26.68A2.516 2.516 0 0 0 0 28.723v.006a2.52 2.52 0 0 0 1.059 2.048l36.418 25.887a2.513 2.513 0 0 0 2.612.183 2.508 2.508 0 0 0 1.361-2.236V42.428h32.709a2.514 2.514 0 0 0 2.515-2.515l-.001-22.541a2.515 2.515 0 0 0-2.516-2.516H41.451V2.67c0-.94-.53-1.803-1.367-2.237a2.51 2.51 0 0 0-2.615.192z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}
