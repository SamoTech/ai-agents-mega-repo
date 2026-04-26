import repos from '../../../data/repos.json';

export default function HomePage() {
  const categories = [...new Set(repos.flatMap((repo: any) => repo.categories))].sort() as string[];

  return (
    <main style={{fontFamily:'Inter, sans-serif', padding:'40px', maxWidth:'960px', margin:'0 auto'}}>
      <h1>AI Agents Mega Repo</h1>
      <p>A starter catalog for AI agent and chat repositories.</p>
      <section style={{marginTop:'32px'}}>
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => <li key={category}>{category}</li>)}
        </ul>
      </section>
      <section style={{marginTop:'32px'}}>
        <h2>Seed Repos</h2>
        <ul style={{display:'grid', gap:'16px', padding:0, listStyle:'none'}}>
          {repos.map((repo: any) => (
            <li key={repo.slug} style={{border:'1px solid #ddd', borderRadius:'12px', padding:'16px'}}>
              <strong>{repo.name}</strong>
              <div style={{fontSize:'13px', color:'#666', marginBottom:'6px'}}>{repo.slug}</div>
              <p style={{margin:0}}>{repo.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
