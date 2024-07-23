function Card() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <InfoSection />
      <ContactSection />
      <SocialLinks />
    </div>
  );
}
export default Card;

export function InfoSection() {
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold">Your Name</h1>
      <h2 className="text-lg font-medium">Your Job Title</h2>
      <p className="text-gray-600 mt-2">Your brief bio</p>
    </div>
  );
}

export function ContactSection() {
  return (
    <div className="text-center p-4">
      <p>Your Email: your@email.com</p>
      <p>Your Phone: (123) 456-7890</p>
      <p>Your Address: Your Address</p>
    </div>
  );
}

export function SocialLinks() {
  return (
    <div className="flex space-x-4 mt-4">
      {/* Add social media icons here */}
    </div>
  );
}
