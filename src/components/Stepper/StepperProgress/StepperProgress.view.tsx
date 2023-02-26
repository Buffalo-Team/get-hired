import CircleProgress from '~/components/CircleProgress';
import Text from '~/components/Text';
import { styles } from './StepperProgress.styles.css';

export interface Props {
  title: string;
  step: number;
  totalSteps: number;
  tip?: string;
}

const StepperProgress = ({ title, tip, step, totalSteps }: Props) => (
  <div className={styles.root}>
    <CircleProgress fraction={step / totalSteps} text={`${step}/${totalSteps}`} />
    <div className={styles.description}>
      <Text>{title}</Text>
      <Text variant='extraSmall' className={styles.tip}>
        {tip}
      </Text>
    </div>
  </div>
);

export default StepperProgress;
