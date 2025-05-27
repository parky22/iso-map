interface FooterProps {
  className?: string;
}

const PROJECT_GITHUB_URL = 'https://github.com/parky22/iso-map';

export const Footer = ({ className }: FooterProps) => {
  return (
    <div className={className}>
        <a href={PROJECT_GITHUB_URL} target="_blank" rel="noopener noreferrer">github</a>
    </div>
  );
};
