import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './MetroGrid.module.css';

const Icons = {
    Resume: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    ),
    Projects: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
    ),
    Events: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="22"></line>
            <line x1="8" y1="22" x2="16" y2="22"></line>
        </svg>
    ),
    Blog: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
    ),
    GitHub: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
    ),
    X: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M20 4l-6.768 6.768" />
        </svg>
    ),
    Download: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
    ),
    Code: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
    ),
    Mic: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
    ),
    Book: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
    ),
    Shield: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
    ),
    Cpu: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="9" y1="1" x2="9" y2="4"></line>
            <line x1="15" y1="1" x2="15" y2="4"></line>
            <line x1="9" y1="20" x2="9" y2="23"></line>
            <line x1="15" y1="20" x2="15" y2="23"></line>
            <line x1="20" y1="9" x2="23" y2="9"></line>
            <line x1="20" y1="14" x2="23" y2="14"></line>
            <line x1="1" y1="9" x2="4" y2="9"></line>
            <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>
    ),
    Browser: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="4"></circle>
            <line x1="21.17" y1="8" x2="12" y2="8"></line>
            <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
            <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
        </svg>
    ),
    ArrowUpRight: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
    ),
    ArrowRight: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
    ),
};

const StatCard = ({ value, label, subtext, Icon, to, href, className }) => {
    const isExternal = Boolean(href);
    const cardClasses = clsx(styles.tile, styles.statCard, className);

    const Content = () => (
        <>
            <div className={styles.statHeader}>
                <span className={styles.statValue}>{value}</span>
                {Icon && (
                    <div className={styles.statIconBadge}>
                        <Icon />
                    </div>
                )}
            </div>
            <div className={styles.statContent}>
                <div className={styles.statLabel}>{label}</div>
                {subtext && <div className={styles.statSubtext}>{subtext}</div>}
            </div>
        </>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                <Content />
            </a>
        );
    }
    if (to) {
        return (
            <Link to={to} className={cardClasses}>
                <Content />
            </Link>
        );
    }
    return (
        <div className={cardClasses}>
            <Content />
        </div>
    );
};

