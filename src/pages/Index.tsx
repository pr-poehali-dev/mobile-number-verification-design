import HeroSection from "@/components/HeroSection";
import PhoneVerificationForm from "@/components/PhoneVerificationForm";
import FileUploader from "@/components/FileUploader";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PhoneVerificationForm />
      <FileUploader />
    </div>
  );
};

export default Index;
