import { useState } from 'react';
import Button from './Button';
import Message from './Message';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }
  function handleNext() {
    if (step < 3) setStep((currentStep) => currentStep + 1);
  }

  return (
    <>
      <button className='close' onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen ? (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : null}>1</div>
            <div className={step >= 2 ? 'active' : null}>2</div>
            <div className={step >= 3 ? 'active' : null}>3</div>
          </div>
          <Message step={step}>{messages[step - 1]}</Message>
          <div className='buttons'>
            <Button textColor='#fff' bgColor='#7950f2' onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button textColor='#fff' bgColor='#7950f2' onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Steps;
