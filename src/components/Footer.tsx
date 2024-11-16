const Footer = () => {
    const footerStyle: React.CSSProperties = {
      backgroundColor: '#333',
      color: 'white',
      padding: '20px',
      textAlign: 'center',
      fontSize: '14px',
    };
  
    const contentStyle: React.CSSProperties = {
      maxWidth: '1200px',
      margin: '0 auto',
    };
  
    const linksStyle: React.CSSProperties = {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      margin: '10px 0',
    };
  
    const linkStyle: React.CSSProperties = {
      color: 'white',
      textDecoration: 'none',
    };
  
    return (
      <footer style={footerStyle}>
        <div style={contentStyle}>
          <p>&copy; 2024 Nirnoi. All Rights Reserved.</p>
          <ul style={linksStyle}>
            <li>
              <a href="/about" style={linkStyle}>About</a>
            </li>
            <li>
              <a href="/contact" style={linkStyle}>Contact</a>
            </li>
            <li>
              <a href="/privacy" style={linkStyle}>Privacy Policy</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  