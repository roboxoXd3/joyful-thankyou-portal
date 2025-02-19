
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
    <div className="min-h-screen bg-[#222222] px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Success Icon */}
        <div className={`text-center transform ${isVisible ? "animate-scale-up" : "opacity-0"}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#A0D268]/20">
            <Check className="w-10 h-10 text-[#A0D268]" />
          </div>
        </div>

        {/* Title and Confirmation */}
        <div className={`text-center space-y-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl font-semibold text-white">{workshopTitle}</h1>
          <p className="text-xl text-[#A0D268]">Registration Successful!</p>
        </div>

        {/* Video Card */}
        <Card className={`p-6 bg-[#333333] border-[#444444] shadow-2xl rounded-xl ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-white">Welcome Video</h2>
            <div className="relative aspect-video bg-[#222222] rounded-lg overflow-hidden border border-[#444444]">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="w-16 h-16 rounded-full bg-[#A0D268] hover:bg-[#9ACD32] transition-colors border-none shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => console.log("Play video")}
                >
                  <Play className="w-8 h-8 text-[#222222]" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Social Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <Button 
            className="group relative overflow-hidden bg-[#A0D268] hover:bg-[#9ACD32] text-[#222222] font-semibold flex items-center gap-3 px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onClick={() => window.open("#", "_blank")}
          >
            <MessageSquare className="w-6 h-6 transition-transform group-hover:scale-110" />
            <span className="text-lg">Join WhatsApp Group</span>
          </Button>
          
          <Button 
            className="group relative overflow-hidden bg-[#FFD700] hover:bg-[#FFC700] text-[#222222] font-semibold flex items-center gap-3 px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onClick={() => window.open("#", "_blank")}
          >
            <Instagram className="w-6 h-6 transition-transform group-hover:scale-110" />
            <span className="text-lg">Follow on Instagram</span>
          </Button>
        </div>

        {/* Additional Information */}
        <div className={`text-center space-y-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.8s" }}>
          <p className="text-[#A0D268] text-lg">
            We've sent all the details to your email.
          </p>
          <p className="text-white/80 text-sm">
            Looking forward to seeing you at the workshop!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
