import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Home: React.FC = () => {
  const sampleListing = {
    title: 'Beautiful Apartment',
    description: 'Luxurious apartment in the heart of the city with amazing views.',
    price: 120,
    imageUrl: '/assets/placeholder.jpg'
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">ALX Listing App</h1>
          <p className="text-gray-600">Find your perfect stay</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card {...sampleListing} />
            <Card 
              title="Cozy Cottage" 
              description="Quiet retreat in the countryside"
              price={85}
              imageUrl="/assets/placeholder.jpg"
            />
            <Card 
              title="Beach Villa" 
              description="Oceanfront property with private beach access"
              price={200}
              imageUrl="/assets/placeholder.jpg"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <Button variant="primary">Book Now</Button>
          <Button variant="outline">View Details</Button>
          <Button variant="secondary" disabled>Coming Soon</Button>
        </div>
      </main>

      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>&copy; 2024 ALX Listing App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
