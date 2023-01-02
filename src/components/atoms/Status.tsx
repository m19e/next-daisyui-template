import type { StatusType } from "@/types"
import { Image } from "@/components/atoms/Image"

interface Props {
  type: StatusType
  label: string
}

export const Status = ({ type, label }: Props) => {
  return (
    <div className="flex items-end">
      <Image className="w-4 h-4" src={`/${type}.png`} alt={type} />
      <div className="flex flex-1 justify-end px-0.5 border-b border-gray-400 border-dotted">
        <span className="text-sm tracking-wider leading-4">{label}</span>
      </div>
    </div>
  )
}
