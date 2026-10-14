import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTrash2, FiEdit2, FiCheck, FiX } from "react-icons/fi";

// --- Mock Data ---
const initialBookings = [
  { id: 1, name: "Kwame & Abena", phone: "+233 55 123 4567", type: "Wedding", date: "2024-11-15", guests: 200, status: "Confirmed" },
  { id: 2, name: "Corporate Tech Event", phone: "+233 24 987 6543", type: "Event", date: "2024-10-20", guests: 150, status: "Pending" },
  { id: 3, name: "Family Portrait", phone: "+233 20 111 2222", type: "Portrait", date: "2024-10-25", guests: 5, status: "Confirmed" },
];

const initialMedia = [
  { id: 1, title: "Golden Hour Wedding", category: "Wedding", type: "Image", url: "https://images.pixieset.com/68754439/d186debc355e67f9557257e015b4b5d1-large.jpg" },
  { id: 2, name: "Corporate Conference", category: "Event", type: "Video", url: "https://images.pixieset.com/68754439/1bc03356c90f79ee6e3362c875311029-large.jpg" },
  { id: 3, name: "Studio Portrait", category: "Portrait", type: "Image", url: "https://images.pixieset.com/68754439/ec9ac9c7dcd8512886c676b38dd464c0-large.jpg" },
];

const initialPrices = [
  { id: 1, service: "Wedding Photography", price: "GH₵ 3,500" },
  { id: 2, service: "Portrait Session", price: "GH₵ 800" },
  { id: 3, service: "Event Photography", price: "GH₵ 1,200" },
  { id: 4, service: "Commercial Shoot", price: "GH₵ 2,000" },
  { id: 5, service: "Videography", price: "GH₵ 2,500" },
];

const initialMessages = [
  { id: 1, name: "Samuel Osei", email: "samuel@example.com", date: "Oct 1, 2024", subject: "Wedding Enquiry", report: "Hello, I wanted to know if you are available on December 12th for a 2-day wedding." },
  { id: 2, name: "Grace Amoah", email: "grace@example.com", date: "Sep 28, 2024", subject: "Portrait Pricing", report: "Do you offer makeup services along with your portrait packages?" },
];


