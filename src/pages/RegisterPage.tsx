import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { MEMBERSHIP_FEE, MPESA_ACCOUNT_NUMBER, MPESA_PAYBILL, REGISTRATION_CONTACT_EMAIL } from '../constants';
import { UserPlusIcon, CreditCardIcon, EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

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
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
    }, 1500);
  };
  
  const handleConfirmPayment = () => {
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        setIsPaymentModalOpen(false);
        alert(`Membership registration for ${formData.fullName} received! Please complete payment via Mpesa if you haven't. You will receive a confirmation email shortly.`);
        setFormData({ fullName: '', email: '', studentId: '', yearOfStudy: '', department: '' });
        setIsSubmitted(false);
    }, 2000);
  };

  const inputBaseClasses = "w-full p-3 border rounded-lg focus:ring-2 focus:ring-mukesa-blue focus:border-mukesa-blue transition-colors duration-200";
  const lightInputClasses = "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400";
  // Dark input classes ensure proper contrast and feel for dark mode
  const darkInputClasses = "dark:bg-mukesa-black dark:border-mukesa-gray-dark dark:text-white dark:placeholder-gray-500 dark:focus:border-mukesa-blue";
  
  const labelBaseClasses = "block text-sm font-medium mb-1 text-gray-700 dark:text-mukesa-gray-text";

  return (
    <SectionWrapper title="Join MUKESA" subtitle={`Become a member and unlock a world of opportunities. Membership Fee: ${MEMBERSHIP_FEE}`}>
      <div className="max-w-2xl mx-auto bg-white dark:bg-mukesa-gray-dark p-8 rounded-xl shadow-2xl">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className={labelBaseClasses}>Full Name</label>
              <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className={`${inputBaseClasses} ${lightInputClasses} ${darkInputClasses}`}/>
            </div>
            <div>
              <label htmlFor="email" className={labelBaseClasses}>Email Address</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className={`${inputBaseClasses} ${lightInputClasses} ${darkInputClasses}`}/>
            </div>
            <div>
              <label htmlFor="studentId" className={labelBaseClasses}>Student ID</label>
              <input type="text" name="studentId" id="studentId" value={formData.studentId} onChange={handleChange} required className={`${inputBaseClasses} ${lightInputClasses} ${darkInputClasses}`}/>
            </div>
            <div>
              <label htmlFor="yearOfStudy" className={labelBaseClasses}>Year of Study</label>
              <select name="yearOfStudy" id="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} required className={`${inputBaseClasses} ${lightInputClasses} ${darkInputClasses}`}>
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
              <label htmlFor="department" className={labelBaseClasses}>Department</label>
              <input type="text" name="department" id="department" value={formData.department} onChange={handleChange} required className={`${inputBaseClasses} ${lightInputClasses} ${darkInputClasses}`} placeholder="e.g., Electrical Engineering"/>
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full flex items-center justify-center" disabled={isLoading}>
              <UserPlusIcon className="h-5 w-5 mr-2"/> {isLoading ? 'Submitting...' : 'Register'}
            </Button>
          </form>
        ) : (
           <div className="text-center p-6">
             <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
             <h3 className="text-2xl font-semibold text-mukesa-blue dark:text-mukesa-blue mb-3">Details Ready to Send!</h3>
             <p className="text-gray-700 dark:text-mukesa-gray-text mb-6">Thank you, {formData.fullName}. Please send your registration details to us via email to proceed. After sending, you can follow the payment instructions.</p>
             <div className="flex flex-col space-y-4">
                <a 
                    href={`mailto:${REGISTRATION_CONTACT_EMAIL}?subject=${encodeURIComponent(`New MUKESA Membership Registration: ${formData.fullName}`)}&body=${encodeURIComponent(
    `A new registration has been submitted with the following details:

    Full Name: ${formData.fullName}
    Email Address: ${formData.email}
    Student ID: ${formData.studentId}
    Year of Study: ${formData.yearOfStudy}
    Department: ${formData.department}

    Please process this registration.

    Thank you!`
                    )}`}
                >
                    <Button variant="primary" size="lg" className="w-full flex items-center justify-center">
                        <EnvelopeIcon className="h-5 w-5 mr-2"/> Send Registration Email
                    </Button>
                </a>
                <Button onClick={() => setIsPaymentModalOpen(true)} variant="secondary" size="lg" className="w-full">
                    Show Payment Instructions
                </Button>
             </div>
           </div>
        )}
      </div>

      <Modal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} title="Mpesa Payment Instructions">
        {/* Modal's children div inherits text color from Modal component (dark:text-mukesa-gray-text) */}
        <div className="space-y-4"> 
          <p>To complete your MUKESA membership registration, please pay the fee of <strong className="text-mukesa-red">{MEMBERSHIP_FEE}</strong> via Mpesa:</p>
          <ol className="list-decimal list-inside space-y-2 bg-gray-100 dark:bg-mukesa-black p-4 rounded-lg">
            <li>Go to your Mpesa Menu</li>
            <li>Select Lipa na Mpesa</li>
            <li>Select Pay Bill</li>
            <li>Enter Business Number: <strong className="text-mukesa-blue dark:text-mukesa-blue">{MPESA_PAYBILL}</strong></li>
            <li>Enter Account Number: <strong className="text-mukesa-blue dark:text-mukesa-blue">{MPESA_ACCOUNT_NUMBER} (or your Student ID)</strong></li>
            <li>Enter Amount: <strong className="text-mukesa-blue dark:text-mukesa-blue">{MEMBERSHIP_FEE.replace('KES ', '')}</strong></li>
            <li>Enter your Mpesa PIN and confirm.</li>
          </ol>
          <p>You will receive a confirmation message from Mpesa and MUKESA once payment is processed.</p>
          <div className="mt-6">
            <label htmlFor="mpesaCode" className={labelBaseClasses}>Enter Mpesa Confirmation Code (Optional)</label>
            <input type="text" name="mpesaCode" id="mpesaCode" className={`${inputBaseClasses} ${lightInputClasses} ${darkInputClasses}`} placeholder="e.g., RGX123ABC4"/>
          </div>
          <Button onClick={handleConfirmPayment} variant="primary" size="lg" className="w-full mt-4 flex items-center justify-center" disabled={isLoading}>
            <CreditCardIcon className="h-5 w-5 mr-2"/> {isLoading ? 'Confirming...' : 'I Have Paid'}
          </Button>
           <Button onClick={() => setIsPaymentModalOpen(false)} variant="outline" size="md" className="w-full mt-2 border-mukesa-red text-mukesa-red hover:bg-mukesa-red hover:text-white dark:border-mukesa-red dark:text-mukesa-red dark:hover:bg-mukesa-red dark:hover:text-white">
            Close
          </Button>
        </div>
      </Modal>
    </SectionWrapper>
  );
};

export default RegisterPage;
