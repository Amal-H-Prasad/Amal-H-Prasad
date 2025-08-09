

export default function Placeholder() {
  return (
    <section style={{
      maxWidth: 840,
      margin: '48px auto',
      padding: 24,
      border: '1px solid #e5e7eb',
      borderRadius: 12,
      background: 'white',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{ marginTop: 0 }}>Paste your HTML here</h2>
      <p style={{ color: '#6b7280' }}>
        Replace this component with your converted JSX. If you provide the source HTML/CSS, I will convert it to React and drop it in.
      </p>
      <div style={{
        marginTop: 16,
        padding: 16,
        border: '1px dashed #cbd5e1',
        borderRadius: 8,
        color: '#64748b',
        background: '#f8fafc'
      }}>
        {/* Your HTML → JSX goes here. */}
      </div>
    </section>
  )
}