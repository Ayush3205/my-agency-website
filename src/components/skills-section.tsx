export default function SkillsSection() {
    const skills = [
      { name: "Graphics Design", percentage: 80 },
      { name: "Executive Assistance", percentage: 80 },
      { name: "Digital Marketing", percentage: 90 },
      { name: "E-commerce Solutions", percentage: 85 }
    ]
  
    return (
      <section className="pt-20 pb-16 bg-gradient-to-b from-blue-300 via-blue-1000 to-blue-800" >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-white">
              Creative & Professional<br />
              Skills Experience
            </h2>
            <div className="space-y-8">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-white">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gray-100 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }