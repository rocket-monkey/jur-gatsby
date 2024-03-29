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
          artists.find(a => {
            const cleanAct =
              entry &&
              entry.act &&
              entry.act
                .replace(/\(([A-Z])\w+\)/gi, '')
                .trim()
                .toLowerCase()
            return a.node.frontmatter.title.toLowerCase() === cleanAct
          })
        const foundCrew =
          crew &&
          crew.find(a => {
            const cleanAct = entry && entry.act && entry.act.toLowerCase()
            return a.node.frontmatter.title.toLowerCase() === cleanAct
          })

        if (foundArtist) {
          let pageLink = foundArtist.node.frontmatter.page
          pageLink = pageLink.includes('http')
            ? pageLink
            : `https://${pageLink}`
          entryAct = (
            <a href={pageLink} target="_blank">
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
