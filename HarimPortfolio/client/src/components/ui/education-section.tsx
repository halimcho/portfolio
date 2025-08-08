import { GraduationCap, Code, Brain } from "lucide-react";

export default function EducationSection() {
  const educationItems = [
    {
      icon: GraduationCap,
      title: "University of British Columbia (UBC)",
      subtitle: "Biomedical Science 전공",
      status: "졸업",
      description: "생명과학의 기초를 탄탄히 하며 과학적 사고와 연구 방법론을 습득",
      borderColor: "border-blue-600",
      iconBg: "bg-blue-600"
    },
    {
      icon: Code,
      title: "구름 카카오톡 풀스택 부트캠프",
      subtitle: "13회차 수료",
      status: "2025",
      description: "실무 중심의 풀스택 개발 과정으로 프론트엔드부터 백엔드까지 종합적인 웹 개발 역량 구축",
      borderColor: "border-green-600",
      iconBg: "bg-green-600"
    },
    {
      icon: Brain,
      title: "이어드림 AI/ML 데이터 사이언스",
      subtitle: "4기 수료",
      status: "2024",
      description: "머신러닝, 딥러닝, 자연어처리, 데이터 엔지니어링 등 AI/ML 전 영역에 걸친 실무 교육",
      borderColor: "border-purple-600",
      iconBg: "bg-purple-600"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Training</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {educationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className={`flex-1 bg-slate-800 rounded-lg p-6 border-l-4 ${item.borderColor}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className="text-slate-400 text-sm">{item.status}</span>
                  </div>
                  <p className={`font-medium mb-2 ${item.iconBg === 'bg-blue-600' ? 'text-blue-400' : item.iconBg === 'bg-green-600' ? 'text-green-400' : 'text-purple-400'}`}>
                    {item.subtitle}
                  </p>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
