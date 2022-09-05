import { INavigateBtn } from 'interfaces/components/navigateBtn.interface';

const NavigateBtn = ({ text, onClick }: INavigateBtn) => {
  return (
    <button className="home_top-leftside-btn" onClick={(e) => onClick(e)}>
      {text}
    </button>
  );
};

export default NavigateBtn;
