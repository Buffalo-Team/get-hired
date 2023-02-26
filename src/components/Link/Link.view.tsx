import Text from '~/components/Text';
import { styles } from './Link.styles.css';

interface Props {
  href: string;
  label: string;
}

const Link = ({ href, label }: Props) => (
  <a href={href} target='_blank' rel='noreferrer'>
    <Text variant='small' className={styles.link}>
      {label}
    </Text>
  </a>
);

export default Link;
