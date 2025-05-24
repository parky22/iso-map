import cn from 'classnames';
import styles from './Header.module.css';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <div className={cn(styles.container, className)}>
      <h1 className={styles.tab}>iso-map</h1>
    </div>
  );
};
