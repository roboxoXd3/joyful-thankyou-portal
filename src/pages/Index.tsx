import { useState, useEffect } from "react";
import { Check, MessageSquare, Instagram, Play, Calendar, Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ThankYouPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workshopTitle = "Professional Growth Mastery Workshop";
  const workshopDate = "April 15, 2024";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#222222] px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Success Icon with Pulse Effect */}
        <div className={`text-center transform ${isVisible ? "animate-scale-up" : "opacity-0"}`}>
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-[#A0D268] to-[#9ACD32] bg-opacity-20 relative">
            <div className="absolute inset-0 rounded-full bg-[#A0D268]/20 animate-ping"></div>
            <Check className="w-12 h-12 text-[#A0D268]" />
          </div>
        </div>

        {/* Title and Confirmation with Enhanced Typography */}
        <div className={`text-center space-y-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <h1 className="text-5xl font-bold text-white tracking-tight">{workshopTitle}</h1>
          <p className="text-2xl bg-gradient-to-r from-[#A0D268] to-[#9ACD32] bg-clip-text text-transparent font-semibold">
            Registration Successful!
          </p>
        </div>

        {/* Workshop Details Card */}
        <Card className={`p-8 bg-[#2A2A2A] border-[#444444] shadow-2xl rounded-2xl ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#444444] pb-4">
              <h2 className="text-2xl font-semibold text-white">Workshop Details</h2>
              <Button 
                variant="ghost" 
                className="text-[#A0D268] hover:text-[#9ACD32] hover:bg-[#A0D268]/10"
                onClick={() => console.log("Add to calendar")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Add to Calendar
              </Button>
            </div>
            
            <div className="space-y-6">
              {/* Welcome Message Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column - Welcome Image */}
                <div className="relative aspect-[16/13] bg-[#222222] rounded-xl overflow-hidden border border-[#444444] group">
                  <img 
                    src="photo-1486312338219-ce68d2c6f44d" 
                    alt="Workshop Preview"
                    className="w-full h-full object-cover brightness-90 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-semibold mb-2">Welcome to the Workshop</h3>
                    <p className="text-white/80 text-sm">Join us for an immersive learning experience</p>
                  </div>
                </div>

                {/* Right Column - Video and Actions */}
                <div className="space-y-6">
                  {/* Welcome Video */}
                  <div className="relative aspect-video bg-[#222222] rounded-xl overflow-hidden border border-[#444444] group hover:border-[#A0D268] transition-colors">
                    <div className="absolute inset-0 bg-[#1a1a1a]/60"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="w-16 h-16 rounded-full bg-[#A0D268] hover:bg-[#9ACD32] transition-all duration-300 border-none shadow-xl hover:shadow-2xl transform hover:scale-105 group-hover:scale-110 mb-3"
                        onClick={() => console.log("Play video")}
                      >
                        <Play className="w-8 h-8 text-[#222222] ml-1" />
                      </Button>
                      <p className="text-white/90 text-sm font-medium mt-2">Watch welcome message</p>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Button 
                        variant="outline"
                        className="w-full bg-[#333333] hover:bg-[#444444] text-white border-[#444444] h-12"
                        onClick={() => console.log("Download schedule")}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Schedule
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full bg-[#333333] hover:bg-[#444444] text-white border-[#444444] h-12"
                        onClick={() => console.log("Share")}
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Social Buttons with Enhanced Design */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <Button 
            className="group relative bg-gradient-to-r from-[#A0D268] to-[#9ACD32] text-[#222222] font-semibold flex items-center gap-3 px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onClick={() => window.open("#", "_blank")}
          >
            <MessageSquare className="w-6 h-6 transition-transform group-hover:scale-110" />
            <span className="text-lg">Join WhatsApp Group</span>
          </Button>
          
          <Button 
            className="group relative bg-gradient-to-r from-[#FFD700] to-[#FFC700] text-[#222222] font-semibold flex items-center gap-3 px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            onClick={() => window.open("#", "_blank")}
          >
            <Instagram className="w-6 h-6 transition-transform group-hover:scale-110" />
            <span className="text-lg">Follow on Instagram</span>
          </Button>
        </div>

        {/* Additional Information with Enhanced Layout */}
        <div className={`text-center space-y-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.8s" }}>
          <div className="inline-block px-6 py-3 rounded-full bg-[#A0D268]/10 border border-[#A0D268]/20">
            <p className="text-[#A0D268] text-lg">
              Save the date and stay tuned for more details!
            </p>
          </div>
          <p className="text-white/80 text-sm">
            Mark your calendar: {workshopDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
