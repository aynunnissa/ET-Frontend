interface IProps {
  title: string,
  url: string
}

const LinkItem = ({ title, url }: IProps) => {
  return (
    <a
      href={url}
      className='caption-2 tracking-wider transition-spacing ease-in-out duration-300 p-2 text-dark flex items-center gap-2 group'
    >
      {title}
    </a>
  );
};

export default LinkItem;