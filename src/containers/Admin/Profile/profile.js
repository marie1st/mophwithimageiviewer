
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import styles from './profile.module.css'

export const Profile = () => {
 return (

        <div className={styles.profile}>
        <FaBell />
        <CgProfile />
        Ruengrit
        </div>
 )
}