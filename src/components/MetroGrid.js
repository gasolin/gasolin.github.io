import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './MetroGrid.module.css';

const Icons = {
    Resume: () => (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    ),
    Projects: () => (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
    ),
    Events: () => (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="22"></line>
            <line x1="8" y1="22" x2="16" y2="22"></line>
        </svg>
    ),
    Blog: () => (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
    ),
    GitHub: () => (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
    ),
    X: () => (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M20 4l-6.768 6.768" />
        </svg>
    ),
};

const Tile = ({ title, description, to, href, className, size = 'normal', Icon }) => {
    const isLarge = size === 'large';
    const isWide = size === 'wide';

    const tileClasses = clsx(
        styles.tile,
        className,
        {
            [styles.tileLarge]: isLarge,
            [styles.tileWide]: isWide,
        }
    );

    const Content = () => (
        <>
            <div className={styles.tileIcon}>
                {Icon && <Icon />}
            </div>
            <div className={styles.tileContent}>
                <h3 className={styles.tileTitle}>{title}</h3>
                {description && <p className={styles.tileDescription}>{description}</p>}
            </div>
        </>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={tileClasses}>
                <Content />
            </a>
        );
    }

    return (
        <Link to={to} className={tileClasses}>
            <Content />
        </Link>
    );
};

export default function MetroGrid() {
    return (
        <div className={styles.gridContainer}>
            <Tile
                title="Fred (gasolin) Lin"
                description="Mobile Engineer & Tech Lead. P2P enthusiast and Open Source contributor since 2005."
                to="/docs/cover"
                size="large"
                className={styles.intro}
            />
            <Tile
                title="Resume"
                description="Experience at Mozilla, Crypto Exchange, and leadership."
                to="/resume"
                className={styles.resume}
                Icon={Icons.Resume}
            />
            <Tile
                title="Projects"
                description="Keet, BlocklyDuino and other tools."
                to="/docs/projects/project"
                size="wide"
                className={styles.projects}
                Icon={Icons.Projects}
            />
            <Tile
                title="Events"
                description="Conference speaker & Hackathon organizer."
                to="/docs/events/presentation"
                className={styles.events}
                Icon={Icons.Events}
            />
            <Tile
                title="Blog"
                description="Insights on technology and engineering."
                href="https://blog.gasolin.idv.tw/"
                className={styles.blog}
                Icon={Icons.Blog}
            />
            <Tile
                title="GitHub"
                description="Explore my open source contributions."
                href="https://github.com/gasolin"
                className={styles.github}
                Icon={Icons.GitHub}
            />
            <Tile
                title="X"
                description="Follow me on X (formerly Twitter)."
                href="https://x.com/gasolin"
                className={styles.x}
                Icon={Icons.X}
            />
        </div>
    );
}
