import React, { useState, useEffect } from 'react';
import { servieUrl } from '../../env/env';

// Simple CSS for the table
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  table: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '10px',
    width: '100%',
    textAlign: 'left',
  },
  header: {
    background: '#4CAF50',
    color: 'white',
    padding: '10px',
    fontWeight: 'bold',
  },
  row: {
    background: '#f2f2f2',
    padding: '10px',
    border: '1px solid #ddd',
  }
};

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(servieUrl.url+'main_contact/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={styles.container}>
      <div style={styles.table}>
        <div style={styles.header}>First Name</div>
        <div style={styles.header}>Last Name</div>
        <div style={styles.header}>Email</div>
        <div style={styles.header}>Subject</div>
        <div style={styles.header}>Message</div>
        {contacts.map((contact, index) => (
          <React.Fragment key={contact.id}>
            <div style={styles.row}>{contact.firstname}</div>
            <div style={styles.row}>{contact.lastname}</div>
            <div style={styles.row}>{contact.email}</div>
            <div style={styles.row}>{contact.subject}</div>
            <div style={styles.row}>{contact.message}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ContactTable;
