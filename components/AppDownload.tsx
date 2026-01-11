import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Clock,
  CreditCard,
  MoreHorizontal,
  ArrowDown,
  ArrowUp,
  DollarSign,
  Percent,
  FileText,
  User,
  PieChart,
  BarChart2,
  Settings,
  Bell,
  X,
  ShieldCheck,
  Smartphone,
  Apple
} from 'lucide-react';

const AppDownload: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showBalance, setShowBalance] = useState(false);
  const [isTransactionOpen, setIsTransactionOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [transactionDetails, setTransactionDetails] = useState({
    type: '',
    amount: '',
    recipient: ''
  });

  // Check if mobile on mount
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Mock data
  const user = {
    name: 'Abenezer Kifle',
    accountNumber: '1213123123123123',
    balance: 25000,
    lastLogin: '2 mins ago'
  };

  const quickActionButtons = [
    { id: 'deposit', label: 'Deposit', icon: '↓', color: 'green', bgColor: 'bg-green-100', textColor: 'text-green-600' },
    { id: 'withdraw', label: 'Withdraw', icon: '↑', color: 'red', bgColor: 'bg-red-100', textColor: 'text-red-600' },
    { id: 'transfer', label: 'Transfer', icon: '⇄', color: 'blue', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
    { id: 'repay', label: 'Repay Loan', icon: '💳', color: 'purple', bgColor: 'bg-purple-100', textColor: 'text-purple-600' }
  ];

  const services = [
    { id: 'membership', label: 'Membership Info', icon: <User className="w-6 h-6" /> },
    { id: 'calculator', label: 'Loan Calculator', icon: <Percent className="w-6 h-6" /> },
    { id: 'shares', label: 'Buy Shares', icon: <PieChart className="w-6 h-6" /> },
    { id: 'dividends', label: 'Dividends', icon: <BarChart2 className="w-6 h-6" /> },
    { id: 'apply-loan', label: 'Apply Loan', icon: <FileText className="w-6 h-6" /> },
    { id: 'statements', label: 'Statements', icon: <FileText className="w-6 h-6" /> },
    { id: 'payment', label: 'Payment', icon: <CreditCard className="w-6 h-6" /> },
    { id: 'savings', label: 'Savings', icon: <DollarSign className="w-6 h-6" /> },
  ];

  const handleTransactionAction = (type: string) => {
    setTransactionDetails(prev => ({ ...prev, type, amount: '', recipient: '' }));
    setIsTransactionOpen(true);
  };

  // Mobile App Preview Component
  const MobileAppPreview = () => (
    <div className="relative w-full max-w-[375px] h-[700px] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 py-2 bg-yellow-500 text-gray-900 text-xs">
        <span>9:41</span>
        <div className="flex space-x-1">
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-yellow-500 text-gray-900 p-4 flex-shrink-0">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-xl font-bold">ETHIO SACCOS</h1>
            <p className="text-sm text-gray-800">Welcome, {user.name}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="p-2 rounded-full bg-yellow-400 bg-opacity-30"
              aria-label="Notifications"
              type="button"
            >
              <Bell className="w-5 h-5" />
            </button>
            <button
              className="p-2 rounded-full bg-yellow-400 bg-opacity-30"
              aria-label="Settings"
              type="button"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Account Card */}
        <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm">Main Account</span>
            <div className="flex items-center text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>Last login: {user.lastLogin}</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-800">Account Number</p>
              <p className="font-medium">{user.accountNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-800">Available Balance</p>
              <p className="font-bold text-xl">
                {showBalance ? `ETB ${user.balance.toLocaleString()}` : '•••••• ETB'}
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="text-xs bg-white bg-opacity-20 px-3 py-1 rounded-full"
            >
              {showBalance ? 'Hide' : 'Show'} Balance
            </button>
            <div className="flex space-x-2">
              <button className="text-xs bg-white bg-opacity-20 px-3 py-1 rounded-full">
                View Details
              </button>
              <button className="text-xs bg-white text-gray-900 px-3 py-1 rounded-full">
                Top Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4">
        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {quickActionButtons.map((action) => (
            <button
              key={action.id}
              onClick={() => handleTransactionAction(action.id)}
              className="flex flex-col items-center justify-center p-2 bg-white rounded-xl shadow-sm"
            >
              <div className={`w-12 h-12 rounded-full ${action.bgColor} flex items-center justify-center mb-1 border-2 border-dashed ${action.textColor} border-opacity-50`}>
                <span className="text-xl">
                  {action.icon}
                </span>
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">{action.label}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Our Services</h2>
          <div className="grid grid-cols-4 gap-3">
            {services.map((service) => (
              <button
                key={service.id}
                className="flex flex-col items-center justify-center p-3 bg-white rounded-xl shadow-sm h-24"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center mb-2">
                  {service.icon}
                </div>
                <span className="text-xs text-center">{service.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Promo Banner */}
        <div className="bg-yellow-500 bg-opacity-10 border border-yellow-200 rounded-2xl p-4 mb-6">
          <h3 className="font-semibold text-yellow-800 mb-1">Special Offer</h3>
          <p className="text-sm text-yellow-700 mb-3">Get 1% cashback on all loan payments this month!</p>
          <button className="text-xs bg-yellow-500 text-white px-4 py-2 rounded-full">
            Learn More →
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 flex justify-around py-2 px-1">
        {[
          { id: 'home', label: 'Home', icon: <Home className="w-6 h-6" /> },
          { id: 'transactions', label: 'Transactions', icon: <CreditCard className="w-6 h-6" /> },
          { id: 'payments', label: 'Payments', icon: <DollarSign className="w-6 h-6" /> },
          { id: 'more', label: 'More', icon: <MoreHorizontal className="w-6 h-6" /> },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center p-2 ${activeTab === item.id ? 'text-yellow-500' : 'text-gray-500'}`}
          >
            {item.icon}
            <span className="text-xs mt-1 text-gray-800">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );

  if (!isMobile) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Desktop Header */}
        <div className="flex-grow flex items-center bg-white">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header Section */}
              <div className="text-center mb-6 sm:mb-20 space-y-4">
              <div className="flex items-center justify-center gap-2">
                <span className="w-10 h-[2px] bg-red-500"></span>
                <span className="text-[10px] font-black text-red-600 tracking-[0.4em] uppercase">Our Mobile App</span>
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[0.95] max-w-4xl mx-auto">
                <br className="hidden sm:block" /> Your SACCO, now in your pocket
              </h2>
            </div>

            {/* Main Content - Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-center">
              {/* Left Column - Text Content */}
              <div className="lg:col-span-5 space-y-6 py-8">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Designed to work seamlessly anywhere.
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 -ml-1">
                  <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                    <DollarSign className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">Fast Transactions</h3>
                    <p className="text-gray-600 mt-1">Send and receive money instantly with our lightning-fast processing</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 -ml-1">
                  <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                    <CreditCard className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">Smart Loan Management</h3>
                    <p className="text-gray-600 mt-1">Simple loan applications with real-time updates and approval tracking</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 -ml-1">
                  <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                    <ShieldCheck className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">Secure & Reliable</h3>
                    <p className="text-gray-600 mt-1">Bank-level security with end-to-end encryption and regular audits</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a 
                  href="#" 
                  className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors shadow-lg w-full max-w-[240px]"
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.61 1.814L13.792 12 3.61 22.186a1.757 1.757 0 0 1-.61-1.34V3.154c0-.509.217-.99.61-1.34zM6.65 2.573l10.98 9.854a.5.5 0 0 1 0 .748L6.65 21.428a1.25 1.25 0 0 1-.85.322H1.75a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 .75-.75h4.05c.317 0 .622.115.85.322z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] font-semibold uppercase tracking-wide opacity-90">GET IT ON</span>
                    <span className="text-xl font-bold -mt-0.5 tracking-tight">Google Play</span>
                  </div>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors shadow-lg w-full max-w-[240px]"
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] font-semibold uppercase tracking-wide opacity-90">Download on the</span>
                    <span className="text-xl font-bold -mt-0.5 tracking-tight">App Store</span>
                  </div>
                </a>
              </div>
            </div>

              {/* Right Column - Mobile Frame */}
              <div className="lg:col-span-7 relative">
                <div className="flex justify-center lg:justify-end py-8">
                  <div className="relative z-10 transform transition-transform duration-500 hover:scale-105 scale-90 sm:scale-100">
                    <MobileAppPreview />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-100 rounded-full -z-10 opacity-50"></div>
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-50 rounded-full -z-10 opacity-50"></div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile view
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <MobileAppPreview />

      {/* Transaction Modal */}
      <AnimatePresence>
        {isTransactionOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 shadow-2xl z-50"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">
                  {transactionDetails.type === 'deposit' && 'Deposit Funds'}
                  {transactionDetails.type === 'withdraw' && 'Withdraw Funds'}
                  {transactionDetails.type === 'transfer' && 'Transfer Money'}
                  {transactionDetails.type === 'repay' && 'Repay Loan'}
                </h3>
                <button
                  onClick={() => setIsTransactionOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label="Close transaction modal"
                  type="button"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount (ETB)
                  </label>
                  <input
                    type="number"
                    value={transactionDetails.amount}
                    onChange={(e) => setTransactionDetails(prev => ({ ...prev, amount: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="0.00"
                  />
                </div>

                {(transactionDetails.type === 'transfer' || transactionDetails.type === 'repay') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {transactionDetails.type === 'transfer' ? 'Recipient Account' : 'Loan Account'}
                    </label>
                    <input
                      type="text"
                      value={transactionDetails.recipient}
                      onChange={(e) => setTransactionDetails(prev => ({ ...prev, recipient: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder={transactionDetails.type === 'transfer' ? 'Account number' : 'Loan account number'}
                    />
                  </div>
                )}

                <button
                  className="w-full bg-yellow-500 text-white py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
                  onClick={() => {
                    // Handle transaction submission
                    console.log('Transaction details:', transactionDetails);
                    setIsTransactionOpen(false);
                  }}
                >
                  {transactionDetails.type === 'deposit' && 'Deposit'}
                  {transactionDetails.type === 'withdraw' && 'Withdraw'}
                  {transactionDetails.type === 'transfer' && 'Transfer'}
                  {transactionDetails.type === 'repay' && 'Repay'}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTransactionOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppDownload;