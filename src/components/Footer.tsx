const Footer = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#4F46E5',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontSize: '14px',
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p>&copy; 2024 Nirnoi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
