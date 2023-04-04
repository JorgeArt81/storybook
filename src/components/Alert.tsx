
interface AlertProps {
  color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  text: string;
}

export const Alert = ({ color = 'primary', text }: AlertProps) => {
  return (
    <>
      <div className={`alert alert-${color}`} role='alert'>
        {text ?? `A simple ${color} alert—check it out!`}
      </div>
    </>
  );
};
