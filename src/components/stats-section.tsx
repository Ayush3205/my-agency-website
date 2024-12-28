export default function StatsSection() {
    const stats = [
      { number: "150+", label: "Project Done" },
      { number: "99+", label: "Satisfied Client" },
      { number: "5+", label: "Awards Wining" }
    ]
  
    return (
      <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-200" id="Contact">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <h3 className="text-4xl font-bold mb-2 text-blue-600">{stat.number}</h3>
                <p className=" font-bold text-blue">{stat.label}</p>
              </div>
            ))}
            <div className="text-3xl md:text-4xl font-bold text-blue-600">
              Great Achievements
            </div>
          </div>
        </div>
      </section>
    )
  }