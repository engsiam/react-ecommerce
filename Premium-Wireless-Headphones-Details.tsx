// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [selectedColor, setSelectedColor] = useState('Matte Black');
const [quantity, setQuantity] = useState(1);
const [expandedSection, setExpandedSection] = useState('features');
const [cartCount, setCartCount] = useState(0);
const [showToast, setShowToast] = useState(false);
const [toastMessage, setToastMessage] = useState({
productName: '',
color: '',
quantity: 0
});
const productImages = [
{
url: 'https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20with%20noise%20cancellation%20in%20matte%20black%20color%2C%20professional%20product%20photography%20on%20simple%20light%20gray%20background%2C%20ultra%20high%20resolution%2C%20detailed%20texture%20visible%2C%20studio%20lighting%2C%20centered%20composition%2C%20photorealistic&width=375&height=375&seq=1&orientation=squarish',
color: 'Matte Black'
},
{
url: 'https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20with%20noise%20cancellation%20in%20matte%20black%20color%20side%20view%2C%20professional%20product%20photography%20on%20simple%20light%20gray%20background%2C%20ultra%20high%20resolution%2C%20detailed%20texture%20visible%2C%20studio%20lighting%2C%20centered%20composition%2C%20photorealistic&width=375&height=375&seq=2&orientation=squarish',
color: 'Matte Black'
},
{
url: 'https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20with%20noise%20cancellation%20in%20space%20gray%20color%2C%20professional%20product%20photography%20on%20simple%20light%20gray%20background%2C%20ultra%20high%20resolution%2C%20detailed%20texture%20visible%2C%20studio%20lighting%2C%20centered%20composition%2C%20photorealistic&width=375&height=375&seq=3&orientation=squarish',
color: 'Space Gray'
},
{
url: 'https://readdy.ai/api/search-image?query=Premium%20wireless%20headphones%20with%20noise%20cancellation%20in%20pearl%20white%20color%2C%20professional%20product%20photography%20on%20simple%20light%20gray%20background%2C%20ultra%20high%20resolution%2C%20detailed%20texture%20visible%2C%20studio%20lighting%2C%20centered%20composition%2C%20photorealistic&width=375&height=375&seq=4&orientation=squarish',
color: 'Pearl White'
}
];
const colorOptions = [
{ name: 'Matte Black', hex: '#222222' },
{ name: 'Space Gray', hex: '#8E8E93' },
{ name: 'Pearl White', hex: '#F8F8F8' }
];
const reviews = [
{
id: 1,
username: 'Michael Thompson',
avatar: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20man%20with%20short%20brown%20hair%20and%20glasses%2C%20neutral%20expression%2C%20professional%20lighting%2C%20high%20quality%20portrait%20photography%2C%20isolated%20on%20light%20background&width=40&height=40&seq=5&orientation=squarish',
rating: 5,
date: 'April 12, 2025',
text: 'These headphones have completely transformed my listening experience. The noise cancellation is exceptional, and the sound quality is crystal clear. Battery life is impressive too - I only need to charge them once a week with daily use.',
verified: true
},
{
id: 2,
username: 'Sarah Johnson',
avatar: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20woman%20with%20shoulder%20length%20blonde%20hair%2C%20neutral%20expression%2C%20professional%20lighting%2C%20high%20quality%20portrait%20photography%2C%20isolated%20on%20light%20background&width=40&height=40&seq=6&orientation=squarish',
rating: 4,
date: 'April 5, 2025',
text: 'Great sound quality and comfortable for long periods. The noise cancellation works well in most environments. My only complaint is that the touch controls can be a bit sensitive sometimes.',
verified: true
}
];
const relatedProducts = [
{
id: 1,
name: 'Elite Sport Earbuds',
price: 89.99,
rating: 4.6,
image: 'https://readdy.ai/api/search-image?query=wireless%20sport%20earbuds%20in%20charging%20case%2C%20professional%20product%20photography%20on%20simple%20light%20gray%20background%2C%20ultra%20high%20resolution%2C%20detailed%20texture%20visible%2C%20studio%20lighting%2C%20centered%20composition%2C%20photorealistic&width=120&height=120&seq=7&orientation=squarish'
},
{
id: 2,
name: 'Studio Pro Headphones',
price: 199.99,
rating: 4.9,
image: 'https://readdy.ai/api/search-image?query=professional%20studio%20headphones%20with%20coiled%20cable%2C%20professional%20product%20photography%20on%20simple%20light%20gray%20background%2C%20ultra%20high%20resolution%2C%20detailed%20texture%20visible%2C%20studio%20lighting%2C%20centered%20composition%2C%20photorealistic&width=120&height=120&seq=8&orientation=squarish'
},
{
id: 3,
name: 'Compact Travel Earphones',
price: 69.99,
rating: 4.3,
image: 'https://readdy.ai/api/search-image?query=compact%20travel%20earphones%20with%20carrying%20case%2C%20professional%20product%20photography%20on%20simple%20light%20gray%20background%2C%20ultra%20high%20resolution%2C%20detailed%20texture%20visible%2C%20studio%20lighting%2C%20centered%20composition%2C%20photorealistic&width=120&height=120&seq=9&orientation=squarish'
}
];
const questions = [
{
id: 1,
question: 'How long does the battery last with noise cancellation on?',
answer: 'With active noise cancellation enabled, the battery lasts approximately 30 hours on a single charge. Without ANC, you can get up to 40 hours of playback time.',
askedBy: 'David Miller',
answeredBy: 'TechAudio Support'
},
{
id: 2,
question: 'Are these headphones compatible with iPhone and Android devices?',
answer: 'Yes, these headphones are compatible with both iPhone and Android devices. They connect via Bluetooth 5.2 and support multipoint connection for seamless switching between devices.',
askedBy: 'Jennifer Lee',
answeredBy: 'TechAudio Support'
}
];
const handleColorChange = (color: string) => {
setSelectedColor(color);
const newIndex = productImages.findIndex(img => img.color === color);
if (newIndex !== -1) {
setCurrentImageIndex(newIndex);
}
};
const handleQuantityChange = (change: number) => {
const newQuantity = quantity + change;
if (newQuantity >= 1 && newQuantity <= 10) {
setQuantity(newQuantity);
}
};
const handleImageChange = (index: number) => {
setCurrentImageIndex(index);
};
const toggleSection = (section: string) => {
setExpandedSection(expandedSection === section ? '' : section);
};
return (
<div className="min-h-screen relative pb-20" style={{
backgroundImage: `url('https://readdy.ai/api/search-image?query=Extremely%20light%20and%20airy%20luxury%20background%20with%20delicate%20geometric%20patterns%2C%20ultra%20soft%20pastel%20tones%2C%20predominantly%20white%20with%20barely%20visible%20cream%20and%20lavender%20undertones%2C%20minimal%20elegant%20design%2C%20ultra%20high%20resolution%2C%20very%20subtle%20hexagonal%20pattern%20overlay%2C%20professional%20photography%20background&width=375&height=800&seq=10&orientation=portrait')`,
backgroundSize: 'cover',
backgroundPosition: 'top',
backgroundRepeat: 'no-repeat'
}}>
{/* Navigation Bar */}
<div className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50 px-4 py-3 flex items-center justify-between">
<a
href="https://readdy.ai/home/b79e29f1-1f47-4bb0-bee4-af561efbbbd4/cad49841-4c52-43e3-86b2-1b95c6704abc"
data-readdy="true"
className="flex items-center cursor-pointer"
>
<i className="fas fa-arrow-left text-gray-700"></i>
</a>
<h1 className="text-base font-medium text-center flex-1 truncate mx-2">Premium Wireless Headphones</h1>
<div className="flex items-center space-x-4">
<i className="fas fa-share-alt text-gray-700 cursor-pointer"></i>
<i className="far fa-heart text-gray-700 cursor-pointer"></i>
<div className="relative">
<i className="fas fa-shopping-cart text-gray-700 cursor-pointer"></i>
{cartCount > 0 && (
<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
{cartCount}
</span>
)}
</div>
</div>
</div>
{showToast && (
<div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-slide-down">
<div className="flex items-start">
<div className="flex-1">
<p className="font-medium">Added to Cart!</p>
<p className="text-sm mt-1">
{toastMessage.productName} - {toastMessage.color} (Qty: {toastMessage.quantity})
</p>
</div>
<button onClick={() => setShowToast(false)} className="ml-4 text-white">
<i className="fas fa-times"></i>
</button>
</div>
<button className="text-sm underline mt-2">View Cart</button>
</div>
)}
{/* Main Content */}
<div className="pt-14 pb-16">
{/* Product Image Gallery */}
<div className="relative">
<div className="w-full h-[375px] relative" style={{
backgroundImage: `url('https://readdy.ai/api/search-image?query=Extremely%20light%20and%20airy%20luxury%20product%20display%20background%20with%20delicate%20geometric%20patterns%2C%20ultra%20soft%20pastel%20tones%2C%20predominantly%20white%20with%20barely%20visible%20cream%20undertones%2C%20minimal%20elegant%20design%2C%20ultra%20high%20resolution%2C%20very%20subtle%20hexagonal%20pattern%20overlay%2C%20professional%20studio%20background&width=375&height=375&seq=11&orientation=squarish')`,
backgroundSize: 'cover',
backgroundPosition: 'center'
}}>
<img
src={productImages[currentImageIndex].url}
alt="Premium Wireless Headphones"
className="w-full h-full object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
/>
{/* Zoom Controls */}
<div className="absolute top-4 right-4 flex flex-col space-y-2">
<button
onClick={() => {
const img = document.querySelector('.product-image') as HTMLElement;
if (img) {
img.style.transform = 'scale(1.2)';
}
}}
className="bg-white/80 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center shadow-sm !rounded-button">
<i className="fas fa-search-plus text-gray-800"></i>
</button>
<button
onClick={() => {
const img = document.querySelector('.product-image') as HTMLElement;
if (img) {
img.style.transform = 'scale(1)';
}
}}
className="bg-white/80 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center shadow-sm !rounded-button">
<i className="fas fa-search-minus text-gray-800"></i>
</button>
</div>
{/* Image Navigation Arrows */}
<button
onClick={() => handleImageChange(currentImageIndex > 0 ? currentImageIndex - 1 : productImages.length - 1)}
className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center shadow-sm !rounded-button">
<i className="fas fa-chevron-left text-gray-800"></i>
</button>
<button
onClick={() => handleImageChange(currentImageIndex < productImages.length - 1 ? currentImageIndex + 1 : 0)}
className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center shadow-sm !rounded-button">
<i className="fas fa-chevron-right text-gray-800"></i>
</button>
</div>
{/* Enhanced Pagination Dots */}
<div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
{productImages.map((_, index) => (
<button
key={index}
onClick={() => handleImageChange(index)}
className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentImageIndex === index ? 'bg-indigo-600 w-6' : 'bg-gray-300'}`}
aria-label={`View image ${index + 1}`}
></button>
))}
</div>
{/* Enhanced AR View Button */}
<button
onClick={() => alert('AR View feature coming soon!')}
className="absolute bottom-4 right-4 bg-[#9641c1] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-md hover:bg-[#8537b0] transition-colors duration-300 !rounded-button">
<i className="fas fa-cube mr-2"></i>
View in AR
</button>
</div>
{/* Enhanced Thumbnails */}
<div className="flex px-4 mt-4 space-x-3 overflow-x-auto hide-scrollbar">
{productImages.map((image, index) => (
<div
key={index}
onClick={() => handleImageChange(index)}
className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 ${
currentImageIndex === index
? 'ring-2 ring-[#9641c1] ring-offset-2'
: 'border border-gray-200'
}`}
>
<img
src={image.url}
alt={`Thumbnail ${index + 1}`}
className="w-full h-full object-cover"
/>
{currentImageIndex === index && (
<div className="absolute inset-0 bg-indigo-600/10 flex items-center justify-center">
<div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
<i className="fas fa-check text-indigo-600 text-sm"></i>
</div>
</div>
)}
</div>
))}
</div>
{/* Product Information */}
<div className="px-4 mt-5">
<h1 className="text-2xl font-bold text-gray-900 tracking-tight leading-snug">Premium Wireless Headphones</h1>
<div className="flex items-end mt-2">
<span className="text-2xl font-bold text-gray-900 tracking-tight">$129.99</span>
<span className="ml-2 text-base line-through text-gray-500 tracking-wide">$159.99</span>
<span className="ml-2 text-sm font-medium text-white bg-red-500 px-2 py-0.5 rounded tracking-wider">20% OFF</span>
</div>
<div className="flex items-center mt-3">
<div className="flex items-center">
<i className="fas fa-star text-yellow-400"></i>
<span className="ml-1 text-sm font-medium text-gray-900">4.8</span>
</div>
<span className="mx-2 text-gray-300">|</span>
<span className="text-sm text-gray-600">342 reviews</span>
<button className="ml-2 text-sm text-[#9641c1] cursor-pointer">See all</button>
</div>
</div>
{/* Color Selection */}
<div className="px-4 mt-6">
<h2 className="text-base font-semibold text-gray-900 tracking-wide">Color</h2>
<div className="flex mt-2 space-x-3">
{colorOptions.map(color => (
<button
key={color.name}
onClick={() => handleColorChange(color.name)}
className={`w-10 h-10 rounded-full cursor-pointer flex items-center justify-center !rounded-button ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-[#9641c1]' : ''}`}
style={{ backgroundColor: color.hex }}
aria-label={`Select ${color.name}`}
>
{selectedColor === color.name && <i className="fas fa-check text-white"></i>}
</button>
))}
</div>
<p className="mt-2 text-sm text-gray-600">{selectedColor}</p>
</div>
{/* Product Features */}
<div className="px-4 mt-6">
<div
className="flex justify-between items-center py-3 cursor-pointer"
onClick={() => toggleSection('features')}
>
<h2 className="text-lg font-semibold text-gray-900 tracking-wide">Key Features</h2>
<i className={`fas fa-chevron-${expandedSection === 'features' ? 'up' : 'down'} text-gray-500`}></i>
</div>
{expandedSection === 'features' && (
<div className="pb-3 text-base leading-relaxed text-gray-600 space-y-2">
<div className="flex items-start">
<i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
<p>Active Noise Cancellation blocks out external sounds</p>
</div>
<div className="flex items-start">
<i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
<p>Up to 40 hours of battery life on a single charge</p>
</div>
<div className="flex items-start">
<i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
<p>Premium 40mm audio drivers for exceptional sound quality</p>
</div>
<div className="flex items-start">
<i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
<p>Intuitive touch controls for music and calls</p>
</div>
</div>
)}
<div className="border-t border-gray-200"></div>
<div
className="flex justify-between items-center py-3 cursor-pointer"
onClick={() => toggleSection('specs')}
>
<h2 className="text-base font-medium text-gray-900">Technical Specifications</h2>
<i className={`fas fa-chevron-${expandedSection === 'specs' ? 'up' : 'down'} text-gray-500`}></i>
</div>
{expandedSection === 'specs' && (
<div className="pb-3 text-sm text-gray-600">
<div className="grid grid-cols-2 gap-y-2">
<div className="text-gray-500">Driver Size</div>
<div>40mm</div>
<div className="text-gray-500">Frequency Response</div>
<div>20Hz - 20kHz</div>
<div className="text-gray-500">Bluetooth Version</div>
<div>5.2</div>
<div className="text-gray-500">Battery Life</div>
<div>Up to 40 hours</div>
<div className="text-gray-500">Charging Time</div>
<div>2 hours</div>
<div className="text-gray-500">Weight</div>
<div>250g</div>
</div>
</div>
)}
<div className="border-t border-gray-200"></div>
<div
className="flex justify-between items-center py-3 cursor-pointer"
onClick={() => toggleSection('description')}
>
<h2 className="text-base font-medium text-gray-900">Product Description</h2>
<i className={`fas fa-chevron-${expandedSection === 'description' ? 'up' : 'down'} text-gray-500`}></i>
</div>
{expandedSection === 'description' && (
<div className="pb-3 text-sm text-gray-600">
<p>
Experience premium audio quality with our wireless headphones. Designed for comfort and performance,
these headphones feature active noise cancellation technology that blocks out external noise,
allowing you to focus on your music or calls.
</p>
<p className="mt-2">
With up to 40 hours of battery life, you can enjoy your favorite content all day long.
The intuitive touch controls make it easy to adjust volume, skip tracks, and answer calls
without reaching for your device.
</p>
</div>
)}
</div>
{/* Purchase Section */}
<div className="px-4 mt-6">
<div className="flex items-center mb-4">
<span className="text-sm font-medium text-gray-900 mr-4">Quantity</span>
<div className="flex items-center border border-gray-300 rounded-md">
<button
onClick={() => handleQuantityChange(-1)}
className="w-8 h-8 flex items-center justify-center text-gray-500 cursor-pointer !rounded-button"
disabled={quantity <= 1}
>
<i className="fas fa-minus text-xs"></i>
</button>
<span className="w-8 text-center text-sm">{quantity}</span>
<button
onClick={() => handleQuantityChange(1)}
className="w-8 h-8 flex items-center justify-center text-gray-500 cursor-pointer !rounded-button"
disabled={quantity >= 10}
>
<i className="fas fa-plus text-xs"></i>
</button>
</div>
</div>
<div className="flex items-center mt-2 text-sm text-gray-600">
<i className="fas fa-truck mr-2"></i>
<span>Free shipping & returns</span>
</div>
<div className="flex items-center mt-1 text-sm text-gray-600">
<i className="fas fa-shield-alt mr-2"></i>
<span>2-year warranty included</span>
</div>
</div>
{/* Customer Reviews */}
<div className="px-4 mt-8">
<div className="flex justify-between items-center">
<h2 className="text-xl font-semibold text-gray-900 tracking-tight">Customer Reviews</h2>
<button className="text-sm text-[#9641c1] cursor-pointer">View All</button>
</div>
<div className="flex items-center mt-2">
<span className="text-3xl font-bold text-gray-900">4.8</span>
<div className="ml-2">
<div className="flex text-yellow-400">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star-half-alt"></i>
</div>
<span className="text-sm text-gray-600">Based on 342 reviews</span>
</div>
</div>
<div className="mt-4 space-y-4">
{reviews.map(review => (
<div key={review.id} className="border-b border-gray-200 pb-4">
<div className="flex items-center">
<img
src={review.avatar}
alt={review.username}
className="w-8 h-8 rounded-full object-cover"
/>
<div className="ml-2">
<div className="flex items-center">
<span className="font-medium text-gray-900">{review.username}</span>
{review.verified && (
<span className="ml-2 text-xs bg-[#9641c1]/10 text-[#9641c1] px-1.5 py-0.5 rounded">Verified Purchase</span>
)}
</div>
<div className="flex items-center text-xs text-gray-500">
<div className="flex text-yellow-400">
{[...Array(5)].map((_, i) => (
<i key={i} className={`fas fa-star ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}></i>
))}
</div>
<span className="ml-2">{review.date}</span>
</div>
</div>
</div>
<p className="mt-2 text-base leading-relaxed text-gray-600">{review.text}</p>
</div>
))}
</div>
</div>
{/* Questions & Answers */}
<div className="px-4 mt-8">
<h2 className="text-xl font-semibold text-gray-900 tracking-tight">Questions & Answers</h2>
<div className="mt-4 space-y-4">
{questions.map(item => (
<div key={item.id} className="border-b border-gray-200 pb-4">
<div className="flex">
<span className="font-medium text-gray-900 mr-2">Q:</span>
<div>
<p className="text-sm text-gray-900">{item.question}</p>
<p className="text-xs text-gray-500 mt-1">Asked by {item.askedBy}</p>
</div>
</div>
<div className="flex mt-2">
<span className="font-medium text-gray-900 mr-2">A:</span>
<div>
<p className="text-sm text-gray-600">{item.answer}</p>
<p className="text-xs text-gray-500 mt-1">Answered by {item.answeredBy}</p>
</div>
</div>
</div>
))}
</div>
<button className="mt-4 w-full py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 cursor-pointer !rounded-button">
Ask a Question
</button>
</div>
{/* Related Products */}
<div className="mt-8">
<h2 className="px-4 text-xl font-semibold text-gray-900 tracking-tight">You May Also Like</h2>
<div className="mt-4 pl-4 flex space-x-4 overflow-x-auto hide-scrollbar pb-4">
{relatedProducts.map(product => (
<div key={product.id} className="flex-shrink-0 w-36 cursor-pointer">
<div className="w-full h-36 rounded-lg overflow-hidden" style={{
backgroundImage: `url('https://readdy.ai/api/search-image?query=Extremely%20light%20and%20airy%20luxury%20product%20display%20background%20with%20delicate%20geometric%20patterns%2C%20ultra%20soft%20pastel%20tones%2C%20predominantly%20white%20with%20barely%20visible%20cream%20undertones%2C%20minimal%20elegant%20design%2C%20ultra%20high%20resolution%2C%20very%20subtle%20hexagonal%20pattern%20overlay%2C%20professional%20studio%20background&width=144&height=144&seq=12&orientation=squarish')`,
backgroundSize: 'cover',
backgroundPosition: 'center'
}}>
<img
src={product.image}
alt={product.name}
className="w-full h-full object-cover"
/>
</div>
<h3 className="mt-2 text-base font-semibold text-gray-900 tracking-wide line-clamp-1">{product.name}</h3>
<p className="text-sm font-bold text-gray-900">${product.price.toFixed(2)}</p>
<div className="flex items-center mt-1">
<i className="fas fa-star text-yellow-400 text-xs"></i>
<span className="ml-1 text-xs text-gray-600">{product.rating}</span>
</div>
</div>
))}
</div>
</div>
</div>
{/* Bottom Action Bar */}
<div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 px-4 py-3 flex items-center justify-between z-40">
<button className="w-12 h-12 flex flex-col items-center justify-center text-gray-500 cursor-pointer">
<i className="fas fa-comments text-lg"></i>
<span className="text-xs mt-1">Chat</span>
</button>
<div className="flex-1 flex space-x-2 ml-3">
<button
onClick={() => {
setCartCount(prev => prev + quantity);
setToastMessage({
productName: 'Premium Wireless Headphones',
color: selectedColor,
quantity: quantity
});
setShowToast(true);
setTimeout(() => setShowToast(false), 3000);
}}
className="flex-1 bg-white border-2 border-[#9641c1] text-[#9641c1] py-2.5 rounded-md font-semibold text-base tracking-wide cursor-pointer !rounded-button"
>
Add to Cart
</button>
<a href="https://readdy.ai/home/b79e29f1-1f47-4bb0-bee4-af561efbbbd4/18600fc4-2405-4895-b326-6ee1028fcd93" data-readdy="true" className="flex-1">
  <button className="w-full bg-[#9641c1] text-white py-2.5 rounded-md font-semibold text-base tracking-wide cursor-pointer !rounded-button">
    Buy Now
  </button>
</a>
</div>
</div>
{/* Custom Styles */}
<style jsx>{`
.hide-scrollbar::-webkit-scrollbar {
display: none;
}
.hide-scrollbar {
-ms-overflow-style: none;
scrollbar-width: none;
}
.line-clamp-1 {
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
}
@keyframes slide-down {
from {
transform: translate(-50%, -100%);
opacity: 0;
}
to {
transform: translate(-50%, 0);
opacity: 1;
}
}
.animate-slide-down {
animation: slide-down 0.3s ease-out forwards;
}
`}</style>
</div>
);
};
export default App
