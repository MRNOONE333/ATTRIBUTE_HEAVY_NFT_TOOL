// import React, { useState, useRef, useEffect } from "react";
// import face_1 from "../assets/Face-base/face_1.png";
// import face_2 from "../assets/Face-base/face_2.png";
// import face_3 from "../assets/Face-base/face_3.png";
// import face_4 from "../assets/Face-base/face_4.png";
// import face_5 from "../assets/Face-base/face_5.png";
// import face_6 from "../assets/Face-base/face_6.png";
// import face_7 from "../assets/Face-base/face_7.png";
// import acc_1 from "../assets/Nft-Attributes/acc_1.png";
// import acc_2 from "../assets/Nft-Attributes/acc_2.png";
// import acc_3 from "../assets/Nft-Attributes/acc_3.png";
// import acc_4 from "../assets/Nft-Attributes/acc_4.png";
// import acc_5 from "../assets/Nft-Attributes/acc_5.png";
// import acc_6 from "../assets/Nft-Attributes/acc_6.png";
// import acc_7 from "../assets/Nft-Attributes/acc_7.png";
// import eye_0 from "../assets/Nft-Attributes/eye_0.png";
// import eye_1 from "../assets/Nft-Attributes/eye_1.png";
// import eye_2 from "../assets/Nft-Attributes/eye_2.png";
// import eye_3 from "../assets/Nft-Attributes/eye_3.png";
// import eye_4 from "../assets/Nft-Attributes/eye_4.png";
// import eye_5 from "../assets/Nft-Attributes/eye_5.png";
// import eye_6 from "../assets/Nft-Attributes/eye_6.png";
// import eye_7 from "../assets/Nft-Attributes/eye_7.png";
// import hair_0 from "../assets/Nft-Attributes/hair_0.png";
// import hair_1 from "../assets/Nft-Attributes/hair_1.png";
// import hair_2 from "../assets/Nft-Attributes/hair_2.png";
// import hair_3 from "../assets/Nft-Attributes/hair_3.png";
// import hair_4 from "../assets/Nft-Attributes/hair_4.png";
// import hair_5 from "../assets/Nft-Attributes/hair_5.png";
// import hair_6 from "../assets/Nft-Attributes/hair_6.png";
// import hair_7 from "../assets/Nft-Attributes/hair_7.png";


// const NftCustomTool = () => {
//   const [baseImage, setBaseImage] = useState(null);
//   const [selectedAttributes, setSelectedAttributes] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const canvasRef = useRef(null);
//   const downloadCanvasRef = useRef(null);

//   const baseImages = [
//     { src: face_1, name: "face_1" },
//     { src: face_2, name: "face_2" },
//     { src: face_3, name: "face_3" },
//     { src: face_4, name: "face_4" },
//     { src: face_5, name: "face_5" },
//     { src: face_6, name: "face_6" },
//     { src: face_7, name: "face_7" },
//   ];

//   const attributes = [
//     { src: acc_1, name: "Accessory 1" },
//     { src: acc_2, name: "Accessory 2" },
//     { src: acc_3, name: "Accessory 3" },
//     { src: acc_4, name: "Accessory 4" },
//     { src: acc_5, name: "Accessory 5" },
//     { src: acc_6, name: "Accessory 6" },
//     { src: acc_7, name: "Accessory 7" },
//     { src: eye_0, name: "Eyes 0" },
//     { src: eye_1, name: "Eyes 1" },
//     { src: eye_2, name: "Eyes 2" },
//     { src: eye_3, name: "Eyes 3" },
//     { src: eye_4, name: "Eyes 4" },
//     { src: eye_5, name: "Eyes 5" },
//     { src: eye_6, name: "Eyes 6" },
//     { src: eye_7, name: "Eyes 7" },
//     { src: hair_0, name: "Hair 0" },
//     { src: hair_1, name: "Hair 1" },
//     { src: hair_2, name: "Hair 2" },
//     { src: hair_3, name: "Hair 3" },
//     { src: hair_4, name: "Hair 4" },
//     { src: hair_5, name: "Hair 5" },
//     { src: hair_6, name: "Hair 6" },
//     { src: hair_7, name: "Hair 7" },
    
//   ];

