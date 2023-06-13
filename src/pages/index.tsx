import type { NextPage, GetServerSideProps } from "next"

import { Themes } from "components/templates/Themes"

const Page: NextPage = () => {
  return <Themes />
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

export default Page
