import React from 'react'
import Table from '../Table'
// import styles from './styles.module.scss'

const TimeTable = ({ timeTable }) => {
  console.log('timeTable', timeTable)
  return (
    <Table>
      <>
        {timeTable.map((entry, i) => (
          <tr key={`time-table-${i}`}>
            <th>
              {entry.act} <small>({entry.label})</small>
            </th>
            <td>{entry.time}</td>
          </tr>
        ))}
      </>
    </Table>
  )
}

export default TimeTable
