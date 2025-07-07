import React, { useEffect, useState } from 'react';

const ContactDetails = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch('/api/contact');
        const data = await res.json();
        setContacts(data);
      } catch (err) {
        console.error('Error fetching contacts:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;

    try {
      const res = await fetch(`/api/contact/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setContacts((prev) => prev.filter((c) => c._id !== id));
      } else {
        const data = await res.json();
        alert(`Delete failed: ${data.error || 'Unknown error'}`);
      }
    } catch {
      alert('Delete failed: Network error');
    }
  };

  const styles = {
    container: {
      padding: '2rem 1rem',
      maxWidth: 1000,
      margin: '0 auto 4rem auto', // extra bottom margin for footer spacing
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: '#fff0f6',
      borderRadius: '16px',
      boxShadow: '0 8px 20px rgba(157, 78, 221, 0.1)',
    },
    heading: {
      fontSize: '2rem',
      textAlign: 'center',
      marginBottom: '1.5rem',
      color: '#9d4edd',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#9d4edd',
      color: '#fff',
      padding: '12px 10px',
      textAlign: 'left',
    },
    td: {
      padding: '12px 10px',
      borderBottom: '1px solid #ccc',
      color: '#4a3c67',
      wordBreak: 'break-word',
    },
    button: {
      backgroundColor: '#f72585',
      color: '#fff',
      border: 'none',
      padding: '6px 12px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
    },
    loading: {
      textAlign: 'center',
      fontSize: '1.2rem',
      color: '#6a4c93',
    },
    responsiveWrapper: {
      overflowX: 'auto',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Entries</h2>
      {loading ? (
        <p style={styles.loading}>Loading...</p>
      ) : (
        <div style={styles.responsiveWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Message</th>
                <th style={styles.th}>Timestamp</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c, i) => (
                <tr key={c._id} style={{ backgroundColor: i % 2 ? '#fce7f3' : 'transparent' }}>
                  <td style={styles.td}>{c.name}</td>
                  <td style={styles.td}>{c.email}</td>
                  <td style={styles.td}>{c.phone}</td>
                  <td style={styles.td}>{c.message}</td>
                  <td style={styles.td}>{new Date(c.createdAt).toLocaleString()}</td>
                  <td style={styles.td}>
                    <button style={styles.button} onClick={() => handleDelete(c._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
