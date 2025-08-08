import { Brain, MessageSquare, Database, Monitor, Server, Table } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "머신러닝과 딥러닝을 활용한 예측 모델링과 패턴 인식",
      tags: ["Python", "TensorFlow", "PyTorch"],
      iconBg: "bg-purple-600",
      tagColor: "bg-purple-600/20 text-purple-400"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "텍스트 데이터 분석과 언어 모델을 통한 자연어 처리",
      tags: ["NLTK", "spaCy", "Transformers"],
      iconBg: "bg-green-600",
      tagColor: "bg-green-600/20 text-green-400"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "대용량 데이터 처리와 파이프라인 구축",
      tags: ["Apache Spark", "Kafka", "Airflow"],
      iconBg: "bg-blue-600",
      tagColor: "bg-blue-600/20 text-blue-400"
    },
    {
      icon: Monitor,
      title: "Frontend Development",
      description: "모던 웹 프론트엔드 개발과 사용자 경험 구현",
      tags: ["React", "Next.js", "TypeScript"],
      iconBg: "bg-yellow-600",
      tagColor: "bg-yellow-600/20 text-yellow-400"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "서버 사이드 개발과 API 설계",
      tags: ["Node.js", "Express", "FastAPI"],
      iconBg: "bg-red-600",
      tagColor: "bg-red-600/20 text-red-400"
    },
    {
      icon: Table,
      title: "Database & Cloud",
      description: "데이터베이스 설계와 클라우드 인프라 관리",
      tags: ["PostgreSQL", "MongoDB", "AWS"],
      iconBg: "bg-indigo-600",
      tagColor: "bg-indigo-600/20 text-indigo-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div key={index} className="bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-colors">
                <div className={`w-12 h-12 ${skill.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-slate-300 mb-4">{skill.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm ${skill.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
