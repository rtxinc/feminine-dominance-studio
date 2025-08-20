import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;