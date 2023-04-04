
interface CardProps {
  imageSrc: string;
  text: string;
  title: string;
  link: Link;
}

interface Link {
  label?: string;
  href?: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
}

export const Card = ({ imageSrc, text, title, link }: CardProps) => {

  return (
    <div className='card' style={{ width: '18rem' }}>
      <img
        src={imageSrc ?? 'https://picsum.photos/200/300'}
        className='card-img-top'
        alt={title ?? 'card-image'}
      />
      <div className='card-body'>
        <h5 className='card-title'>{title ?? 'Card title'}</h5>
        <p className='card-text'>
          {text ??
            `Some quick example text to build on the card title and make up the bulk of the card's content.`}
        </p>
        <a href={link?.href ?? '#'} className={`btn btn-${link?.color ?? 'primary'}`}>
          {link?.label ?? 'Go somewhere'}
        </a>
      </div>
    </div>
  );
};
