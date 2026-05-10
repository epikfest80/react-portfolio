function Contacts() {
  return (
    <div>
      <div className="section" style={{ textAlign: 'center' }}>
        <video autoPlay loop muted playsInline className="avatar-video">
            <source src="/animation.gif.mp4" type="video/mp4" />
        </video>

        <h1 style={{ marginTop: '20px' }}>Портной Артем 😎😎!</h1>
        
        <div style={{ marginTop: '30px', textAlign: 'left', display: 'inline-block' }}>
          <h2>Мої контакти</h2>
          <address style={{ fontStyle: 'normal', lineHeight: '2' }}>
            <strong>Місто:</strong> Київ, Україна<br />
            <strong>Email:</strong> <a href="mailto:a.portnoj.zk41.fbmi28@lll.kpi.ua" style={{ color: '#3498db', textDecoration: 'none' }}>a.portnoj.zk41.fbmi28@lll.kpi.ua</a><br />
            <strong>Телефон:</strong> <a href="tel:+380991711085" style={{ color: '#3498db', textDecoration: 'none' }}>+38 (099) 171-10-85</a>
          </address>
        </div>
      </div>

      <div className="section" style={{ textAlign: 'center' }}>
        <img src="/photo_2026-01-17_00-50-43.jpg" alt="Веселий песик" style={{ width: '100%', maxWidth: '500px', borderRadius: '15px' }} />
      </div>
    </div>
  )
}

export default Contacts