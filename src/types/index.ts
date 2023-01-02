import type { BONUS_ID_LIST } from "@/consts"

export type ShareTarget = "dev" | "twitter" | "summer"

export type ShareDict<T> = {
  [key in ShareTarget]: T
}

export interface ShareProps {
  shareFor: ShareTarget
}

export type StatusType = "vo" | "da" | "vi" | "me"

export type ValidID = typeof BONUS_ID_LIST[number]

export interface OpenBonusProps {
  openBonus: boolean
}

export interface BonusDataProps {
  title: string
  text: string
}
