interface ProjectProps {
  title: string;
  desc: string;
  tags: string[];
}

function ProjectCard({ title, desc, tags }: ProjectProps) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <small style={{ display: 'block', marginTop: '10px', color: '#666' }}>
        <strong>Теги:</strong> {tags.join(', ')}
      </small>
    </article>
  )
}

export default ProjectCard