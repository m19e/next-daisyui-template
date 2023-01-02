import type { ShareTarget } from "@/types"

const shareMap: { [key in ShareTarget]: string } = {
  dev: "Development",
  twitter: "Twitter",
  summer: "Summer",
}

interface Props {
  items: ShareTarget[]
  onSelect: (value: ShareTarget) => void
}

export const ShareSelect = ({ items, onSelect }: Props) => {
  return (
    <select
      className="max-w-xs select select-sm"
      defaultValue={items[0]}
      onChange={(e) => onSelect(e.currentTarget.value as ShareTarget)}
    >
      {items.map((value) => (
        <option key={value} value={value}>
          {shareMap[value]}
        </option>
      ))}
    </select>
  )
}
