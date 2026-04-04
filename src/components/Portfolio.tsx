// import React from 'react';
// import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';

// const Portfolio = () => {
//   const companies = [
//     {
//       name: 'TechFlow',
//       category: 'SaaS Platform',
//       description: 'AI-powered workflow automation for enterprise teams',
//       metrics: { users: '50K+', revenue: '$10M ARR', growth: '300%' },
//       status: 'Series B',
//       image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
//     },
//     {
//       name: 'GreenLogistics',
//       category: 'Supply Chain',
//       description: 'Sustainable transportation and logistics optimization',
//       metrics: { users: '200+', revenue: '$5M ARR', growth: '250%' },
//       status: 'Series A',
//       image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg'
//     },
//     {
//       name: 'HealthBridge',
//       category: 'HealthTech',
//       description: 'Digital health platform connecting patients and providers',
//       metrics: { users: '100K+', revenue: '$8M ARR', growth: '400%' },
//       status: 'Series B',
//       image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg'
//     },
//     {
//       name: 'DataVault',
//       category: 'CyberSecurity',
//       description: 'Enterprise data protection and privacy solutions',
//       metrics: { users: '500+', revenue: '$15M ARR', growth: '180%' },
//       status: 'Series C',
//       image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
//     },
//     {
//       name: 'EcoEnergy',
//       category: 'CleanTech',
//       description: 'Smart grid technology for renewable energy management',
//       metrics: { users: '75+', revenue: '$3M ARR', growth: '320%' },
//       status: 'Seed',
//       image: 'https://images.pexels.com/photos/9875428/pexels-photo-9875428.jpeg'
//     },
//     {
//       name: 'FinanceAI',
//       category: 'FinTech',
//       description: 'Machine learning-driven financial advisory platform',
//       metrics: { users: '25K+', revenue: '$6M ARR', growth: '280%' },
//       status: 'Series A',
//       image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg'
//     }
//   ];

//   return (
//     <section id="portfolio" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Our Portfolio
//             <span className="text-emerald-800"> Success Stories</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             We're proud to have partnered with exceptional entrepreneurs to build 
//             companies that are reshaping industries and creating lasting value.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {companies.map((company, index) => (
//             <div key={index} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//               <div className="relative h-48 overflow-hidden">
//                 <img 
//                   src={company.image} 
//                   alt={company.name}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute top-4 right-4">
//                   <span className="bg-emerald-800 text-white px-3 py-1 rounded-full text-sm font-medium">
//                     {company.status}
//                   </span>
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-2xl font-bold text-gray-900">{company.name}</h3>
//                   <ExternalLink className="text-gray-400 group-hover:text-emerald-800 transition-colors" size={20} />
//                 </div>
                
//                 <p className="text-amber-600 font-medium mb-3">{company.category}</p>
//                 <p className="text-gray-600 mb-6 leading-relaxed">{company.description}</p>
                
//                 <div className="grid grid-cols-3 gap-4 mb-4">
//                   <div className="text-center">
//                     <div className="flex items-center justify-center mb-1">
//                       <Users size={16} className="text-emerald-800 mr-1" />
//                     </div>
//                     <div className="text-sm font-bold text-gray-900">{company.metrics.users}</div>
//                     <div className="text-xs text-gray-600">Users</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="flex items-center justify-center mb-1">
//                       <DollarSign size={16} className="text-emerald-800 mr-1" />
//                     </div>
//                     <div className="text-sm font-bold text-gray-900">{company.metrics.revenue}</div>
//                     <div className="text-xs text-gray-600">Revenue</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="flex items-center justify-center mb-1">
//                       <TrendingUp size={16} className="text-emerald-800 mr-1" />
//                     </div>
//                     <div className="text-sm font-bold text-gray-900">{company.metrics.growth}</div>
//                     <div className="text-xs text-gray-600">Growth</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-16">
//           <button className="bg-amber-400 text-emerald-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-300 transition-colors">
//             View All Companies
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;