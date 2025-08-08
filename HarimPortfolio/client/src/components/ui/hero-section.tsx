import { Download, Mail, MapPin } from "lucide-react";
import { useLocation } from "@/hooks/use-location";
import { Button } from "./button";

export default function HeroSection() {
  const { location, loading } = useLocation();

  const handleDownloadResume = () => {
    // TODO: Add actual resume download logic
    console.log("Download resume clicked");
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                <img 
                  src="/KakaoTalk_Photo_2025-08-08-19-04-56_1754647699856.jpeg" 
                  alt="조하림 프로필 사진" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initial letter if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full hidden items-center justify-center text-4xl font-bold text-white">
                  조
                </div>
              </div>
            </div>
            {/* Cute Status Bubble */}
            <div className="absolute -top-4 -right-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white text-xs px-4 py-2 rounded-full shadow-lg animate-bounce">
              <div className="relative">
                <span className="whitespace-nowrap font-medium">💼 Ready to be hired! ✨</span>
                {/* Speech bubble tail */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          조하림
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
          Full Stack Developer & Data Scientist
        </p>
        
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Biomedical Science 전공으로 시작해 AI/ML과 풀스택 개발의 세계로 확장한 개발자입니다.
          데이터의 통찰력과 웹 기술의 혁신을 결합하여 의미 있는 솔루션을 만들어갑니다.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center max-w-2xl mx-auto">
          <Button
            onClick={handleDownloadResume}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-all transform hover:scale-105"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          
          <Button
            onClick={handleContactClick}
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 px-6 py-3 font-medium transition-all"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
          
          <div className="px-6 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg flex items-center justify-center gap-2 transition-all bg-gradient-to-r from-slate-800/50 to-slate-700/50 hover:from-slate-700/50 hover:to-slate-600/50">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <MapPin size={14} className="text-blue-400" />
            {loading ? (
              <span className="animate-pulse text-slate-400 text-sm">Loading...</span>
            ) : (
              <span className="text-slate-300 text-sm font-medium">{location}</span>
            )}
          </div>
        </div>
      </div>
      

    </section>
  );
}
