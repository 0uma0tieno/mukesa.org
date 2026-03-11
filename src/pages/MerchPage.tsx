import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { MOCK_MERCH_ITEMS } from '../constants';
const MERCH_CONTACT_EMAIL = "mukesa1819@gmail.com"; 
import { MerchItem } from '../types';
import { ShoppingCartIcon, TagIcon, EnvelopeIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';
import Modal from '../components/Modal';

interface MerchItemCardProps {
  item: MerchItem;
  onInquire: (item: MerchItem) => void;
}

const MerchItemCard: React.FC<MerchItemCardProps> = ({ item, onInquire }) => {
  return (
    <div id={item.id} className="bg-mukesa-gray-dark rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
      {item.imageUrl && (
        <div className="w-full h-64 overflow-hidden">
          <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-mukesa-gray-text mb-1">
          <TagIcon className="h-4 w-4 mr-1 text-mukesa-red" /> {item.category}
        </div>
        <h3 className="text-2xl font-semibold text-mukesa-blue mb-2">{item.name}</h3>
        <p className="text-mukesa-gray-text text-base mb-3 flex-grow line-clamp-3">{item.description}</p>
        <p className="text-xl font-bold text-white mb-4">{item.price}</p>
        <Button 
          variant="secondary" 
          size="md" 
          onClick={() => onInquire(item)}
          className="mt-auto w-full flex items-center justify-center"
          aria-label={`Inquire about ${item.name}`}
        >
          <ShoppingCartIcon className="h-5 w-5 mr-2"/> Inquire to Buy
        </Button>
      </div>
    </div>
  );
};

const MerchPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMerchItem, setSelectedMerchItem] = useState<MerchItem | null>(null);

  const handleInquire = (item: MerchItem) => {
    setSelectedMerchItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMerchItem(null);
  };

  return (
    <SectionWrapper title="MUKESA Merchandise" subtitle="Show your MUKESA pride! Official gear for engineering students.">
      <div className="mb-10 bg-mukesa-gray-dark p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center text-center sm:text-left">
        <ShoppingCartIcon className="h-12 w-12 text-mukesa-blue mr-0 sm:mr-4 mb-3 sm:mb-0 flex-shrink-0" />
        <div>
            <h3 className="text-xl font-semibold text-mukesa-blue">Support Your Association</h3>
            <p className="text-mukesa-gray-text">
                All proceeds from merchandise sales go towards funding MUKESA events, workshops, and student projects.
            </p>
        </div>
      </div>

      {MOCK_MERCH_ITEMS.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_MERCH_ITEMS.map(item => (
            <MerchItemCard key={item.id} item={item} onInquire={handleInquire} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-mukesa-gray-text py-10">
          Our merchandise store is currently empty. Check back soon for awesome MUKESA gear!
        </p>
      )}

      <div className="mt-12 bg-mukesa-gray-dark p-8 rounded-lg shadow-xl text-center">
        <InformationCircleIcon className="h-10 w-10 text-mukesa-red mx-auto mb-3" />
        <h4 className="text-2xl font-semibold text-mukesa-blue mb-3">How to Order</h4>
        <p className="text-mukesa-gray-text mb-4 max-w-xl mx-auto">
          To purchase any of our merchandise, please click the "Inquire to Buy" button on the item you're interested in.
          Alternatively, you can send an email to <a href={`mailto:${MERCH_CONTACT_EMAIL}`} className="text-mukesa-red hover:underline font-medium">{MERCH_CONTACT_EMAIL}</a> with the item name(s) and quantities.
          We'll get back to you with payment and collection/delivery details.
        </p>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={`Inquire about ${selectedMerchItem?.name || 'Merchandise'}`}>
        {selectedMerchItem && (
          <div className="space-y-4 text-mukesa-gray-text">
            <img src={selectedMerchItem.imageUrl} alt={selectedMerchItem.name} className="w-full h-48 object-contain rounded-md mb-4 bg-mukesa-black p-2" />
            <h4 className="text-lg font-semibold text-mukesa-blue">{selectedMerchItem.name}</h4>
            <p><span className="font-semibold">Price:</span> {selectedMerchItem.price}</p>
            <p>{selectedMerchItem.description}</p>
            <p className="mt-4">
              To proceed with your inquiry or to place an order for this item, please contact us:
            </p>
            <a 
              href={`mailto:${MERCH_CONTACT_EMAIL}?subject=Merch Inquiry: ${selectedMerchItem.name}&body=Hi MUKESA Team,%0D%0A%0D%0AI'm interested in purchasing the "${selectedMerchItem.name}".%0D%0A%0D%0APlease provide more details on availability, sizes (if applicable), and payment.%0D%0A%0D%0AThanks!`}
              className="w-full"
            >
              <Button variant="primary" size="lg" className="w-full flex items-center justify-center">
                <EnvelopeIcon className="h-5 w-5 mr-2"/> Email Us About This Item
              </Button>
            </a>
             <Button onClick={closeModal} variant="outline" size="md" className="w-full mt-2 border-mukesa-red text-mukesa-red hover:bg-mukesa-red hover:text-white">
              Close
            </Button>
          </div>
        )}
      </Modal>
    </SectionWrapper>
  );
};

export default MerchPage;