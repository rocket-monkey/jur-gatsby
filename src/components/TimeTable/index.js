import React from 'react'
import { Link } from 'gatsby'
import Table from '../Table'

const TimeTable = ({ timeTable, artists, crew }) => (
  <Table>
    <>
      {timeTable.map((entry, i) => {
        let entryAct = entry.act

        const foundArtist =
          artists &&
          artists.find(
            a =>
              a.node.frontmatter.title.toLowerCase() ===
              entry.act
                .replace(/\(([A-Z])\w+\)/gi, '')
                .trim()
                .toLowerCase()
          )
        const foundCrew =
          crew &&
          crew.find(
            a =>
              a.node.frontmatter.title.toLowerCase() === entry.act.toLowerCase()
          )

        if (foundArtist) {
          entryAct = (
            <a
              href={`https://${foundArtist.node.frontmatter.page}`}
              target="_blank"
            >
              {entry.act}
            </a>
          )
        } else if (foundCrew) {
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
