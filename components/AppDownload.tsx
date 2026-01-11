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
  Smartphone
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
    balance: 25000.50,
    lastLogin: '2 mins ago'
  };

  const quickActionButtons = [
    { id: 'deposit', label: 'Deposit', icon: 'arrow-down-circle', color: 'green' },
    { id: 'withdraw', label: 'Withdraw', icon: 'arrow-up-circle', color: 'red' },
    { id: 'transfer', label: 'Transfer', icon: 'repeat', color: 'blue' },
    { id: 'repay', label: 'Repay Loan', icon: 'credit-card', color: 'purple' }
  ];

  const services = [
    { id: 'membership', label: 'Membership Info', icon: <User className="w-6 h-6" /> },
    { id: 'calculator', label: 'Loan Calculator', icon: <Percent className="w-6 h-6" /> },
    { id: 'shares', label: 'Buy Shares', icon: <PieChart className="w-6 h-6" /> },
    { id: 'dividends', label: 'Dividends', icon: <BarChart2 className="w-6 h-6" /> },
    { id: 'apply-loan', label: 'Apply Loan', icon: <DollarSign className="w-6 h-6" /> },
    { id: 'statements', label: 'Statements', icon: <FileText className="w-6 h-6" /> },
    { id: 'payment-method', label: 'Payment', icon: <CreditCard className="w-6 h-6" /> },
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
      <div className="flex justify-between items-center px-6 py-2 bg-yellow-500 text-white text-xs">
        <span>9:41</span>
        <div className="flex space-x-1">
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-yellow-500 text-white p-4 flex-shrink-0">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-xl font-bold">ETHIO SACCOS</h1>
            <p className="text-sm opacity-80">Welcome, {user.name}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full bg-yellow-400 bg-opacity-30">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-yellow-400 bg-opacity-30">
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
              <p className="text-sm opacity-80">Account Number</p>
              <p className="font-medium">{user.accountNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-80">Available Balance</p>
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
              <button className="text-xs bg-white text-yellow-600 px-3 py-1 rounded-full">
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
              <div className={`w-10 h-10 rounded-full bg-${action.color}-50 flex items-center justify-center mb-1`}>
                <span className={`text-${action.color}-500`}>
                  {action.icon === 'arrow-down-circle' && '↓'}
                  {action.icon === 'arrow-up-circle' && '↑'}
                  {action.icon === 'repeat' && '⇄'}
                  {action.icon === 'credit-card' && '💳'}
                </span>
              </div>
              <span className="text-xs text-center">{action.label}</span>
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
            <span className="text-xs mt-1">{item.label}</span>
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
              <div className="text-center mb-16 sm:mb-20 space-y-4">
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
                Business Success
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
                  className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl transition-colors whitespace-nowrap"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.6 1.5H20.4C21.27 1.5 22 2.23 22 3.1V20.9C22 21.77 21.27 22.5 20.4 22.5H3.6C2.73 22.5 2 21.77 2 20.9V3.1C2 2.23 2.73 1.5 3.6 1.5Z" fill="#EA4335"/>
                    <path d="M12 12.5H20.4C20.4 12.5 16.5 7.5 12 7.5C7.5 7.5 3.6 12.5 3.6 12.5L5.5 14.5L8.5 11.5L12 15.5L15.5 11.5L18.5 14.5L20.4 12.5H12Z" fill="white"/>
                  </svg>
                  <span>Download on Google Play</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl transition-colors whitespace-nowrap"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.05 20.28C16.07 21.23 15 20.55 15 19.13V17.08C15 15.5 16.35 14.15 17.93 14.15C17.97 14.15 18.03 14.15 18.07 14.15C18.68 14.19 19.23 14.37 19.71 14.7C19.45 15.2 19.24 15.73 19.07 16.27C18.7 17.8 18.7 20.21 17.05 20.28Z" fill="#000000"/>
                    <path d="M18.93 12.15C18.38 12.21 17.8 12.09 17.27 11.8C16.03 11.16 15.47 9.93 15.47 9.93C15.47 9.93 14.77 8.55 15.81 7.15C16.38 6.4 17.12 6.26 17.65 6.25C17.71 6.25 17.76 6.25 17.82 6.25C17.74 6.32 17.67 6.4 17.6 6.49C16.95 7.27 17.14 8.47 17.22 8.85C17.45 9.85 18.11 10.71 19.05 11.09C19.67 11.34 20.3 11.38 20.81 11.31C20.93 11.29 21.05 11.27 21.16 11.25C21 10.36 20.46 9.56 19.77 8.99C19.15 8.47 18.75 7.69 18.75 6.81C18.75 6.24 18.9 5.7 19.16 5.23C17.89 5.69 17 6.75 17 8.02C17 9.3 17.97 10.4 19.26 10.81C19.58 10.91 19.77 11.23 19.7 11.56C19.63 11.89 19.32 12.1 19 12.07C18.98 12.07 18.95 12.07 18.93 12.07V12.15Z" fill="#000000"/>
                    <path d="M16.5 15.75C15.5 19.75 12 21.5 12 21.5C12 21.5 6 19.5 4 12.5C2.5 7.5 4.5 3.5 6.5 2C6.5 2 8 3.5 10.5 3.5C13 3.5 13.68 2 16.5 2C17.57 2 18.46 2.07 19.18 2.2C18.5 2.54 17.86 3.2 17.5 4.1C16.36 2.93 14.7 4.18 15.03 5.55C15.22 6.33 16.08 6.82 16.92 7.31C19.17 8.62 20.5 10.26 20.5 12.25C20.5 13.95 19.5 15.75 16.5 15.75Z" fill="#000000"/>
                  </svg>
                  <span>Download on App Store</span>
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