"use client"
import { useUser } from '@clerk/nextjs';
import { User2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const user = useUser();
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
       
          <Image src={'/logoipsum-252.svg'} alt='logo.svg' height={120} width={120}/>
    
        <Link href={!user.isSignedIn?'/sign-in':'/dashboard'}>
        <button className="text-white hover:bg-indigo-500 flex gap-1 bg-indigo-600 rounded-lg px-4 py-3 "> <User2Icon className='h-5 w-5' /> 
        {user.isSignedIn?'Get Started':'Login/Signup'}</button>
        </Link>
      </header>
      
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-gray-100 to-white">
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          AI Content <span className="text-indigo-600">Generator</span>
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>
        <Link  href={!user.isSignedIn?'/sign-in':'/dashboard'}>
        <button className="mt-5 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700">
        {user.isSignedIn?'Get Started':'Login/Signup'}
        </button>
        </Link>
      </section>
      
      {/* Features Section */}
      <section className="grid md:grid-cols-4 gap-8 px-10 py-20 bg-gray-50">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6 bg-white shadow rounded-lg">
            <div className="text-4xl text-indigo-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
            <a href="#" className="text-indigo-600 font-medium mt-2 inline-block">Learn more &rarr;</a>
          </div>
        ))}
      </section>
    </div>
  );
}

const features = [
  { icon: "📄", title: "25+ templates", description: "Responsive, and mobile-first project on the web" },
  { icon: "⚙️", title: "Customizable", description: "Components are easily customized and extendable" },
  { icon: "📖", title: "Free to Use", description: "Every component and plugin is well documented" },
  { icon: "💬", title: "24/7 Support", description: "Contact us 24 hours a day, 7 days a week" }
];
