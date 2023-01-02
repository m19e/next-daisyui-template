import type { NextPage, GetServerSideProps } from "next"

import type { OpenBonusProps as Props } from "@/types"
import { Album } from "@/components/templates/Album"

const TopPage: NextPage<Props> = ({ openBonus }) => {
  return <Album openBonus={openBonus} />
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const ref = req.headers.referer ?? ""
  const props: Props = { openBonus: ref.includes("omake") }

  return {
    props,
  }
}

export default TopPage
