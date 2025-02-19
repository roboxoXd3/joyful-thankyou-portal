
import { useState, useEffect } from "react";
import { Check, MessageSquare, Instagram, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ThankYouPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workshopTitle = "Professional Growth Mastery Workshop"; // Replace with actual workshop title

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Success Icon */}
        <div className={`text-center transform ${isVisible ? "animate-scale-up" : "opacity-0"}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success-muted">
            <Check className="w-10 h-10 text-success" />
          </div>
        </div>

        {/* Title and Confirmation */}
        <div className={`text-center space-y-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl font-semibold text-gray-900">{workshopTitle}</h1>
          <p className="text-xl text-gray-600">Registration Successful!</p>
        </div>

        {/* Video Card */}
        <Card className={`p-6 bg-white shadow-lg rounded-xl ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-gray-900">Welcome Video</h2>
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="w-16 h-16 rounded-full bg-white/90 hover:bg-white transition-colors"
                  onClick={() => console.log("Play video")}
                >
                  <Play className="w-8 h-8 text-success" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Social Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <Button 
            className="bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center gap-2 px-8 py-6 rounded-xl transition-transform hover:scale-105"
            onClick={() => window.open("#", "_blank")}
          >
            <MessageSquare className="w-5 h-5" />
            Join WhatsApp Group
          </Button>
          
          <Button 
            className="bg-[#E4405F] hover:bg-[#D62E54] text-white flex items-center gap-2 px-8 py-6 rounded-xl transition-transform hover:scale-105"
            onClick={() => window.open("#", "_blank")}
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </Button>
        </div>

        {/* Additional Information */}
        <p className={`text-center text-gray-500 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.8s" }}>
          We've sent all the details to your email. Looking forward to seeing you at the workshop!
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
