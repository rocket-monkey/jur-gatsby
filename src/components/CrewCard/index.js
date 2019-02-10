import React from 'react'
import styles from './styles.module.scss'

const CrewCard = ({ data }) => {
  console.log('data', data)
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Dabei seit</th>
          <td>{data.since}</td>
        </tr>
        <tr>
          <th>Rolle</th>
          <td>{data.role}</td>
        </tr>
        {data.facebook && (
          <tr>
            <th>Facebook</th>
            <td>{data.facebook}</td>
          </tr>
        )}
        {data.instagram && (
          <tr>
            <th>Instagram</th>
            <td>{data.instagram}</td>
          </tr>
        )}
        {data.mixcloud && (
          <tr>
            <th>Mixcloud</th>
            <td>{data.mixcloud}</td>
          </tr>
        )}
        {data.soundcloud && (
          <tr>
            <th>Soundcloud</th>
            <td>{data.soundcloud}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default CrewCard
