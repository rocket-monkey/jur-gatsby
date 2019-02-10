import React from 'react'
import classNames from 'class-names'
import Table from '../Table'
import IconFacebook from '../icons/Facebook'
import IconInstagram from '../icons/Instagram'
import IconMixcloud from '../icons/Mixcloud'
import IconSoundcloud from '../icons/Soundcloud'
import styles from './styles.module.scss'

const CrewCard = ({ data }) => {
  console.log('data', data)
  return (
    <Table>
      <>
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
            <td>
              <a
                href={data.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(styles.link, styles.fb)}
              >
                <IconFacebook />
              </a>
            </td>
          </tr>
        )}
        {data.instagram && (
          <tr>
            <th>Instagram</th>
            <td>
              <a
                href={data.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(styles.link, styles.ig)}
              >
                <IconInstagram />
              </a>
            </td>
          </tr>
        )}
        {data.mixcloud && (
          <tr>
            <th>Mixcloud</th>
            <td>
              <a
                href={data.mixcloud}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(styles.link, styles.mc)}
              >
                <IconMixcloud />
              </a>
            </td>
          </tr>
        )}
        {data.soundcloud && (
          <tr>
            <th>Soundcloud</th>
            <td>
              <a
                href={data.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(styles.link, styles.sc)}
              >
                <IconSoundcloud />
              </a>
            </td>
          </tr>
        )}
      </>
    </Table>
  )
}

export default CrewCard
