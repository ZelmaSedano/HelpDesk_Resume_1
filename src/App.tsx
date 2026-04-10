import './App.css'

function App() {
  return (
    <>
      <div className="resume" style={{backgroundColor: 'white'}}>

        {/* header */}
        <div className="header">
          <h1>VAL SEDANO</h1>
          <h2>IT Support Specialist</h2>
          <div className="contact">
            <span>zvsedano@gmail.com</span> •
            <span>224.482.8189</span> •
            <span>Round Lake, IL</span>
          </div>
        </div>

        {/* summary */}
        <div className="section">
          <h3>SUMMARY</h3>
          <p>Detail-oriented professional with over 9 years of experience improving office operations, documentation, and digital systems.</p>
        </div>

        {/* experience */}
        <div className="section">
          <h3>EXPERIENCE</h3>

          <div className="job-1">
            <div className="job-header">
              <h4>Office Manager</h4>
              <span>WebCraft Labs</span>
              <span className="dates">2025-present</span>
            </div>
            <ul>
              <li>Serve as the primary point of contact for clients, handling inquiries, scheduling, invoicing, contract management, and relationship coordination.</li>
              <li>Provide UX design and IT support to Lead Developer.</li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <h4>Junior Software Engineer</h4>
              <span>Sony PlayStation</span>
              <span className="dates">2021-2025</span>
            </div>
            <ul>
              <li>Engineered 3+ responsive, partner-facing websites used by gaming partners.</li>
              <li>Crafted a comprehensive internal onboarding suite, reducing new engineer ramp-up by 90%.</li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <h4>Intake Coordinator/Bookkeeper</h4>
              <span>Dyrenes Klinnik</span>
              <span className="dates">2017-2020</span>
            </div>
            <ul>
              <li>Greeted and signed in incoming patients, registered new patients and managed scheduling.</li>
              <li>Managed Accounts Receivable/Payable and all invoicing.</li>
            </ul>
          </div>
        </div>

        {/* skills */}
        <div className="section">
          <h3> SKILLS</h3>
          <div className="skills">
              <ul>
                <li>QuickBooks</li> 
                <li>Microsoft Office Suite</li>
                <li>IT Support</li>
              </ul>
          </div>
        </div>


          {/* Education */}
          <div className="section">
            <h3>EDUCATION</h3>
            <div className="education">
              <h4>Techtonica</h4>
              <div className='school'>Certificate in Software Engineering, 2021</div>

              <h4>University of Mississippi</h4>
              <div>BA in Psychology, 2011</div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
