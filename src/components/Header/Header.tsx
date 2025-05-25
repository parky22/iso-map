import cn from 'classnames';
import styles from './Header.module.css';

interface HeaderProps {
  className?: string;
}

const PROJECT_GITHUB_URL = 'https://github.com/parky22/iso-map';

export const Header = ({ className }: HeaderProps) => {
  return (
    <div className={cn(styles.container, className)}>
      <h1 className={styles.tab}>iso-map</h1>
      <a href={PROJECT_GITHUB_URL} target="_blank" rel="noopener noreferrer">github link</a>
    </div>
  );
};
