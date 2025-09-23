
import React, { useState } from 'react';

// For deployment, your API URL should be an environment variable
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
    });

    // --- ADDED: State for submission status and response messages ---
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // --- MODIFIED: Set status to loading ---
        setStatus('loading');
        setResponseMessage('');

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            // --- MODIFIED: Handle both success and error responses from the server ---
            if (response.ok) {
                setStatus('success');
                setResponseMessage('Message sent successfully!');
                // Reset the form
                setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });
            } else {
                // Get detailed error message from backend
                const errorData = await response.json();
                setStatus('error');
                setResponseMessage(errorData.error || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            setResponseMessage('An error occurred. Please make sure the backend server is running.');
        }
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me!</span></h2>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    {/* Input fields remain the same... */}
                    <div className="input-field">
                        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                        <span className="focus"></span>
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-field">
                        <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="text" name="subject" placeholder="Email Subject" value={formData.subject} onChange={handleChange} />
                        <span className="focus"></span>
                    </div>
                </div>
                <div className="textarea-field">
                    <textarea name="message" cols="30" rows="10" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                    <span className="focus"></span>
                </div>
                
                <div className="btn-box btns">
                    {/* --- MODIFIED: Disable button on loading and change text --- */}
                    <button type="submit" className="btn" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
                
                {/* --- ADDED: Display success or error messages --- */}
                {responseMessage && (
                    <div className={`form-message ${status === 'success' ? 'success' : 'error'}`}>
                        {responseMessage}
                    </div>
                )}
            </form>
        </section>
    );
};

export default Contact;