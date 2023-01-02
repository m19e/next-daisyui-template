const TEXT_DESCRIPTION = `この度はご購入ありがとうございます！

本ページは、2022年11月23日開催の歌姫庭園33で発行しました小説本、【友愛マージナル】の特典サポートカードとなっております。`
const TEXT_POSTSCRIPT = `この本に関しての後語りがあります。
気が向きましたらどうぞ。`
const TEXT_BONUS = `本編中では描かれなかったエピソードや後日談が計２話あります。シャニマスでいうところのイベントSカードのコミュです。櫻木真乃さん視点。

※このページのみスマートフォンを縦に持ち替えてお読みください。`
const TEXT_COLOPHON = `この本の発行日、手伝ってくださった皆さんのお名前、感想フォームへのリンクがあります。`

export const Description = () => {
  return (
    <div className="overflow-auto pb-2 mr-0.5 scrollbar">
      <div className="flex flex-col gap-2">
        <Item title="ページ説明" text={TEXT_DESCRIPTION} />
        <Item title="あとがき" text={TEXT_POSTSCRIPT} />
        <Item title="おまけ小説" text={TEXT_BONUS} />
        <Item title="奥付" text={TEXT_COLOPHON} />
      </div>
    </div>
  )
}

const Item = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Title label={title} />
      <div className="p-2 w-full bg-gray-100">
        <p className="font-semibold text-justify whitespace-pre-wrap text-2xs">
          {text}
        </p>
      </div>
    </div>
  )
}

const Title = ({ label }: { label: string }) => {
  return (
    <div className="flex justify-center items-center w-2/3 bg-[#97899e] rounded-full">
      <span className="text-sm font-semibold text-white">{label}</span>
    </div>
  )
}
