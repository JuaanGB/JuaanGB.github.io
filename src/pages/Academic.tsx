import { academicRecord } from '../data/academic'
import { useLanguage } from '../context/LanguageContext'
import { strings } from '../i18n/strings'
import './Academic.css'

function gradeClass(grade: number): string {
  if (grade >= 9) return 'grade--high'
  if (grade >= 7) return 'grade--mid'
  return 'grade--low'
}

export default function Academic() {
  const { lang } = useLanguage()
  const t = strings[lang]

  const average = (
    academicRecord.reduce((sum, entry) => sum + entry.grade, 0) / academicRecord.length
  ).toFixed(2)

  const byCourse = academicRecord.reduce<Record<number, typeof academicRecord>>((acc, entry) => {
    acc[entry.course] = acc[entry.course] ? [...acc[entry.course], entry] : [entry]
    return acc
  }, {})

  return (
    <div>
      <div className="page-header">
        <p className="page-eyebrow">// grades --all</p>
        <h1 className="page-title">{t.academic.pageTitle}</h1>
          <p className="page-subtitle">
            {t.academic.mention} | {t.academic.university} 2022-2026 | {t.academic.averageLabel} {average}/10
          </p>
      </div>

      {Object.entries(byCourse).map(([course, entries]) => (
        <div key={course} className="academic-block">
          <h2 className="academic-block__title">{t.academic.course} {course}</h2>
          <table className="academic-table">
            <thead>
              <tr>
                <th>{t.academic.subject}</th>
                <th>{t.academic.grade}</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={`${entry.subject.es}`}>
                  <td>{entry.subject[lang]}</td>
                  <td className={`academic-table__grade ${gradeClass(entry.grade)}`}>
                    {entry.honors && (
                      <span className="honors-tag" title='MH'>
                        MH
                      </span>
                    )}
                    {entry.grade.toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}
