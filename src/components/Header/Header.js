import styles from "./Header.module.css";


const Header = () => {
    return (
        <header className={styles.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/2048px-SVG_Logo.svg.png" alt="Logo" />
        </header>
    )
}

export default Header;