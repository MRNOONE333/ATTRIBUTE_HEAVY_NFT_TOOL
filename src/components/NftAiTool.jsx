// import { useState } from "react";

// // Import NFT base images
// import image1 from "../assets/NFT-AI-images/image1.jpg";
// import image2 from "../assets/NFT-AI-images/image2.jpg";
// import image3 from "../assets/NFT-AI-images/image3.jpg";
// import image4 from "../assets/NFT-AI-images/image4.jpg";
// import image5 from "../assets/NFT-AI-images/image5.jpg";
// import image6 from "../assets/NFT-AI-images/image6.jpg";
// import image7 from "../assets/NFT-AI-images/image7.jpg";
// import image8 from "../assets/NFT-AI-images/image8.jpg";
// import image9 from "../assets/NFT-AI-images/image9.jpg";
// import image10 from "../assets/NFT-AI-images/image10.jpg";

// // Import all NFT attributes
// import acc_1 from "../assets/Nft-AI-Attributes/hooka.png";
// import acc_2 from "../assets/Nft-AI-Attributes/nerd_glasses.png";
// import acc_3 from "../assets/Nft-AI-Attributes/3d_glasses.png";
// import acc_4 from "../assets/Nft-AI-Attributes/beard.png";
// import acc_5 from "../assets/Nft-AI-Attributes/hair.png";
// import acc_6 from "../assets/Nft-AI-Attributes/mowhaq.png";
// import acc_7 from "../assets/Nft-AI-Attributes/blue_eyes.png";
// import acc_8 from "../assets/Nft-AI-Attributes/cap.png";
// import acc_9 from "../assets/Nft-AI-Attributes/vampire_beard.png";
// import acc_10 from "../assets/Nft-AI-Attributes/cigarret.png";
// import acc_11 from "../assets/Nft-AI-Attributes/pirate_eye.png";
// import acc_12 from "../assets/Nft-AI-Attributes/neck_chain.png";
// import red_lipistic from "../assets/Nft-AI-Attributes/red_lipistic.png";
// import black_lipistic from "../assets/Nft-AI-Attributes/black_lipistic.png";
// import acc_13 from "../assets/Nft-AI-Attributes/mole.png";
// import acc_14 from "../assets/Nft-AI-Attributes/mole1.png";
// import acc_15 from "../assets/Nft-AI-Attributes/mole2.png";
// import acc_16 from "../assets/Nft-AI-Attributes/mole3.png";
// import acc_17 from "../assets/Nft-AI-Attributes/mole4.png";

// // Add a canvas texture image (you can replace it with your own texture)
// import canvasTexture from "../assets/canvas-texture.jpg";

// const attributeImages = [
//   acc_1,
//   acc_2,
//   acc_3,
//   acc_4,
//   acc_5,
//   acc_6,
//   acc_7,
//   acc_8,
//   acc_9,
//   acc_10,
//   acc_11,
//   acc_12,
//   acc_13,
//   acc_14,
//   acc_15,
//   acc_16,
//   acc_17,
//   red_lipistic,
//   black_lipistic,
//   // eye_0,
//   // eye_1,
//   // eye_2,
//   // eye_3,
//   // eye_4,
//   // eye_5,
//   // eye_6,
//   // eye_7,
//   // hair_0,
//   // hair_1,
//   // hair_2,
//   // hair_3,
//   // hair_4,
//   // hair_5,
//   // hair_6,
//   // hair_7,
// ];

// const NftAiTool = () => {
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedAttributes, setSelectedAttributes] = useState([]);
//   const [attributePositions, setAttributePositions] = useState(
//     attributeImages.map(() => ({ x: 0, y: 0 }))
//   );
//   const [draggingIndex, setDraggingIndex] = useState(null);

//   const images = [image1, image2, image3, image4, image5, image6 ,image7 , image8 , image9 , image10];

