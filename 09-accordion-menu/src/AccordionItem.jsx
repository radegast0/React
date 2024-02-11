const AccordionItem = ({ num, title, text, currentlyOpen, onOpen }) => {
  const isOpen = num === currentlyOpen;
  function handleToggle() {
    onOpen(num);
  }

  return (
    <div onClick={handleToggle} className={`item ${isOpen ? 'open' : null}`}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>

      {isOpen ? <div className='content-box'>{text}</div> : null}
    </div>
  );
};

export default AccordionItem;
