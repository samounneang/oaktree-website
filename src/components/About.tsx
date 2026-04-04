// import React from 'react';
// import { Target, Rocket, Users, TrendingUp } from 'lucide-react';

// const About = () => {
//   const stats = [
//     { number: '50+', label: 'Companies Built', icon: Rocket },
//     { number: '$2.5B+', label: 'Portfolio Value', icon: TrendingUp },
//     { number: '200+', label: 'Entrepreneurs Supported', icon: Users },
//     { number: '15+', label: 'Successful Exits', icon: Target }
//   ];

//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Rooted in Excellence, 
//             <span className="text-emerald-800"> Growing Innovation</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Like the mighty Oaktree, we provide strong foundations and nurturing environments 
//             where groundbreaking ideas can grow into industry-defining companies.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//           {stats.map((stat, index) => (
//             <div key={index} className="text-center group">
//               <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
//                 <stat.icon className="text-emerald-800" size={32} />
//               </div>
//               <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
//               <div className="text-gray-600 font-medium">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Philosophy</h3>
//             <div className="space-y-4 text-gray-600 leading-relaxed">
//               <p>
//                 We believe that exceptional companies are built through a combination of 
//                 visionary leadership, strategic guidance, and unwavering support. Our approach 
//                 goes beyond traditional venture capital – we roll up our sleeves and work 
//                 alongside entrepreneurs as true partners.
//               </p>
//               <p>
//                 From ideation to scale, we provide the resources, expertise, and network 
//                 necessary to transform bold visions into market-leading realities. Every 
//                 partnership is built on trust, transparency, and a shared commitment to excellence.
//               </p>
//             </div>
//           </div>
//           <div className="bg-emerald-50 rounded-2xl p-8">
//             <div className="space-y-6">
//               <div className="flex items-start space-x-4">
//                 <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <div className="w-3 h-3 bg-emerald-800 rounded-full"></div>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-2">Deep Industry Expertise</h4>
//                   <p className="text-gray-600 text-sm">Leveraging decades of combined experience across technology, finance, and operations.</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <div className="w-3 h-3 bg-emerald-800 rounded-full"></div>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-2">Hands-On Partnership</h4>
//                   <p className="text-gray-600 text-sm">Active involvement in strategy, operations, and growth initiatives from day one.</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <div className="w-3 h-3 bg-emerald-800 rounded-full"></div>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-2">Extensive Network</h4>
//                   <p className="text-gray-600 text-sm">Access to industry leaders, potential customers, and follow-on investors.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;