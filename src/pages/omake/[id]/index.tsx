import type { GetServerSideProps, NextPage } from "next"

import { bonusDict } from "@/consts"
import type { BonusDataProps as Props } from "@/types"
import { isValidOmakeParams, isValidId } from "@/utils"
import { Bonus } from "@/components/templates/Bonus"

const BonusPage: NextPage<Props> = ({ title, text }) => {
  return <Bonus title={title} text={text} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (isValidOmakeParams(params) && isValidId(params.id)) {
    const data = bonusDict[params.id]
    return {
      props: { ...data },
    }
  }

  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
  }
}

export default BonusPage
