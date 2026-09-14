import { academicRecord } from '../data/academic'
import './Academic.css'

function gradeClass(grade: number): string {
  if (grade >= 9) return 'grade--high'
  if (grade >= 7) return 'grade--mid'
  return 'grade--low'
}

export default function Academic() {
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
        <h1 className="page-title">Grado en Ingeniería Informática</h1>
        <p className="page-subtitle">
          Mención en Computación · Universidad de Murcia · 2022-2026 · Nota media {average}/10
        </p>
      </div>

      {Object.entries(byCourse).map(([course, entries]) => (
        <div key={course} className="academic-block">
          <h2 className="academic-block__title">Curso {course}</h2>
          <table className="academic-table">
            <thead>
              <tr>
                <th>Asignatura</th>
                <th>Nota</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.subject}>
                  <td>{entry.subject}</td>
                  <td className={`academic-table__grade ${gradeClass(entry.grade)}`}>
                    {entry.honors && <span className="honors-tag">MH</span>}
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
