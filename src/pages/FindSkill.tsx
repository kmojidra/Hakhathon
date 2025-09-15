
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const skillsList = [
  'Yoga',
  'Classical Music',
  'Painting',
  'Vedic Maths',
  'Ayurveda',
  'Sanskrit',
  'Meditation',
  'Handicrafts',
  'Storytelling',
  'Folk Dance',
];

// Sample gurus for each skill
const gurusBySkill: Record<string, Array<{ name: string; location: string; experience: string; rating: number }>> = {
  'Yoga': [
    { name: 'Aarav Sharma', location: 'Delhi', experience: '8 years', rating: 4.9 },
    { name: 'Meera Patel', location: 'Mumbai', experience: '5 years', rating: 4.7 },
  ],
  'Classical Music': [
    { name: 'Ravi Iyer', location: 'Chennai', experience: '12 years', rating: 4.8 },
    { name: 'Ananya Joshi', location: 'Pune', experience: '7 years', rating: 4.6 },
  ],
  'Painting': [
    { name: 'Sonal Verma', location: 'Jaipur', experience: '10 years', rating: 4.9 },
    { name: 'Rahul Singh', location: 'Lucknow', experience: '6 years', rating: 4.5 },
  ],
  'Vedic Maths': [
    { name: 'Priya Nair', location: 'Kochi', experience: '9 years', rating: 4.8 },
    { name: 'Amit Kumar', location: 'Patna', experience: '4 years', rating: 4.4 },
  ],
  'Ayurveda': [
    { name: 'Dr. Kavita Rao', location: 'Bangalore', experience: '15 years', rating: 4.9 },
    { name: 'Suresh Pillai', location: 'Trivandrum', experience: '11 years', rating: 4.7 },
  ],
  'Sanskrit': [
    { name: 'Shubham Tripathi', location: 'Varanasi', experience: '13 years', rating: 4.8 },
    { name: 'Neha Desai', location: 'Ahmedabad', experience: '6 years', rating: 4.5 },
  ],
  'Meditation': [
    { name: 'Swami Omkar', location: 'Rishikesh', experience: '20 years', rating: 5.0 },
    { name: 'Pooja Shah', location: 'Surat', experience: '7 years', rating: 4.6 },
  ],
  'Handicrafts': [
    { name: 'Lata Kumari', location: 'Bhopal', experience: '14 years', rating: 4.7 },
    { name: 'Manoj Das', location: 'Kolkata', experience: '8 years', rating: 4.5 },
  ],
  'Storytelling': [
    { name: 'Geeta Menon', location: 'Hyderabad', experience: '10 years', rating: 4.8 },
    { name: 'Vikram Sethi', location: 'Indore', experience: '5 years', rating: 4.4 },
  ],
  'Folk Dance': [
    { name: 'Rina Paul', location: 'Kolkata', experience: '9 years', rating: 4.7 },
    { name: 'Ajay Meena', location: 'Udaipur', experience: '6 years', rating: 4.5 },
  ],
};


const FindSkill: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredSkills = skillsList.filter(skill =>
    skill.toLowerCase().includes(search.toLowerCase())
  );

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(skill);
  };

  const handleViewProfile = (guru: any) => {
    // Navigate to /guru/:name, pass guru data in state
    navigate(`/guru/${encodeURIComponent(guru.name)}`, { state: { guru } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-bold text-orange-700 mb-6">Find a Skill</h1>
      <input
        type="text"
        placeholder="Search for a skill..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full max-w-md px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 mb-8 shadow"
      />
      <ul className="w-full max-w-md space-y-3">
        {filteredSkills.length > 0 ? (
          filteredSkills.map(skill => (
            <li
              key={skill}
              className={`bg-white rounded-lg px-6 py-3 shadow hover:bg-orange-50 transition-colors border border-orange-100 cursor-pointer ${selectedSkill === skill ? 'ring-2 ring-orange-400' : ''}`}
              onClick={() => handleSkillClick(skill)}
            >
              {skill}
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center">No skills found.</li>
        )}
      </ul>

      {/* Show gurus for selected skill */}
      {selectedSkill && (
        <div className="w-full max-w-2xl mt-10 bg-white rounded-xl shadow-lg p-6 border border-orange-200">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">Gurus for {selectedSkill}</h2>
          <ul className="space-y-4">
            {(gurusBySkill[selectedSkill] || []).map((guru, idx) => (
              <li key={idx} className="flex flex-col md:flex-row md:items-center md:justify-between bg-orange-50 rounded-lg p-4 border border-orange-100">
                <div>
                  <div className="font-bold text-lg text-orange-800">{guru.name}</div>
                  <div className="text-sm text-gray-600">{guru.location} &bull; {guru.experience} experience</div>
                </div>
                <div className="mt-2 md:mt-0 flex items-center gap-2">
                  <span className="text-yellow-500 font-bold">★ {guru.rating}</span>
                  <button
                    className="ml-4 px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
                    onClick={() => handleViewProfile(guru)}
                  >
                    View Profile
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FindSkill;
