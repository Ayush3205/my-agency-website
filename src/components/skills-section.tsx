export default function SkillsSection() {
    const skills = [
      { name: "Executive Assistance", percentage: 90 },
      { name: "Customer Support", percentage: 92 },
      { name: "Digital Marketing", percentage: 90 },
      { name: "E-commerce Solutions", percentage: 95 }
    ]
  
    return (
      <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-200" >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-black">
              Creative & Professional<br />
              Skills Experience
            </h2>
            <div className="space-y-8">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-black">
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