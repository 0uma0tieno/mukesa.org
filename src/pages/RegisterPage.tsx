
import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper'; // Adjusted path
import Button from '../components/Button'; // Adjusted path
import Modal from '../components/Modal'; // Adjusted path
import { MEMBERSHIP_FEE, MPESA_ACCOUNT_NUMBER, MPESA_PAYBILL } from '../constants'; // Adjusted path
import { UserPlusIcon, CreditCardIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    studentId: '',
    yearOfStudy: '',
    department: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setIsPaymentModalOpen(true); 
      console.log('Form submitted:', formData);
    }, 1500);
  };
  
  const handleConfirmPayment = () => {
    // Simulate payment confirmation
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        setIsPaymentModalOpen(false);
        alert(`Membership registration for ${formData.fullName} received! Please complete payment via Mpesa if you haven't. You will receive a confirmation email shortly.`);
        // Reset form or navigate user
        setFormData({ fullName: '', email: '', studentId: '', yearOfStudy: '', department: '' });
        setIsSubmitted(false);
    }, 2000);
  };


  return (
    <SectionWrapper title="Join MUKESA" subtitle={`Become a member and unlock a world of opportunities. Membership Fee: ${MEMBERSHIP_FEE}`}>
      <div className="max-w-2xl mx-auto bg-mukesa-bg-alt p-8 rounded-xl shadow-2xl">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-mukesa-text mb-1">Full Name</label>
              <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className="w-full p-3 bg-mukesa-bg border border-mukesa-border rounded-lg focus:ring-mukesa-blue focus:border-mukesa-blue text-mukesa-text"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-mukesa-text mb-1">Email Address</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-mukesa-bg border border-mukesa-border rounded-lg focus:ring-mukesa-blue focus:border-mukesa-blue text-mukesa-text"/>
            </div>
            <div>
              <label htmlFor="studentId" className="block text-sm font-medium text-mukesa-text mb-1">Student ID</label>
              <input type="text" name="studentId" id="studentId" value={formData.studentId} onChange={handleChange} required className="w-full p-3 bg-mukesa-bg border border-mukesa-border rounded-lg focus:ring-mukesa-blue focus:border-mukesa-blue text-mukesa-text"/>
            </div>
            <div>
              <label htmlFor="yearOfStudy" className="block text-sm font-medium text-mukesa-text mb-1">Year of Study</label>
              <select name="yearOfStudy" id="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} required className="w-full p-3 bg-mukesa-bg border border-mukesa-border rounded-lg focus:ring-mukesa-blue focus:border-mukesa-blue text-mukesa-text">
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="5th Year">5th Year (if applicable)</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
            </div>
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-mukesa-text mb-1">Department</label>
              <input type="text" name="department" id="department" value={formData.department} onChange={handleChange} required className="w-full p-3 bg-mukesa-bg border border-mukesa-border rounded-lg focus:ring-mukesa-blue focus:border-mukesa-blue text-mukesa-text" placeholder="e.g., Electrical and Telecommunication Engineering"/>
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full flex items-center justify-center" disabled={isLoading}>
              <UserPlusIcon className="h-5 w-5 mr-2"/> {isLoading ? 'Submitting...' : 'Register & Proceed to Payment'}
            </Button>
          </form>
        ) : (
           <div className="text-center p-6">
             <InformationCircleIcon className="h-16 w-16 text-mukesa-blue mx-auto mb-4" />
             <h3 className="text-2xl font-semibold text-mukesa-blue mb-3">Registration Details Received!</h3>
             <p className="text-mukesa-text-muted mb-6">Thank you, {formData.fullName}. Please proceed to make your membership payment.</p>
             <Button onClick={() => setIsPaymentModalOpen(true)} variant="secondary" size="lg">
                Show Payment Instructions
             </Button>
           </div>
        )}
      </div>

      <Modal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} title="Mpesa Payment Instructions">
        <div className="space-y-4 text-mukesa-text-muted">
          <p>To complete your MUKESA membership registration, please pay the fee of <strong className="text-mukesa-red">{MEMBERSHIP_FEE}</strong> via Mpesa:</p>
          <ol className="list-decimal list-inside space-y-2 bg-mukesa-bg p-4 rounded-lg">
            <li>Go to your Mpesa Menu</li>
            <li>Select Lipa na Mpesa</li>
            <li>Select Pay Bill</li>
            <li>Enter Business Number: <strong className="text-mukesa-blue">{MPESA_PAYBILL}</strong></li>
            <li>Enter Account Number: <strong className="text-mukesa-blue">{MPESA_ACCOUNT_NUMBER} (or your Student ID if instructed)</strong></li>
            <li>Enter Amount: <strong className="text-mukesa-blue">{MEMBERSHIP_FEE.replace('KES ', '')}</strong></li>
            <li>Enter your Mpesa PIN and confirm.</li>
          </ol>
          <p>You will receive a confirmation message from Mpesa and MUKESA once payment is processed.</p>
          <div className="mt-6">
            <label htmlFor="mpesaCode" className="block text-sm font-medium text-mukesa-text-muted mb-1">Enter Mpesa Confirmation Code (Optional)</label>
            <input type="text" name="mpesaCode" id="mpesaCode" className="w-full p-3 bg-mukesa-bg border border-mukesa-border rounded-lg focus:ring-mukesa-blue focus:border-mukesa-blue text-mukesa-text" placeholder="e.g., RGX123ABC4"/>
          </div>
          <Button onClick={handleConfirmPayment} variant="primary" size="lg" className="w-full mt-4 flex items-center justify-center" disabled={isLoading}>
            <CreditCardIcon className="h-5 w-5 mr-2"/> {isLoading ? 'Confirming...' : 'I Have Paid'}
          </Button>
           <Button onClick={() => setIsPaymentModalOpen(false)} variant="outline" size="md" className="w-full mt-2 border-mukesa-red text-mukesa-red hover:bg-mukesa-red hover:text-white">
            Close
          </Button>
        </div>
      </Modal>
    </SectionWrapper>
  );
};

export default RegisterPage;