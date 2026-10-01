import { tags } from '../data/tags'
import { useLanguage } from '../context/LanguageContext'
import './TagFilter.css'

interface Props {
  selected: string[]
  onToggle: (tagId: string) => void
}

export default function TagFilter({ selected, onToggle }: Props) {
  const { lang } = useLanguage()

  return (
    <div className="tag-filter">
      {tags.map((tag) => {
        const isActive = selected.includes(tag.id)
        return (
          <button
            key={tag.id}
            className={'tag-filter__badge' + (isActive ? ' tag-filter__badge--active' : '')}
            onClick={() => onToggle(tag.id)}
            aria-pressed={isActive}
          >
            {isActive && <span className="tag-filter__x">X</span>}
            {tag[lang]}
          </button>
        )
      })}
    </div>
  )
}