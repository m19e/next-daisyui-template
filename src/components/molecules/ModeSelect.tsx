interface Item<V> {
  label: string
  value: V
}

interface Props<V> {
  selected: V
  items: Item<V>[]
  onSelect: (value: V) => void
}

export function ModeSelect<T>({ selected, items, onSelect }: Props<T>) {
  return (
    <div className="flex w-full">
      {items.map((item) => {
        const isSelected = item.value === selected ? "selected" : ""

        return (
          <button
            key={String(item.value)}
            className={`btn-mode text-2xs ${isSelected}`}
            onClick={() => onSelect(item.value)}
          >
            <span className="text-shadow">{item.label}</span>
          </button>
        )
      })}
    </div>
  )
}
