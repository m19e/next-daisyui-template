import { useState } from "react"

import type { OpenBonusProps } from "@/types"
import { Colophon } from "@/components/molecules/Colophon"
import { CommuList } from "@/components/molecules/CommuList"
import { ModeSelect } from "@/components/molecules/ModeSelect"
import { Description } from "@/components/atoms/Description"
import { Postscript } from "@/components/atoms/Postcript"

const Mode = {
  description: "ページ説明",
  postscript: "あとがき",
  bonus: "おまけ小説",
  colophon: "奥付",
} as const
type ModeKey = keyof typeof Mode
const ModeList = Object.keys(Mode) as ModeKey[]

export const Contents = ({ openBonus }: OpenBonusProps) => {
  const [mode, setMode] = useState<ModeKey>(openBonus ? "bonus" : "description")
  const items = ModeList.map((m) => ({
    label: Mode[m],
    value: m,
  }))

  return (
    <div
      className="flex overflow-y-hidden flex-col gap-1.5 self-stretch py-1.5 w-full bg-white rounded-md border border-gray-500 font-latego"
      style={{ aspectRatio: "4 / 3" }}
    >
      <div className="px-1">
        <ModeSelect selected={mode} items={items} onSelect={setMode} />
      </div>
      {mode === "description" && <Description />}
      {mode === "postscript" && <Postscript />}
      {mode === "bonus" && <CommuList />}
      {mode === "colophon" && <Colophon />}
    </div>
  )
}
