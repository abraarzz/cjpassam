import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import Manifesto from '@/components/Manifesto';
import Eligibility from '@/components/Eligibility';
import RegistrationForm from '@/components/RegistrationForm';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <Vision />
        <Manifesto />
        <Eligibility />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}
