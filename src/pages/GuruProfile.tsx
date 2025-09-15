import { storeSessionRequest } from '@/lib/firestoreHelpers';
import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

// Fallback sample data in case navigation state is missing
type Guru = {
  name: string;
  location: string;
  experience: string;
  rating: number;
};

const fallbackGurus: Record<string, Guru> = {
  'Aarav Sharma': { name: 'Aarav Sharma', location: 'Delhi', experience: '8 years', rating: 4.9 },
  'Meera Patel': { name: 'Meera Patel', location: 'Mumbai', experience: '5 years', rating: 4.7 },
  'Ravi Iyer': { name: 'Ravi Iyer', location: 'Chennai', experience: '12 years', rating: 4.8 },
  'Ananya Joshi': { name: 'Ananya Joshi', location: 'Pune', experience: '7 years', rating: 4.6 },
  'Sonal Verma': { name: 'Sonal Verma', location: 'Jaipur', experience: '10 years', rating: 4.9 },
  'Rahul Singh': { name: 'Rahul Singh', location: 'Lucknow', experience: '6 years', rating: 4.5 },
  'Priya Nair': { name: 'Priya Nair', location: 'Kochi', experience: '9 years', rating: 4.8 },
  'Amit Kumar': { name: 'Amit Kumar', location: 'Patna', experience: '4 years', rating: 4.4 },
  'Dr. Kavita Rao': { name: 'Dr. Kavita Rao', location: 'Bangalore', experience: '15 years', rating: 4.9 },
  'Suresh Pillai': { name: 'Suresh Pillai', location: 'Trivandrum', experience: '11 years', rating: 4.7 },
  'Shubham Tripathi': { name: 'Shubham Tripathi', location: 'Varanasi', experience: '13 years', rating: 4.8 },
  'Neha Desai': { name: 'Neha Desai', location: 'Ahmedabad', experience: '6 years', rating: 4.5 },
  'Swami Omkar': { name: 'Swami Omkar', location: 'Rishikesh', experience: '20 years', rating: 5.0 },
  'Pooja Shah': { name: 'Pooja Shah', location: 'Surat', experience: '7 years', rating: 4.6 },
  'Lata Kumari': { name: 'Lata Kumari', location: 'Bhopal', experience: '14 years', rating: 4.7 },
  'Manoj Das': { name: 'Manoj Das', location: 'Kolkata', experience: '8 years', rating: 4.5 },
  'Geeta Menon': { name: 'Geeta Menon', location: 'Hyderabad', experience: '10 years', rating: 4.8 },
  'Vikram Sethi': { name: 'Vikram Sethi', location: 'Indore', experience: '5 years', rating: 4.4 },
  'Rina Paul': { name: 'Rina Paul', location: 'Kolkata', experience: '9 years', rating: 4.7 },
  'Ajay Meena': { name: 'Ajay Meena', location: 'Udaipur', experience: '6 years', rating: 4.5 },
};

const GuruProfile: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  // Try to get guru data from navigation state, else fallback
  const guru: Guru = location.state?.guru || fallbackGurus[name || ''] || { name: name || '', location: 'Unknown', experience: '-', rating: 0 };

  // Request session state
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  // UI-only: no backend
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
     try {
    await storeSessionRequest({
      guruName: guru.name,
      userName: form.name,
      userEmail: form.email,
      message: form.message,
    });
      setSubmitted(true);
      setShowForm(false);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
    alert("Failed to send request. Please try again.");
  }
  setLoading(false);
};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-100 py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg border border-orange-200 relative">
        <button onClick={() => navigate(-1)} className="mb-4 text-orange-600 hover:underline">&larr; Back</button>
        <h1 className="text-3xl font-bold text-orange-700 mb-2">{guru.name}</h1>
        <div className="text-lg text-gray-700 mb-2">{guru.location}</div>
        <div className="mb-2">Experience: <span className="font-semibold">{guru.experience}</span></div>
        <div className="mb-4">Rating: <span className="text-yellow-500 font-bold">★ {guru.rating}</span></div>
        <div className="text-gray-600 mb-6">This is a sample profile. You can add more details here, such as bio, skills, schedule, contact, etc.</div>
        <button
          className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
          onClick={() => setShowForm(true)}
        >
          Request Session
        </button>

        {/* Request Session Modal */}
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md border border-orange-200 relative">
              <button className="absolute top-2 right-3 text-gray-400 hover:text-orange-500 text-xl" onClick={() => setShowForm(false)}>&times;</button>
              <h2 className="text-xl font-bold mb-4 text-orange-700">Request a Session with {guru.name}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                  disabled={loading}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                  disabled={loading}
                />
                <textarea
                  name="message"
                  placeholder="Message (optional)"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                  disabled={loading}
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition font-semibold"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Request'}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Success message */}
        {submitted && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded text-green-800 text-center">
            Session request sent to {guru.name}! The guru will contact you soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default GuruProfile;
