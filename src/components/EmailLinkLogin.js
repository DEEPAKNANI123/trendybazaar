
import React, { useState, useEffect } from 'react';
import { sendSignInLinkToEmail, signInWithEmailLink, isSignInWithEmailLink } from 'firebase/auth';
import { auth } from '../firebase';

const EmailLinkLogin = () => {
  const [email, setEmail] = useState('');

  // 1. Send Email Link
  const handleSendLink = async (e) => {
    e.preventDefault();
    const actionCodeSettings = {
      url: window.location.href, // Must be your domain
      handleCodeInApp: true,
    };
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      alert('OTP link sent to your email!');
      window.localStorage.setItem('emailForSignIn', email);
    } catch (err) {
      alert(err.message);
    }
  };

  // 2. Handle Redirect from Email
  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const emailFromStorage = window.localStorage.getItem('emailForSignIn');
      if (!emailFromStorage) {
        const emailPrompt = window.prompt('Please enter your email to confirm sign-in:');
        if (emailPrompt) signInWithEmailLink(auth, emailPrompt, window.location.href);
      } else {
        signInWithEmailLink(auth, emailFromStorage, window.location.href)
          .then(() => {
            alert('Successfully signed in with email link!');
            window.localStorage.removeItem('emailForSignIn');
          })
          .catch((err) => {
            alert(err.message);
          });
      }
    }
  }, []);

  return (
    <div>
      <h2>Email OTP (Passwordless) Login</h2>
      <form onSubmit={handleSendLink}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send OTP Link</button>
      </form>
    </div>
  );
};

export default EmailLinkLogin;
