import { BONUS_ID_LIST } from "@/consts"
import type { ValidID } from "@/types"
import type { ParsedUrlQuery } from "querystring"

export const isValidOmakeParams = (
  params: ParsedUrlQuery | undefined
): params is { id: string } => {
  return params !== undefined && typeof params.id === "string"
}

export const isValidId = (id: string): id is ValidID => {
  return BONUS_ID_LIST.some((valid) => id === valid)
}