//   const selectBaseImage = (image) => {
//     setBaseImage(image);
//   };

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   const toggleAttribute = (attribute) => {
//     if (selectedAttributes.includes(attribute)) {
//       setSelectedAttributes(selectedAttributes.filter((attr) => attr !== attribute));
//     } else {
//       setSelectedAttributes([...selectedAttributes, attribute]);
//     }
//   };

//   const handleDownload = () => {
//     const downloadCanvas = downloadCanvasRef.current;
//     const ctx = downloadCanvas.getContext("2d");

//     // Clear the canvas and set a white background
//     ctx.fillStyle = "white";
//     ctx.fillRect(0, 0, downloadCanvas.width, downloadCanvas.height);

//     const img = new Image();
//     img.src = baseImage;

//     img.onload = () => {
//       // Calculate center position
//       const centerX = (downloadCanvas.width - img.width * 3) / 2;
//       const centerY = (downloadCanvas.height - img.height * 3) / 2;

//       // Draw magnified base image
//       ctx.drawImage(img, centerX, centerY, img.width * 3, img.height * 3);

//       // Draw magnified attributes
//       selectedAttributes.forEach((attr) => {
//         const overlayImage = new Image();
//         overlayImage.src = attr.src;
//         overlayImage.onload = () => {
//           ctx.drawImage(
//             overlayImage, 
//             centerX, 
//             centerY, 
//             overlayImage.width * 3, 
//             overlayImage.height * 3
//           );
//         };
//       });

//       // Trigger download after a short delay to ensure images are loaded
//       setTimeout(() => {
//         const link = document.createElement("a");
//         link.href = downloadCanvas.toDataURL("image/png");
//         link.download = "nft_image.png";
//         link.click();
//       }, 1000);
//     };
//   };

//   return (
//     <div
//       className="flex flex-col items-center justify-center min-h-screen"
//       style={{ backgroundColor: "#121212" }}
//     >
//       <h1 className="text-4xl font-bold text-white mb-6">Imoji NFT Creator.</h1>

//       {!baseImage && (
//         <p className="text-xl text-white mb-6">Select a Base Image</p>
//       )}

//       {!baseImage ? (
//         <div className="flex justify-center mb-4">
//           {baseImages.map((image, index) => (
//             <img
//               key={index}
//               src={image.src}
//               alt={image.name}
//               className="w-48 h-48 mx-2 cursor-pointer border-2 border-transparent hover:border-orange-500"
//               onClick={() => selectBaseImage(image.src)}
//             />
//           ))}
//         </div>
//       ) : (
//         <>
//           <div className="w-80 h-80 border rounded-md flex items-center justify-center bg-gray-800 relative">
//             <img src={baseImage} alt="Base" className="max-w-full max-h-full absolute" />
//             {selectedAttributes.map((attr, index) => (
//               <img
//                 key={index}
//                 src={attr.src}
//                 alt={attr.name}
//                 className="max-w-full max-h-full absolute"
//               />
//             ))}
//           </div>
//           <button
//             onClick={togglePopup}
//             className="mt-4 bg-gradient-to-r from-orange-500 to-orange-800 text-white px-4 py-2 rounded-md"
//           >
//             Add Attributes
//           </button>
//         </>
//       )}

// {showPopup && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//     <div className="bg-white rounded-lg p-6 w-96 max-h-96 overflow-y-auto">
//       <h2 className="text-xl font-bold mb-4">Select Attributes</h2>
//       <div className="grid grid-cols-3 gap-4">
//         {attributes.map((attribute, index) => (
//           <div
//             key={index}
//             className={`p-2 cursor-pointer rounded-lg ${
//               selectedAttributes.some((attr) => attr.name === attribute.name)
//                 ? "border-4 border-orange-500"
//                 : "border-4 border-transparent"
//             }`}
//             onClick={() => toggleAttribute(attribute)}
//           >
//             <img
//               src={attribute.src}
//               alt={attribute.name}
//               className="w-16 h-16 object-cover"
//             />
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={togglePopup}
//         className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-md"
//       >
//         Close
//       </button>
//     </div>
//   </div>
// )}



//       {baseImage && (
//         <button
//           onClick={handleDownload}
//           className="mt-4 bg-gradient-to-r from-blue-500 to-blue-800 text-white px-4 py-2 rounded-md"
//         >
//           Download Final Image
//         </button>
//       )}

//       <canvas 
//         ref={canvasRef} 
//         style={{ display: "none" }} 
//         width={800} 
//         height={800}
//       ></canvas>
//       <canvas 
//         ref={downloadCanvasRef} 
//         style={{ display: "none" }} 
//         width={2400} 
//         height={2400}
//       ></canvas>
//     </div>
//   );
// };

// export default NftCustomTool;
