import NextImage from "next/image"

import { Image } from "@/components/atoms/Image"
import { Status } from "@/components/atoms/Status"

export const Illust = () => {
  return (
    <div
      className="flex flex-col px-2 w-full bg-white rounded-md border border-gray-500"
      style={{ aspectRatio: "4 / 3" }}
    >
      <div className="inline-flex items-center py-0.5 mb-2 w-full border-b border-gray-400 border-dotted">
        <Image
          className="w-6 h-6"
          src="/illuminate.png"
          alt="イルミネーションスターズ"
        />
        <span className="text-sm font-black font-latego">
          【こころの色、恋のうた】櫻木 真乃
        </span>
      </div>
      <SupportImage />
      <div className="flex flex-col gap-2 mt-0.5 mb-2.5 w-full">
        <div className="flex gap-2 items-end w-full font-black">
          <div className="flex items-end">
            <div className="w-6 h-6 status-label">
              <span className="text-[10px] leading-3 text-white">特訓</span>
            </div>
            <div className="flex px-1 border-b border-gray-400 border-dotted">
              <Image className="w-6 h-6" src="/totsu.png" alt="凸" />
              <Image className="w-6 h-6" src="/totsu.png" alt="凸" />
              <Image className="w-6 h-6" src="/totsu.png" alt="凸" />
              <Image className="w-6 h-6" src="/totsu.png" alt="凸" />
            </div>
          </div>
          <div className="flex flex-1 items-end">
            <div className="w-6 h-6 status-label">
              <span className="text-sm text-white">Lv.</span>
            </div>
            <div className="flex items-end pr-0.5 pl-1 border-b border-gray-400 border-dotted">
              <span className="text-xl leading-6 text-pink-500">80</span>
              <span className="ml-0.5 text-sm leading-4">/80</span>
            </div>
            <div className="flex flex-col flex-1 justify-end">
              <span className="leading-4 text-right text-2xs font-latego">
                あと-
              </span>
              <div className="ml-1 h-3 bg-gradient-to-b from-[#fff242] to-[#fea820] rounded-full border border-gray-600"></div>
            </div>
          </div>
        </div>
        <StatusList />
      </div>
    </div>
  )
}

const SupportImage = () => {
  return (
    <NextImage
      src="/support-card.png"
      alt="support illust"
      width={1280}
      height={720}
      quality={100}
    />
  )
}

const label = {
  vo: "180",
  da: "140",
  vi: "120",
  me: "140",
}

const StatusList = () => {
  const { vo, da, vi, me } = label

  return (
    <div className="grid grid-cols-4 gap-0.5 w-full font-black">
      <Status type="vo" label={vo} />
      <Status type="da" label={da} />
      <Status type="vi" label={vi} />
      <Status type="me" label={me} />
    </div>
  )
}
