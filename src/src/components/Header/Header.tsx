import styles from "./style.module.css"

type HeaderProps = {
    title: string;
}


function Header({title} : HeaderProps) {

  return (
    <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <nav>
            {/* breadcrumbs */}
        </nav>
    </header>
  )
}

export default Header
