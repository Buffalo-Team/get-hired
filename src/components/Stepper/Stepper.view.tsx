import { ReactNode, useState } from 'react';
import { styles } from './Stepper.styles.css';
import StepperProgress from './StepperProgress';
import useI18n from '../../hooks/useI18n';
import Button from '~/components/Button';

export type Props = {
  steps: {
    title: string;
    content: ReactNode;
    tip?: string;
  }[];
  onConfirm: () => void;
  continueLabel?: string;
  backLabel?: string;
  confirmLabel?: string;
};

const Stepper = ({ steps, onConfirm, continueLabel, backLabel, confirmLabel }: Props) => {
  const { t } = useI18n();
  const [stepIndex, setStepIndex] = useState(0);
  const currentStep = steps[stepIndex];

  return (
    <div className={styles.root}>
      <StepperProgress
        step={stepIndex + 1}
        title={currentStep.title}
        totalSteps={steps.length}
        tip={currentStep.tip}
      />
      <div className={styles.content}>{currentStep.content}</div>
      {stepIndex === steps.length - 1 && (
        <Button onClick={onConfirm} fullWidth>
          {confirmLabel || t('confirm')}
        </Button>
      )}
      {stepIndex < steps.length - 1 && (
        <Button onClick={() => setStepIndex((currentStep) => currentStep + 1)} fullWidth>
          {continueLabel || t('continue')}
        </Button>
      )}
      {stepIndex > 0 && (
        <Button
          onClick={() => setStepIndex((currentStep) => currentStep - 1)}
          variant='neutral'
          fullWidth
        >
          {backLabel || t('back')}
        </Button>
      )}
    </div>
  );
};

export default Stepper;
