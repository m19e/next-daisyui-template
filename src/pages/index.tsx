import type { NextPage, GetServerSideProps } from "next"

interface Props {}

const Page: NextPage<Props> = () => {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({}) => {
  return {
    props: {},
  }
}

export default Page