//   const generateImage = () => {
//     setLoading(true);
//     setTimeout(() => {
//       const randomIndex = Math.floor(Math.random() * images.length);
//       setImage(images[randomIndex]);
//       setLoading(false);
//     }, 1000); // second delay
//   };

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleAttributeSelect = (attribute, index) => {
//     if (selectedAttributes.includes(attribute)) {
//       setSelectedAttributes((prev) =>
//         prev.filter((item) => item !== attribute)
//       );
//     } else {
//       setSelectedAttributes((prev) => [...prev, attribute]);
//       setAttributePositions((prev) => {
//         const updatedPositions = [...prev];
//         updatedPositions[index] = { x: 0, y: 0 }; // Default position
//         return updatedPositions;
//       });
//     }
//   };

//   const startDragging = (index) => {
//     setDraggingIndex(index);
//   };

//   const stopDragging = () => {
//     setDraggingIndex(null);
//   };

//   const onDrag = (e) => {
//     if (draggingIndex !== null) {
//       const { clientX, clientY } = e;
//       setAttributePositions((prev) =>
//         prev.map((pos, idx) =>
//           idx === draggingIndex
//             ? { x: clientX - 168, y: clientY - 168 } // Adjust to center on cursor
//             : pos
//         )
//       );
//     }
//   };

//   return (
//     <div
//       className="flex flex-col items-center justify-center min-h-screen"
//       style={{
//         backgroundImage: `url(${canvasTexture})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//       onMouseMove={onDrag}
//       onMouseUp={stopDragging}
//     >
//       <h1 className="text-4xl font-bold mb-6 text-white">NFT AI Tool</h1>
//       <div
//         className="relative border rounded-md flex items-center justify-center bg-gray-800"
//         style={{ width: "336px", height: "336px" }}
//       >
//         {loading ? (
//           <p className="text-white">Loading...</p>
//         ) : image ? (
//           <>
//             <img
//               src={image}
//               alt="Generated NFT"
//               className="absolute top-0 left-0 w-full h-full object-cover z-10"
//             />
//             {selectedAttributes.map((attribute, index) => (
//               <img
//                 key={index}
//                 src={attribute}
//                 alt="Attribute"
//                 className="absolute cursor-grab z-20"
//                 style={{
//                   left: `${attributePositions[index].x}px`,
//                   top: `${attributePositions[index].y}px`,
//                   width: "336px",
//                   height: "336px",
//                   transform: "translate(-50%, -50%)",
//                   position: "absolute",
//                 }}
//                 onMouseDown={() => startDragging(index)}
//                 draggable={false}
//               />
//             ))}
//           </>
//         ) : (
//           <p className="text-white">No image yet</p>
//         )}
//       </div>

//       <button
//         onClick={generateImage}
//         className="mt-4 bg-gradient-to-r from-orange-500 to-orange-800 text-white px-4 py-2 rounded-md"
//       >
//         Generate Image
//       </button>
//       {image && (
//         <>
//           <button
//             onClick={toggleModal}
//             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md ml-4"
//           >
//             Add Attributes
//           </button>
//           <button
//               className="mt-4 bg-white text-black px-4 py-2 rounded-md ml-4"
//             >
//               Publish on Blockchain
//               <span
//                 className="block mt-2 bg-rainbow bg-[length:200%_200%] animate-rainbow-move text-transparent bg-clip-text font-bold"
//               >
                
//                 Coming Soon
//               </span>
//             </button>
//         </>
//       )}

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div
//             className="bg-white p-6 rounded-lg"
//             style={{ width: "80%", maxHeight: "70vh", overflowY: "auto" }}
//           >
//             <h2 className="text-xl font-bold mb-4">Select Attributes</h2>
//             <div className="grid grid-cols-3 gap-4">
//               {attributeImages.map((attribute, index) => (
//                 <div
//                   key={index}
//                   className={`border-2 p-2 rounded-lg cursor-pointer ${
//                     selectedAttributes.includes(attribute)
//                       ? "border-green-500"
//                       : "border-gray-300"
//                   }`}
//                   onClick={() => handleAttributeSelect(attribute, index)}
//                 >
//                   <img
//                     src={attribute}
//                     alt={`Attribute ${index}`}
//                     className="w-full h-16 object-contain"
//                   />
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={toggleModal}
//                 className="bg-red-500 text-white px-4 py-2 rounded-md"
//               >
//                 Close
//               </button>
              
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NftAiTool;

