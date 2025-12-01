import React from 'react';

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img
          src={process.env.PUBLIC_URL + '/Mykola_Maliuha_Software_engineer.JPG'}
          alt="Mykola Maliuha"
          style={styles.photo}
        />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Mykola Maliuha</h2>
          <p style={styles.position}>Software engineer</p>
        </div>
      </div>

      <div style={styles.card}>
        <img
          src={process.env.PUBLIC_URL + '/Viktoriia_Komarnytska.png'}
          alt="Viktoriia Komarnytska"
          style={styles.photo}
        />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Viktoriia Komarnytska</h2>
          <p style={styles.position}>UI/UX Designer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img
          src={process.env.PUBLIC_URL + '/Natalia_Dumanska.jpg'}
          alt="Natalia Dumanska"
          style={styles.photo}
        />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Natalia Dumanska</h2>
          <p style={styles.position}>Software engineer</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    width: '150px',
    padding: '1em',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  photo: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  textContainer: {
    marginTop: '0.5em',
  },
  name: {
    fontSize: '1em',
    fontWeight: 'bold',
    color: '#333',
    margin: '0',
  },
  position: {
    fontSize: '0.9em',
    color: '#6a0dad', // Same purple color as header
    margin: '0.5em 0 0 0',
  },
};

export default Body;
