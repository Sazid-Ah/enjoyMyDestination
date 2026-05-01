// import Instagram from "lucide-react/dist/esm/icons/instagram";
// import Facebook from "lucide-react/dist/esm/icons/facebook";
// import Youtube from "lucide-react/dist/esm/icons/youtube";
// import Mail from "lucide-react/dist/esm/icons/mail";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-200 pt-20 pb-10">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">

//         {/* Top Section */}
//         <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-gray-700">

//           {/* Brand */}
//           <div className="md:col-span-5">
//             <h2 className="text-3xl font-bold mb-4">
//               Andaman <span className="text-yellow-400">Trails</span>
//             </h2>

//             <p className="text-gray-400 max-w-sm leading-relaxed">
//               A small studio of island specialists, designing unforgettable
//               Andaman journeys since 2018.
//             </p>

//             {/* Social Icons */}
//             <div className="flex items-center gap-4 mt-8">
//               {[
//                 { Icon: Instagram, label: "Instagram" },
//                 { Icon: Facebook, label: "Facebook" },
//                 { Icon: Youtube, label: "YouTube" },
//                 { Icon: Mail, label: "Email" },
//               ].map(({ Icon, label }) => (
//                 <a
//                   key={label}
//                   href="#"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition duration-300"
//                 >
//                   <Icon size={18} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Columns */}
//           <FooterCol
//             title="Journeys"
//             links={["Honeymoon", "Family", "Adventure", "Luxury", "Scuba", "Custom"]}
//           />
//           <FooterCol
//             title="Islands"
//             links={["Havelock", "Neil Island", "Ross Island", "Port Blair", "Baratang", "North Bay"]}
//           />
//           <FooterCol
//             title="Company"
//             links={["About", "Careers", "Contact", "FAQ", "Blog"]}
//           />

//         </div>

//         {/* Bottom */}
//         <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-gray-500 text-sm">
//           <p>© 2026 Andaman Trails Pvt. Ltd. All rights reserved.</p>

//           <div className="flex gap-6">
//             <a href="#" className="hover:text-white transition">Privacy</a>
//             <a href="#" className="hover:text-white transition">Terms</a>
//             <a href="#" className="hover:text-white transition">Cookies</a>
//           </div>
//         </div>
//       </div>

//       {/* Decorative Text */}
//       <div className="overflow-hidden mt-16 select-none">
//         <p className="text-white/5 text-[18vw] md:text-[12vw] leading-none text-center font-bold tracking-wider">
//           ANDAMAN
//         </p>
//       </div>
//     </footer>
//   );
// }

// function FooterCol({ title, links }) {
//   return (
//     <div className="md:col-span-2">
//       <p className="text-yellow-400 font-semibold mb-5">{title}</p>

//       <ul className="space-y-3">
//         {links.map((l) => (
//           <li key={l}>
//             <a href="#" className="text-gray-400 text-sm hover:text-white transition duration-200">
//               {l}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }