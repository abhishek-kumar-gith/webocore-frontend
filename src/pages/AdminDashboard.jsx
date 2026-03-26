import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { adminAPI, contactAPI } from '../api/client';
import { LogOut, Trash2 } from 'lucide-react';

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('messages');
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      fetchContacts();
    }
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await contactAPI.getAll();
      setContacts(response.data.data);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await adminAPI.login(loginData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('admin', JSON.stringify(response.data.admin));
      setIsLoggedIn(true);
      setLoginData({ email: '', password: '' });
      setTimeout(() => fetchContacts(), 500);
    } catch (error) {
      alert('Login failed: ' + (error.response?.data?.message || 'Unknown error'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    setIsLoggedIn(false);
    setContacts([]);
    setSelectedContact(null);
    navigate('/');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;

    try {
      await contactAPI.delete(id);
      setContacts(contacts.filter((c) => c._id !== id));
      setSelectedContact(null);
    } catch (error) {
      alert('Delete failed: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 max-w-md w-full mx-4"
        >
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Admin Login</h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              required
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              required
              className="input-field"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold hover:shadow-lg disabled:opacity-50 transition-all"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="text-slate-400 text-sm text-center mt-4">
            Default: admin@webocore.com / admin123
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-900/20 border border-red-500 text-red-400 rounded-lg hover:bg-red-900/40 transition-all"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-slate-700">
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-3 font-semibold transition-all ${
              activeTab === 'messages'
                ? 'border-b-2 border-primary-500 text-primary-400'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Messages ({contacts.length})
          </button>
        </div>

        {/* Content */}
        {activeTab === 'messages' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Messages List */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 overflow-hidden max-h-[600px] overflow-y-auto">
                {contacts.length === 0 ? (
                  <div className="p-6 text-center text-slate-400">
                    No messages yet
                  </div>
                ) : (
                  <div>
                    {contacts.map((contact) => (
                      <motion.div
                        key={contact._id}
                        whileHover={{ backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                        onClick={() => setSelectedContact(contact)}
                        className={`p-4 border-b border-slate-700 cursor-pointer transition-all ${
                          selectedContact?._id === contact._id
                            ? 'bg-primary-900/30 border-l-2 border-l-primary-500'
                            : ''
                        }`}
                      >
                        <p className="font-semibold text-white truncate">{contact.name}</p>
                        <p className="text-sm text-slate-400 truncate">{contact.email}</p>
                        <p className="text-xs text-slate-500 mt-1">
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Message Detail */}
            <div className="lg:col-span-2">
              {selectedContact ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedContact.name}</h2>
                      <p className="text-slate-400">{selectedContact.email}</p>
                      {selectedContact.phone && (
                        <p className="text-slate-400">{selectedContact.phone}</p>
                      )}
                    </div>
                    <button
                      onClick={() => handleDelete(selectedContact._id)}
                      className="p-2 bg-red-900/20 border border-red-500 text-red-400 rounded-lg hover:bg-red-900/40 transition-all"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  {selectedContact.subject && (
                    <div className="mb-6">
                      <label className="text-sm text-slate-400">Subject</label>
                      <p className="text-white font-semibold">{selectedContact.subject}</p>
                    </div>
                  )}

                  <div>
                    <label className="text-sm text-slate-400">Message</label>
                    <div className="mt-2 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                      <p className="text-slate-300 whitespace-pre-wrap">{selectedContact.message}</p>
                    </div>
                  </div>

                  <div className="mt-6 text-xs text-slate-500">
                    Received on {new Date(selectedContact.createdAt).toLocaleString()}
                  </div>
                </motion.div>
              ) : (
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 text-center text-slate-400">
                  Select a message to view details
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