const Tile = ({ title, description, to, href, className, size = 'normal', Icon, tag, meta }) => {
    const isWide = size === 'wide';
    const isExternal = Boolean(href);

    const tileClasses = clsx(
        styles.tile,
        className,
        {
            [styles.colSpan2]: isWide,
            [styles.colSpan1]: !isWide,
        }
    );

    const Content = () => (
        <>
            <div className={styles.tileHeader}>
                {tag ? (
                    <span className={styles.tileBadge}>
                        <span className={styles.statusDot}></span>
                        {tag}
                    </span>
                ) : (
                    <div className={styles.tileIconBadge}>
                        {Icon && <Icon />}
                    </div>
                )}
                <div className={styles.tileAction}>
                    {isExternal ? <Icons.ArrowUpRight /> : <Icons.ArrowRight />}
                </div>
            </div>
            <div className={styles.tileContent}>
                <h3 className={styles.tileTitle}>{title}</h3>
                {description && <p className={styles.tileDescription}>{description}</p>}
                {meta && <div className={styles.tileMeta}>{meta}</div>}
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
        <div className={styles.dashboardContainer}>
            <div className={styles.bentoGrid}>
                {/* 1. Hero Profile Bento Card (2 cols x 2 rows) */}
                <div className={clsx(styles.tile, styles.heroCard, styles.intro)}>
                    <div className={styles.tileHeader}>
                        <span className={styles.tileBadge}>
                            <span className={styles.statusDot}></span>
                            Tech Lead · Web3 & Mobile
                        </span>
                        <Link to="/docs/cover" className={styles.tileAction} aria-label="About Fred Lin">
                            <Icons.ArrowRight />
                        </Link>
                    </div>
                    <div className={styles.heroBody}>
                        <h1 className={styles.heroName}>
                            Fred Lin <span className={styles.heroAlias}>(gasolin)</span>
                        </h1>
                        <p className={styles.heroBio}>
                            Mobile Engineer & Tech Lead. P2P enthusiast and Open Source contributor since 2005. Leading distributed engineering teams to build high-scale, decentralized products.
                        </p>
                        <div className={styles.heroChips}>
                            <span className={styles.heroChip}>📍 Hualien, TW (Remote)</span>
                            <span className={styles.heroChip}>⚡ Tether Wallet Lead</span>
                            <span className={styles.heroChip}>🏛 Ex-Bitfinex · Ex-Mozilla· Ex-Delta</span>
                        </div>
                    </div>
                </div>

                {/* 2. Key Metrics Cluster (2 cols x 2 rows) */}
                <StatCard
                    value="4M+"
                    label="Global App Downloads"
                    subtext="Keet (2M+), aTrackDog, Bitfinex"
                    Icon={Icons.Download}
                    to="/docs/projects/app"
                    className={styles.events}
                />
                <StatCard
                    value="20+"
                    label="Years in Open Source"
                    subtext="Active contributor since 2005"
                    Icon={Icons.Code}
                    to="/docs/cover"
                    className={styles.intro}
                />
                <StatCard
                    value="40+"
                    label="Tech Talks"
                    subtext="6x COSCUP Speaker & GDG Organizer"
                    Icon={Icons.Mic}
                    to="/docs/events/presentation"
                    className={styles.projects}
                />
                <StatCard
                    value="5"
                    label="Book Editions"
                    subtext="Android Programming Best Seller"
                    Icon={Icons.Book}
                    to="/docs/events/publication"
                    className={styles.blog}
                />

                {/* Section: Featured Landmarks */}
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionDot} />
                    Featured Works & Landmarks
                </div>

                {/* Keet Mobile */}
                <Tile
                    tag="Decentralized P2P · 2M+ Downloads"
                    title="Keet Mobile"
                    description="Led development of 2M+ download encrypted peer-to-peer chat app built on Holepunch & Pear runtime."
                    href="https://keet.io/"
                    size="wide"
                    className={styles.projects}
                />

                {/* BlocklyDuino */}
                <Tile
                    tag="Global STEM Impact"
                    title="BlocklyDuino"
                    description="Web visual programming editor for Arduino, adopted by STEM education & robotics worldwide."
                    to="/docs/projects/project"
                    className={styles.events}
                />

                {/* Mozilla: Firefox & Firefox OS */}
                <Tile
                    tag="Mozilla Module Peer"
                    title="Firefox & Firefox OS"
                    description="Module Peer for Firefox OS Settings and DevTools Network Monitor (React/Redux)."
                    to="/docs/cover"
                    className={styles.intro}
                />

                {/* Section: Explore & Connect */}
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionDot} />
                    Explore & Connect
                </div>

                {/* Resume */}
                <Tile
                    title="Resume"
                    description="Experience at Tether, Holepunch, Bitfinex, Mozilla, and leadership."
                    to="/resume"
                    className={styles.resume}
                    Icon={Icons.Resume}
                />

                {/* Projects */}
                <Tile
                    title="Projects"
                    description="Directory of Web3, developer tools, and open source contributions."
                    to="/docs/projects/project"
                    className={styles.projects}
                    Icon={Icons.Projects}
                />

                {/* Events */}
                <Tile
                    title="Events"
                    description="40+ conference presentations, meetups, and hackathon wins."
                    to="/docs/events/presentation"
                    className={styles.events}
                    Icon={Icons.Events}
                />

                {/* Blog */}
                <Tile
                    title="Blog"
                    description="Insights on engineering, Web3, P2P, and technology trends."
                    href="https://blog.gasolin.idv.tw/"
                    className={styles.blog}
                    Icon={Icons.Blog}
                />

                {/* GitHub */}
                <Tile
                    title="GitHub"
                    description="Explore 100+ repositories, tools, and open source contributions."
                    href="https://github.com/gasolin"
                    size="wide"
                    className={styles.github}
                    Icon={Icons.GitHub}
                />

                {/* X */}
                <Tile
                    title="X (formerly Twitter)"
                    description="Follow @gasolin for tech insights, P2P discussions, and updates."
                    href="https://x.com/gasolin"
                    size="wide"
                    className={styles.x}
                    Icon={Icons.X}
                />
            </div>
        </div>
    );
}
