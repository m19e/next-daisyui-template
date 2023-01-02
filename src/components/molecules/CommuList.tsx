import Link from "next/link"

import { bonusDict } from "@/consts"
import { PlaybackIcon } from "@/components/atoms/PlaybackIcon"

export const CommuList = () => {
  return (
    <div className="flex flex-col gap-1 px-2 w-full">
      <CommuItem link="/omake/1" label={bonusDict["1"]["title"]} />
      <CommuItem link="/omake/2" label={bonusDict["2"]["title"]} />
    </div>
  )
}
interface ItemProps {
  link: string
  label: string
}

const CommuItem = ({ link, label }: ItemProps) => {
  return (
    <div className="flex gap-2 items-center p-1 bg-gray-100 rounded-md">
      <Link href={link}>
        <a>
          <PlaybackIcon />
        </a>
      </Link>
      <span className="font-semibold leading-3 text-2xs">{label}</span>
    </div>
  )
}
