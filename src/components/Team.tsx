// import React from 'react';
// import { Linkedin, Twitter, Mail } from 'lucide-react';

// const Team = () => {
//   const team = [
//     {
//       name: 'Sarah Chen',
//       role: 'Managing Partner',
//       bio: 'Former VP at Google Ventures with 15+ years in tech investing',
//       image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
//       social: { linkedin: '#', twitter: '#', email: 'sarah@oaktree.com' }
//     },
//     {
//       name: 'Michael Rodriguez',
//       role: 'Partner, Technology',
//       bio: 'Ex-CTO of three unicorn startups, expert in scalable systems',
//       image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
//       social: { linkedin: '#', twitter: '#', email: 'michael@oaktree.com' }
//     },
//     {
//       name: 'Emily Johnson',
//       role: 'Partner, Operations',
//       bio: 'Former McKinsey consultant specializing in growth strategy',
//       image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
//       social: { linkedin: '#', twitter: '#', email: 'emily@oaktree.com' }
//     },
//     {
//       name: 'David Kim',
//       role: 'Partner, Finance',
//       bio: 'Investment banking veteran with expertise in M&A and exits',
//       image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
//       social: { linkedin: '#', twitter: '#', email: 'david@oaktree.com' }
//     },
//     {
//       name: 'Lisa Thompson',
//       role: 'Principal, Marketing',
//       bio: 'Growth marketing expert with track record at high-growth startups',
//       image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
//       social: { linkedin: '#', twitter: '#', email: 'lisa@oaktree.com' }
//     },
//     {
//       name: 'James Wilson',
//       role: 'Principal, Product',
//       bio: 'Former Head of Product at Stripe, expert in product-market fit',
//       image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
//       social: { linkedin: '#', twitter: '#', email: 'james@oaktree.com' }
//     }
//   ];

//   return (
//     <section id="team" className="py-20 bg-gray-50 ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Meet Our
//             <span className="text-emerald-800"> Expert Team</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Our diverse team brings together decades of experience from the world's leading 
//             technology companies, investment firms, and successful startups.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {team.map((member, index) => (
//             <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
//               <div className="relative mb-6">
//                 <img 
//                   src={member.image} 
//                   alt={member.name}
//                   className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto border-4 border-transparent group-hover:border-emerald-200 transition-colors duration-300"></div>
//               </div>
              
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
//               <p className="text-emerald-800 font-semibold mb-4">{member.role}</p>
//               <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
              
//               <div className="flex items-center justify-center space-x-4">
//                 <a 
//                   href={member.social.linkedin}
//                   className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-100 transition-colors group"
//                 >
//                   <Linkedin className="text-gray-600 group-hover:text-emerald-800 transition-colors" size={18} />
//                 </a>
//                 <a 
//                   href={member.social.twitter}
//                   className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-100 transition-colors group"
//                 >
//                   <Twitter className="text-gray-600 group-hover:text-emerald-800 transition-colors" size={18} />
//                 </a>
//                 <a 
//                   href={`mailto:${member.social.email}`}
//                   className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-100 transition-colors group"
//                 >
//                   <Mail className="text-gray-600 group-hover:text-emerald-800 transition-colors" size={18} />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-16">
//           <div className="bg-emerald-50 rounded-2xl p-8 max-w-4xl mx-auto">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               We're always looking for exceptional talent to join our mission of building 
//               the next generation of industry-leading companies.
//             </p>
//             <button className="bg-emerald-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors">
//               View Open Positions
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;