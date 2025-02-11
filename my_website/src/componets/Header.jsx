


export const Header = () => {

  const handleClick = () => {
    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className="header">
        <div className="logo" onClick={handleClick} >
          <code>
            {'</>'}
          </code>
        </div>
        <button className="contact-button">Contact</button>
    </header>
  )
}
