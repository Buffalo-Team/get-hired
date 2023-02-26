import { useCallback, useState } from 'react';
import { styles } from './Stepper.styles.css';
import StepperProgress from './StepperProgress';
import useI18n from '../../hooks/useI18n';
import Button from '~/components/Button';
import { Step } from '~/@types/common';

export type Props = {
  steps: Step[];
  onConfirm: () => void;
  continueLabel?: string;
  backLabel?: string;
  confirmLabel?: string;
};

const Stepper = ({ steps, onConfirm, continueLabel, backLabel, confirmLabel }: Props) => {
  const { t } = useI18n();
  const [stepIndex, setStepIndex] = useState(0);
  const currentStep = steps[stepIndex];

  const goStepBack = useCallback(() => setStepIndex((currentStep) => currentStep - 1), []);
  const goStepForward = useCallback(() => setStepIndex((currentStep) => currentStep + 1), []);

  const isLastStep = stepIndex === steps.length - 1;
  const isFirstStep = stepIndex === 0;

  return (
    <div className={styles.root}>
      <StepperProgress
        step={stepIndex + 1}
        title={currentStep.title}
        totalSteps={steps.length}
        tip={currentStep.tip}
      />
      <div className={styles.content}>{currentStep.content}</div>
      {isLastStep && (
        <Button onClick={onConfirm} fullWidth>
          {confirmLabel || t('confirm')}
        </Button>
      )}
      {!isLastStep && (
        <Button onClick={goStepForward} fullWidth>
          {continueLabel || t('continue')}
        </Button>
      )}
      {!isFirstStep && (
        <Button onClick={goStepBack} variant='neutral' fullWidth>
          {backLabel || t('back')}
        </Button>
      )}
    </div>
  );
};

export default Stepper;
