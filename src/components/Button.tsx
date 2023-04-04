
interface ButtonProps {
  label?: string;
  color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';

  onClick?: () => void;
}

export const Button = ({ label, color = 'primary', onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type='button' className={`btn btn-${color}`}>
      {label ?? 'Button'}
    </button>
  );
};
