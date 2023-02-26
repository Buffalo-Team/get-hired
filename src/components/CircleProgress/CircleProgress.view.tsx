import classNames from 'classnames';
import Text from '~/components/Text';
import { styles } from './CircleProgress.styles.css';

export interface Props {
  fraction: number;
  radius?: number;
  lineWidth?: number;
  text?: string;
}

const CircleProgress = ({ radius = 18, lineWidth = 2, fraction, text }: Props) => {
  const normalizedRadius = radius - lineWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const unfilledFraction = 1 - fraction;
  const strokeDashoffset = circumference * unfilledFraction;
  const size = radius * 2;

  const commonCircleProps: React.SVGProps<SVGCircleElement> = {
    strokeWidth: lineWidth,
    r: normalizedRadius,
    cx: radius,
    cy: radius,
  };

  return (
    <div className={styles.root} style={{ width: size, height: size }}>
      <svg height={size} width={size}>
        <circle className={classNames(styles.circle, styles.trail)} {...commonCircleProps} />
        <circle
          className={classNames(styles.circle, styles.fill)}
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
          {...commonCircleProps}
        />
      </svg>
      {text && (
        <Text variant='small' className={styles.text}>
          {text}
        </Text>
      )}
    </div>
  );
};

export default CircleProgress;
