import { Image } from "@/components/atoms/Image"

export const Colophon = () => {
  return (
    <div className="flex overflow-auto flex-col gap-0.5 px-2 pb-1 mr-0.5 scrollbar">
      <div className="flex gap-1 w-full">
        <div className="flex flex-col flex-1 gap-1">
          <VerticalItem head="なまえ" label="友愛マージナル" />
          <VerticalItem head="サークル" label="カルビ大盛300g" />
        </div>
        <div className="flex justify-center items-center w-28 bg-[#f6f2f6] rounded-md">
          <Image
            className="w-full h-[4.5rem]"
            src="/circle.png"
            alt="サークルロゴ"
            priority
          />
        </div>
      </div>
      <div className="flex items-end">
        <div className="flex justify-center items-center py-0.5 w-[5.5rem] bg-[#9e8ea2] rounded-full">
          <span className="font-semibold leading-3 text-white text-2xs">
            発行者
          </span>
        </div>
        <div className="flex flex-1 items-end pl-2 h-5 border-b-2 border-gray-400 border-dotted">
          <div className="flex justify-between w-full text-xs font-semibold leading-4">
            <span>はっか飴</span>
            <span>
              (
              <a
                className="text-pink-500 link"
                href="https://twitter.com/hakkadr"
                target="_blank"
                rel="noopener noreferrer"
              >
                ＠hakkadr
              </a>
              )
            </span>
          </div>
        </div>
      </div>
      <HorizontalItem head="発行日" label="2022/11/23" />
      <HorizontalItem head="連絡先" label="hakkadr100@gmail.com" />
      <HorizontalItem head="製本" label="株式会社BROS様" />
      <HorizontalItem head="カバー・名刺" label="株式会社グラフィック様" />
      <div className="flex flex-col gap-0.5 items-start my-1">
        <div className="flex justify-center items-center py-0.5 px-2.5 bg-[#9e8ea2] rounded-full">
          <span className="font-semibold leading-3 text-white text-2xs">
            手を貸してくださった方々
          </span>
        </div>
        <div className="flex items-center pl-0.5 w-full h-5 border-b-2 border-gray-400 border-dotted">
          <div className="flex justify-between w-full text-xs font-semibold leading-4">
            <span>ぼさ様</span>
            <span>
              (
              <a
                className="text-pink-500 link"
                href="https://www.pixiv.net/users/76510519"
                target="_blank"
                rel="noopener noreferrer"
              >
                pixiv ID: 76510519
              </a>
              )
            </span>
          </div>
        </div>
        <div className="flex items-center pl-0.5 w-full h-5 border-b-2 border-gray-400 border-dotted">
          <div className="flex justify-between w-full text-xs font-semibold leading-4">
            <span>ミー様</span>
            <span>
              (
              <a
                className="text-pink-500 link"
                href="https://twitter.com/Versas_me"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Versas_me
              </a>
              )
            </span>
          </div>
        </div>
        <div className="flex items-center pl-0.5 w-full h-5 border-b-2 border-gray-400 border-dotted">
          <div className="flex justify-between w-full text-xs font-semibold leading-4">
            <span>わんこ様</span>
            <span>
              (
              <a
                className="text-pink-500 link"
                href="https://twitter.com/ultimate_wanwan"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ultimate_wanwan
              </a>
              )
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className="flex justify-center items-center py-0.5 px-2.5 bg-[#9e8ea2] rounded-full">
          <span className="font-semibold leading-3 text-white text-2xs">
            感想フォーム
          </span>
        </div>
        <div className="flex justify-end items-center w-full h-5 border-b-2 border-gray-400 border-dotted">
          <a
            className="text-xs font-semibold leading-3 text-pink-500 link"
            href="https://marshmallow-qa.com/hakkadr"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://marshmallow-qa.com/hakkadr
          </a>
        </div>
      </div>
    </div>
  )
}

interface ItemProps {
  head: string
  label: string
}

const VerticalItem = ({ head, label }: ItemProps) => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex justify-center items-center py-0.5 w-[5.5rem] bg-[#9e8ea2] rounded-full">
        <span className="font-semibold leading-3 text-white text-2xs">
          {head}
        </span>
      </div>
      <div className="flex items-center px-0.5 w-full h-5 border-b-2 border-gray-400 border-dotted">
        <span className="text-xs font-semibold leading-3">{label}</span>
      </div>
    </div>
  )
}
const HorizontalItem = ({ head, label }: ItemProps) => {
  return (
    <div className="flex items-end">
      <div className="flex justify-center items-center py-0.5 w-[5.5rem] bg-[#9e8ea2] rounded-full">
        <span className="font-semibold leading-3 text-white text-2xs">
          {head}
        </span>
      </div>
      <div className="flex flex-1 items-end px-2 h-5 border-b-2 border-gray-400 border-dotted">
        <span className="text-xs font-semibold leading-4">{label}</span>
      </div>
    </div>
  )
}
