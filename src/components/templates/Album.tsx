import { FullScreen, useFullScreenHandle } from "react-full-screen"

import type { OpenBonusProps } from "@/types"
import { useContentSize } from "@/hooks"
import { Contents } from "@/components/organisms/Contents"
import { Illust } from "@/components/organisms/Illust"
import { FullScreenButton } from "@/components/molecules/FullscreenButton"
import { Header } from "@/components/molecules/Header"
import { GearRotation } from "@/components/atoms/GearRotation"
import { Image } from "@/components/atoms/Image"

export const Album = ({ openBonus }: OpenBonusProps) => {
  const handle = useFullScreenHandle()
  const fullSide = useContentSize()

  return (
    <FullScreen handle={handle}>
      <div className="relative h-screen bg-pattern-root">
        <RotateVToH />
        <div className="flex justify-center items-center w-full h-full">
          <div
            className={
              "aspect-video portrait:hidden flex bg-pattern " + fullSide
            }
          >
            <div className="overflow-hidden absolute inset-0">
              <div className="flex justify-center items-center h-full">
                <GearRotation />
              </div>
            </div>
            <div className="flex z-10 flex-col w-full h-full text-[#615365] select-none">
              <div className="flex flex-1 items-end">
                <Header />
              </div>
              <div className="grid grid-cols-2 gap-2 py-1 px-2">
                <Illust />
                <Contents openBonus={openBonus} />
              </div>
              <div className="flex flex-1 justify-end px-2">
                <FullScreenButton handle={handle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullScreen>
  )
}

const RotateVToH = () => {
  return (
    <div className="landscape:hidden flex absolute inset-0 z-10 flex-col justify-center items-center w-full h-full bg-[#32373b]">
      <Image
        className="aspect-square w-1/2 suggest-rotate v2h"
        alt="rotate"
        src="/rotation-v2h.png"
      />
    </div>
  )
}
