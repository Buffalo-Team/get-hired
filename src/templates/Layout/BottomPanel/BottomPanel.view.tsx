import { styles } from './BottomPanel.styles.css';
import PageIcon from './PageIcon';
import { PageIconConfig } from './PageIcon/PageIcon.types';

interface Props {
  pageIcons: PageIconConfig[];
}

const BottomPanelView = ({ pageIcons }: Props): JSX.Element => (
  <nav className={styles.bottomPanel}>
    {pageIcons.map(({ id, label, Icon, onClick }) => (
      <PageIcon key={id} label={label} Icon={Icon} onClick={onClick} />
    ))}
  </nav>
);

export default BottomPanelView;
