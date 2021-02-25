import { useContext } from 'react'
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'
import { ChallengeBox } from './ChallengeBox'

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: '50%' }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}