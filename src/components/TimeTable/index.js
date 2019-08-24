import React from 'react'
import { Link } from 'gatsby'
import Table from '../Table'
// import styles from './styles.module.scss'

const TimeTable = ({ timeTable, artists, crew }) => (
  <Table>
    <>
      {timeTable.map((entry, i) => {
        let entryAct = entry.act

        const foundArtist =
          artists && artists.find(a => a.node.frontmatter.title === entry.act)
        const foundCrew =
          crew && crew.find(a => a.node.frontmatter.title === entry.act)
        console.log({ foundArtist, foundCrew })

        if (foundCrew) {
          entryAct = <Link to={foundCrew.node.fields.slug}>{entry.act}</Link>
        }

        return (
          <tr key={`time-table-${i}`}>
            <th>
              {entryAct} {entry.label && <small>({entry.label})</small>}
            </th>
            <td>{entry.time}</td>
          </tr>
        )
      })}
    </>
  </Table>
)

export default TimeTable