export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  
  const [bookings] = useState(initialBookings);
  const [mediaItems, setMediaItems] = useState(initialMedia);
  const [prices, setPrices] = useState(initialPrices);
  const [messages] = useState(initialMessages);

  // New Media States
  const [mediaTitle, setMediaTitle] = useState("");
  const [mediaCategory, setMediaCategory] = useState("Wedding");
  const [mediaType, setMediaType] = useState("Image");
  const [mediaFile, setMediaFile] = useState(null);

  // Price Edit States
  const [editingPriceId, setEditingPriceId] = useState(null);
  const [editingPriceValue, setEditingPriceValue] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Try 'admin123'");
    }
  };

  const handleMediaSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      title: mediaTitle,
      category: mediaCategory,
      type: mediaType,
      url: "https://images.pixieset.com/68754439/d186debc355e67f9557257e015b4b5d1-large.jpg" // Placeholder
    };
    setMediaItems([newItem, ...mediaItems]);
    alert(`Successfully posted "${mediaTitle}"!`);
    setMediaTitle("");
    setMediaFile(null);
  };

  const handleRemoveMedia = (id) => {
    setMediaItems(mediaItems.filter(item => item.id !== id));
  };

  const handleEditPrice = (id, currentPrice) => {
    setEditingPriceId(id);
    setEditingPriceValue(currentPrice);
  };

  const handleSavePrice = (id) => {
    setPrices(prices.map(p => p.id === id ? { ...p, price: editingPriceValue } : p));
    setEditingPriceId(null);
  };

  if (!isAuthenticated) {
    return (
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-lg mx-auto min-h-[70vh] flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full bg-white p-8 md:p-12 border border-neutral-200 shadow-sm"
        >
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl mb-2">Admin Access</h1>
            <p className="text-neutral-500 text-sm">Please enter the admin password to continue.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-900 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900 transition-colors"
                placeholder="Enter password..."
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-neutral-900 text-white py-3 text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors"
            >
              Login
            </button>
          </form>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl mb-2">Admin Dashboard</h1>
            <p className="text-neutral-500">Welcome back! Manage your content and bookings here.</p>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="px-5 py-2 border border-neutral-200 text-sm hover:bg-neutral-50 transition-colors"
          >
            Logout
          </button>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-neutral-200 mb-10 overflow-x-auto">
          {[
            { id: "overview", label: "Overview" },
            { id: "media", label: "Manage Media" },
            { id: "prices", label: "Change Prices" },
            { id: "bookings", label: "Bookings" },
            { id: "reports", label: "Customer Reports" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium tracking-wide whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "border-b-2 border-neutral-900 text-neutral-900"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-neutral-50 p-6 border border-neutral-100">
                  <h3 className="text-sm text-neutral-500 uppercase tracking-wider mb-2">Total Bookings</h3>
                  <p className="text-3xl font-serif">{bookings.length}</p>
                </div>
                <div className="bg-neutral-50 p-6 border border-neutral-100">
                  <h3 className="text-sm text-neutral-500 uppercase tracking-wider mb-2">Customer Messages</h3>
                  <p className="text-3xl font-serif">{messages.length}</p>
                </div>
                <div className="bg-neutral-50 p-6 border border-neutral-100">
                  <h3 className="text-sm text-neutral-500 uppercase tracking-wider mb-2">Portfolio Media</h3>
                  <p className="text-3xl font-serif">{mediaItems.length}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* MANAGE MEDIA */}
          {activeTab === "media" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                
                {/* Upload Form */}
                <div className="lg:col-span-1">
                  <div className="bg-white border border-neutral-200 p-8 sticky top-24">
                    <h2 className="text-xl font-serif mb-6">Post New Media</h2>
                    <form onSubmit={handleMediaSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input type="text" value={mediaTitle} onChange={e => setMediaTitle(e.target.value)} required className="w-full px-3 py-2 border border-neutral-300" />
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label className="block text-sm font-medium mb-1">Type</label>
                          <select value={mediaType} onChange={e => setMediaType(e.target.value)} className="w-full px-3 py-2 border border-neutral-300">
                            <option>Image</option>
                            <option>Video</option>
                          </select>
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium mb-1">Category</label>
                          <select value={mediaCategory} onChange={e => setMediaCategory(e.target.value)} className="w-full px-3 py-2 border border-neutral-300">
                            <option>Wedding</option>
                            <option>Portrait</option>
                            <option>Event</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">File</label>
                        <input type="file" accept="image/*,video/*" required onChange={e => setMediaFile(e.target.files[0])} className="w-full text-sm text-neutral-500 file:mr-3 file:py-1 file:px-3 file:border-0 file:bg-neutral-100" />
                      </div>
                      <button type="submit" className="w-full bg-neutral-900 text-white py-2 text-sm font-medium mt-4">Upload</button>
                    </form>
                  </div>
                </div>

                {/* Media Grid */}
                <div className="lg:col-span-2">
                  <h2 className="text-xl font-serif mb-6">Live Gallery ({mediaItems.length})</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <AnimatePresence>
                      {mediaItems.map((item) => (
                        <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="relative group rounded overflow-hidden border border-neutral-200">
                          <img src={item.url} alt={item.title || item.name} className="w-full h-40 object-cover" />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                            <button onClick={() => handleRemoveMedia(item.id)} className="self-end bg-red-600 text-white p-2 rounded-full hover:bg-red-700" title="Remove Media">
                              <FiTrash2 size={16} />
                            </button>
                            <div>
                              <p className="text-white text-sm font-medium truncate">{item.title || item.name}</p>
                              <p className="text-white/70 text-xs">{item.type} • {item.category}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* CHANGE PRICES */}
          {activeTab === "prices" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="max-w-3xl bg-white border border-neutral-200 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="px-6 py-4 font-medium text-neutral-900">Service</th>
                      <th className="px-6 py-4 font-medium text-neutral-900 w-48">Starting Price</th>
                      <th className="px-6 py-4 font-medium text-neutral-900 text-right w-24">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {prices.map((item) => (
                      <tr key={item.id} className="hover:bg-neutral-50">
                        <td className="px-6 py-4">{item.service}</td>
                        <td className="px-6 py-4 font-serif">
                          {editingPriceId === item.id ? (
                            <input
                              type="text"
                              value={editingPriceValue}
                              onChange={(e) => setEditingPriceValue(e.target.value)}
                              className="w-full px-2 py-1 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                              autoFocus
                            />
                          ) : (
                            item.price
                          )}
                        </td>
                        <td className="px-6 py-4 text-right">
                          {editingPriceId === item.id ? (
                            <div className="flex justify-end gap-2">
                              <button onClick={() => handleSavePrice(item.id)} className="text-green-600 hover:text-green-800 p-1"><FiCheck size={18}/></button>
                              <button onClick={() => setEditingPriceId(null)} className="text-neutral-400 hover:text-neutral-600 p-1"><FiX size={18}/></button>
                            </div>
                          ) : (
                            <button onClick={() => handleEditPrice(item.id, item.price)} className="text-neutral-400 hover:text-neutral-900 p-1">
                              <FiEdit2 size={16} />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* BOOKINGS */}
          {activeTab === "bookings" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="bg-white border border-neutral-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-neutral-50 border-b border-neutral-200">
                      <tr>
                        <th className="px-6 py-4 font-medium text-neutral-900">Client</th>
                        <th className="px-6 py-4 font-medium text-neutral-900">Phone Number</th>
                        <th className="px-6 py-4 font-medium text-neutral-900">Type</th>
                        <th className="px-6 py-4 font-medium text-neutral-900">Date</th>
                        <th className="px-6 py-4 font-medium text-neutral-900">Expected Guests</th>
                        <th className="px-6 py-4 font-medium text-neutral-900">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-neutral-50 transition-colors">
                          <td className="px-6 py-4 text-neutral-900 font-medium">{booking.name}</td>
                          <td className="px-6 py-4 font-mono text-neutral-500">{booking.phone}</td>
                          <td className="px-6 py-4 text-neutral-500">{booking.type}</td>
                          <td className="px-6 py-4 text-neutral-500">{booking.date}</td>
                          <td className="px-6 py-4 text-neutral-900">{booking.guests}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-sm ${
                              booking.status === "Confirmed" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* CUSTOMER REPORTS */}
          {activeTab === "reports" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {messages.map((msg) => (
                  <div key={msg.id} className="bg-white border border-neutral-200 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-serif text-lg">{msg.name}</h3>
                        <a href={`mailto:${msg.email}`} className="text-sm text-neutral-500 hover:text-neutral-900">{msg.email}</a>
                      </div>
                      <span className="text-xs text-neutral-400">{msg.date}</span>
                    </div>
                    <div className="bg-neutral-50 p-4 border border-neutral-100 rounded-sm">
                      <p className="text-sm font-medium text-neutral-900 mb-1">Subject: {msg.subject}</p>
                      <p className="text-sm text-neutral-600 leading-relaxed">"{msg.report}"</p>
                    </div>
                    <button className="mt-4 text-xs font-medium uppercase tracking-wider text-neutral-400 hover:text-neutral-900 transition-colors">
                      Mark as Read / Reply
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </motion.div>
    </section>
  );
}
