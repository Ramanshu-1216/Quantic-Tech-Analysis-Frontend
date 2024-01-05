import React from 'react'
import styles from './SideBarItem.module.css'

type SideBarItemProps = {
    logo: string,
    label: string,
    bottom?: boolean,
    active?: boolean,
    onClick: Function,
}
console.log('rendered')
const SideBarItem = ({ logo, label, bottom = false, active = false, onClick }: SideBarItemProps) => {
    return (
        <div className={`${styles.sideBarItemcontainer} ${bottom ? styles.bottom : ''} ${active ? styles.active : ''}`} onClick={() => onClick()}>
            <img src={logo} alt="Overview" className={`${styles.sideBarItemLogo}`} />
            <div className={styles.label}>{label}</div>
        </div>
    )
}

export default SideBarItem