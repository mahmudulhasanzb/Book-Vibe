import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.text}>
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" style={styles.button}>
        Go Back Home
      </a>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    textAlign: 'center',
  },
  code: {
    fontSize: '100px',
    margin: '0',
    color: '#3b82f6',
  },
  title: {
    fontSize: '30px',
    margin: '10px 0',
  },
  text: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#cbd5e1',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#3b82f6',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default NotFoundPage;
