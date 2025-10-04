import React, { useState, useMemo } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { TicketIcon, CalendarDaysIcon, MapPinIcon, UserIcon, EnvelopeIcon, AcademicCapIcon, PhoneIcon, CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const PICNIC_PRICE = 399;
const EVENT_TITLE = "MUKESA - IEEE Picnic";
const EVENT_DATE = "2025-10-18";
const EVENT_LOCATION = "Ololua Nature Trail";
const MPESA_PAYBILL = "522533"; // Using existing constants
const MPESA_ACCOUNT_NUMBER = "9999444";

const PicnicPaymentPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    studentId: '',
    phoneNumber: '',
  });
  const [tickets, setTickets] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'details' | 'processing' | 'success'>('details');
  
  const totalAmount = useMemo(() => tickets * PICNIC_PRICE, [tickets]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleTicketChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0 && value <= 10) { // Limit to 10 tickets
      setTickets(value);
    }
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPaymentStep('details');
    setIsModalOpen(true);
  };

  const handlePayment = () => {
    setPaymentStep('processing');
    setTimeout(() => {
      setPaymentStep('success');
    }, 3000); // Simulate processing time
  };
  
  const closeModalAndReset = () => {
    setIsModalOpen(false);
    setFormData({ fullName: '', email: '', studentId: '', phoneNumber: '' });
    setTickets(1);
    setPaymentStep('details');
  };

  const inputBaseClasses = "w-full p-3 border rounded-lg focus:ring-2 focus:ring-mukesa-blue focus:border-mukesa-blue transition-colors duration-200";
  const lightInputClasses = "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400";
  const darkInputClasses = "dark:bg-mukesa-black dark:border-mukesa-gray-dark dark:text-black dark:placeholder-gray-500 dark:focus:border-mukesa-blue";
  const labelBaseClasses = "block text-sm font-medium mb-1 text-gray-700 dark:text-mukesa-gray-text";

  return (
    <SectionWrapper title="Picnic Registration & Payment">
      <div className="max-w-4xl mx-auto bg-white dark:bg-mukesa-gray-dark p-8 rounded-xl shadow-2xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: Event Details */}
            <div className="space-y-6">
                <img src="https://picsum.photos/seed/event7/600/400" alt="Picnic at Ololua Nature Trail" className="rounded-lg shadow-lg w-full h-48 object-cover" />
                <h2 className="text-3xl font-bold text-mukesa-blue dark:text-black">{EVENT_TITLE}</h2>
                <div className="space-y-3 text-lg text-gray-700 dark:text-mukesa-gray-text">
                    <p className="flex items-center"><CalendarDaysIcon className="h-6 w-6 mr-3 text-mukesa-red"/> {EVENT_DATE}</p>
                    <p className="flex items-center"><MapPinIcon className="h-6 w-6 mr-3 text-mukesa-red"/> {EVENT_LOCATION}</p>
                    <p className="flex items-center"><TicketIcon className="h-6 w-6 mr-3 text-mukesa-red"/> KES {PICNIC_PRICE} per person</p>
                </div>
                 <p className="text-gray-600 dark:text-mukesa-gray-text">Join us for a day of fun, networking, and nature. A perfect break from studies and a great way to connect with fellow engineering students!</p>
                  <Link to="/events/7" className="inline-flex items-center font-semibold text-mukesa-blue hover:text-mukesa-red dark:text-mukesa-blue dark:hover:text-mukesa-red transition-colors duration-300">
                      <ArrowLeftIcon className="h-5 w-5 mr-2" />
                      Back to Event Details
                  </Link>
            </div>

            {/* Right Column: Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-black border-b-2 border-mukesa-red pb-2">Your Details</h3>
                <div>
                    <label htmlFor="fullName" className={labelBaseClasses}><UserIcon className="h-4 w-4 inline mr-1"/> Full Name</label>
                    <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className={`${inputBaseClasses} ${lightInputClasses} ${darkInputClasses}`}/>
                </div>
                 <div>
                    <label htmlFor="email" className={labelBaseClasses}><EnvelopeIcon className="h-4 w-4 inline mr-1"/> Email Address</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className={`${inputBaseClasses} ${lightInputClasses} ${darkInputClasses}`}/>
                </div>
                <div>
                    <label htmlFor="studentId" className={labelBaseClasses}><AcademicCapIcon className="h-4 w-4 inline mr-1"/> Student ID</label>
                    <input type="text" name="studentId" id="studentId" value={formData.studentId} onChange={handleChange} required className={`${inputBaseClasses} ${lightInputClasses} ${darkInputClasses}`}/>
                </div>
                 <div>
                    <label htmlFor="tickets" className={labelBaseClasses}><TicketIcon className="h-4 w-4 inline mr-1"/> Number of Tickets</label>
                    <input type="number" name="tickets" id="tickets" value={tickets} onChange={handleTicketChange} required min="1" max="10" className={`${inputBaseClasses} ${lightInputClasses} ${darkInputClasses}`}/>
                </div>
                <div className="p-4 bg-gray-100 dark:bg-mukesa-black rounded-lg text-center">
                    <p className="text-lg font-medium text-gray-600 dark:text-mukesa-gray-text">Total Amount</p>
                    <p className="text-3xl font-bold text-mukesa-blue dark:text-black">KES {totalAmount}</p>
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                    Proceed to Payment
                </Button>
            </form>
        </div>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={closeModalAndReset} title="Confirm & Pay">
        {paymentStep === 'details' && (
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-gray-800 dark:text-black">Order Summary</h4>
            <div className="p-4 bg-gray-50 dark:bg-mukesa-black rounded-lg space-y-2">
              <p><strong>Event:</strong> {EVENT_TITLE}</p>
              <p><strong>Tickets:</strong> {tickets}</p>
              <p className="text-xl"><strong>Total:</strong> KES {totalAmount}</p>
            </div>
            <div>
                <label htmlFor="phoneNumber" className={labelBaseClasses}><PhoneIcon className="h-4 w-4 inline mr-1"/> M-Pesa Phone Number</label>
                <input type="tel" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required placeholder="e.g., 0712345678" className={`${inputBaseClasses} ${lightInputClasses} ${darkInputClasses}`}/>
            </div>
            <Button onClick={handlePayment} variant="primary" size="lg" className="w-full" disabled={!formData.phoneNumber}>
              Pay KES {totalAmount} with M-Pesa
            </Button>
          </div>
        )}
        {paymentStep === 'processing' && (
          <div className="text-center py-8">
             <svg className="animate-spin h-12 w-12 text-mukesa-blue mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-lg font-semibold text-gray-700 dark:text-mukesa-gray-text">Sending payment request...</p>
            <p className="text-gray-600 dark:text-mukesa-gray-text">Please check your phone to complete the transaction.</p>
          </div>
        )}
        {paymentStep === 'success' && (
           <div className="text-center py-8">
            <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4"/>
            <h3 className="text-2xl font-semibold text-mukesa-blue dark:text-black mb-3">Success!</h3>
            <p className="text-gray-700 dark:text-mukesa-gray-text mb-6">Your spot is reserved! We have sent a confirmation to {formData.email}. Please ensure you complete the M-Pesa payment if you haven't already.</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Paybill: <strong>{MPESA_PAYBILL}</strong>, Account: <strong>{MPESA_ACCOUNT_NUMBER}</strong></p>
            <Button onClick={closeModalAndReset} variant="secondary" size="lg" className="w-full mt-6">
              Done
            </Button>
           </div>
        )}
      </Modal>
    </SectionWrapper>
  );
};

export default PicnicPaymentPage;