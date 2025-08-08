export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        {/* Background Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-slate-300 leading-relaxed text-center mb-6 text-lg">
              캐나다 UBC(University of British Columbia)에서 Biomedical Science를 전공하며 
              생명과학의 기초를 다졌습니다. 이후 데이터 사이언스와 풀스택 개발 영역으로 
              확장하여 현재는 AI/ML과 웹 개발을 결합한 종합적인 솔루션을 개발하고 있습니다.
            </p>
            <p className="text-slate-300 leading-relaxed text-center text-lg">
              구름 카카오톡 풀스택 13회차와 이어드림 AI/ML 데이터 사이언스 4기를 통해 
              실무 중심의 개발 역량을 키우며, 머신러닝부터 웹 애플리케이션까지 
              다양한 프로젝트를 경험했습니다.
            </p>
          </div>
        </div>
        
        {/* Key Strengths */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-blue-400 text-center">Key Strengths</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 border border-blue-700/50 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-lg font-semibold mb-3 text-blue-400">English Fluent</h4>
              <p className="text-slate-300 text-sm leading-relaxed">캐나다 UBC에서 학업하며 습득한 원어민 수준의 영어 소통 능력</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 border border-green-700/50 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-semibold mb-3 text-green-400">Responsibility</h4>
              <p className="text-slate-300 text-sm leading-relaxed">프로젝트 완료까지 책임감 있게 임무를 수행하는 신뢰할 수 있는 자세</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 border border-purple-700/50 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-lg font-semibold mb-3 text-purple-400">Adaptation</h4>
              <p className="text-slate-300 text-sm leading-relaxed">새로운 기술과 환경에 빠르게 적응하여 최적의 솔루션을 찾는 능력</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
