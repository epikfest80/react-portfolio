import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

const projectsData = [
  { id: 1, title: "Медичний чат-бот", desc: "Програма на C++, яка симулює спілкування з користувачем.", tags: ["C++", "Алгоритми"] },
  { id: 2, title: "Калькулятор калорій", desc: "Простенький калькулятор для контролю ваги.", tags: ["C++", "Основи"] },
  { id: 3, title: "Консольна гра 'Змійка'", desc: "Класична гра у терміналі.", tags: ["C++", "Ігри"] },
  { id: 4, title: "Веб-портфоліо", desc: "Персональний сайт-візитка.", tags: ["HTML", "CSS", "React"] }
];

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projectsData.filter(project => {
    const query = searchQuery.toLowerCase();
    return project.title.toLowerCase().includes(query) || 
           project.desc.toLowerCase().includes(query) ||
           project.tags.some(tag => tag.toLowerCase().includes(query));
  });

  return (
    <section className="section">
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <video autoPlay loop muted playsInline className="hero-video">
            <source src="/animation.gif.mp4" type="video/mp4" />
        </video>
      </div>

      <h1 style={{ textAlign: 'center' }}>Розробник C++ (Портной Артем)</h1>
      
      <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <input 
          type="text" 
          placeholder="Шукати за назвою або тегом..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '10px', width: '100%', maxWidth: '400px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <div className="grid-container">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              desc={project.desc} 
              tags={project.tags} 
            />
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>Проєктів не знайдено.</p>
        )}
      </div>
    </section>
  )
}

export default Home