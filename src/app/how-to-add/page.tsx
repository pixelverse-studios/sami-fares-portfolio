import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Study Submission Guide | Sami Fares',
  description: 'Guide for clients on how to submit case studies in the correct format'
}

export default function ClientGuide() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-background-section">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10" />
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-text-heading via-primary to-primary-dark bg-clip-text text-transparent mb-6">
              Case Study Submission Guide
            </h1>
            <p className="text-xl text-text-body leading-relaxed">
              Everything you need to know to submit case studies in the perfect format. 
              Follow this guide to ensure your project gets the showcase it deserves.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        
        {/* Overview Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-background-section rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text-heading mb-4">Two Files Required</h3>
            <ul className="space-y-3 text-text-body">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Case file:</strong> <code className="bg-background-subtle px-2 py-1 rounded text-sm">src/lib/caseStudies/case[ProjectName].ts</code></span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Index entry:</strong> Update <code className="bg-background-subtle px-2 py-1 rounded text-sm">allCases.ts</code></span>
              </li>
            </ul>
          </div>

          <div className="bg-background-section rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-primary-light/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-text-heading mb-4">Assets Folder</h3>
            <p className="text-text-body mb-4">
              Create a dedicated folder for your project assets:
            </p>
            <code className="bg-background-subtle text-primary px-4 py-2 rounded-lg block font-mono text-sm">
              public/assets/[project-name]/
            </code>
          </div>
        </div>

        {/* Step-by-Step Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-heading mb-4">3-Step Process</h2>
            <p className="text-text-body text-lg">Follow these steps to submit your case study perfectly</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-background-section rounded-2xl p-8 shadow-lg border border-border h-full">
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center text-background font-bold text-sm">1</div>
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-4 mt-4">Create Case File</h3>
                <p className="text-text-body mb-4">Build your case study data structure with all required sections.</p>
                <div className="bg-background-subtle rounded-lg p-4 text-sm">
                  <code className="text-text-heading">case[YourProject].ts</code>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-background-section rounded-2xl p-8 shadow-lg border border-border h-full">
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-light to-primary rounded-full flex items-center justify-center text-background font-bold text-sm">2</div>
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-4 mt-4">Add Assets</h3>
                <p className="text-text-body mb-4">Upload high-quality images and mockups to your project folder.</p>
                <div className="bg-background-subtle rounded-lg p-4 text-sm">
                  <code className="text-text-heading">Hero, Mocks, Final images</code>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-background-section rounded-2xl p-8 shadow-lg border border-border h-full">
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-dark to-primary rounded-full flex items-center justify-center text-background font-bold text-sm">3</div>
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-4 mt-4">Update Index</h3>
                <p className="text-text-body mb-4">Add your case to the main portfolio grid in allCases.ts.</p>
                <div className="bg-background-subtle rounded-lg p-4 text-sm">
                  <code className="text-text-heading">Portfolio entry</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Structure Section */}
        <div className="mb-16">
          <div className="bg-background-section rounded-2xl p-8 shadow-lg border border-border">
            <h2 className="text-3xl font-bold text-text-heading mb-8">Required Data Structure</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-bold text-text-heading mb-2">Problem Framing</h3>
                  <p className="text-text-body text-sm">2-3 paragraphs explaining the challenge and why it needed solving.</p>
                </div>
                
                <div className="border-l-4 border-primary-light pl-6">
                  <h3 className="font-bold text-text-heading mb-2">Project Overview</h3>
                  <p className="text-text-body text-sm">Context, roles, client info, deliverables, timeline, and tools used.</p>
                </div>
                
                <div className="border-l-4 border-primary-dark pl-6">
                  <h3 className="font-bold text-text-heading mb-2">Goals & Challenges</h3>
                  <p className="text-text-body text-sm">Clear lists of project objectives and obstacles encountered.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary/70 pl-6">
                  <h3 className="font-bold text-text-heading mb-2">Research & Discovery</h3>
                  <p className="text-text-body text-sm">Research process, key insights, quotes, and takeaways.</p>
                </div>
                
                <div className="border-l-4 border-primary-light/70 pl-6">
                  <h3 className="font-bold text-text-heading mb-2">Strategy & Design</h3>
                  <p className="text-text-body text-sm">Design approach with 4-6 key highlights and mockup explanations.</p>
                </div>
                
                <div className="border-l-4 border-primary-dark/70 pl-6">
                  <h3 className="font-bold text-text-heading mb-2">Final Reflections</h3>
                  <p className="text-text-body text-sm">Outcomes, achievements, lessons learned, and client feedback.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-background-subtle to-background-section rounded-2xl p-8 shadow-2xl border border-border">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-text-heading">Example Structure</h2>
              <a
                href="/CLIENT_CASE_STUDY_GUIDE.md"
                download="case-study-template.md"
                className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-background rounded-lg font-medium transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Full Template
              </a>
            </div>
            <pre className="text-primary text-sm overflow-x-auto">
{`const projectOverview = {
  context: [
    'Background paragraph about the project',
    'Your role and collaboration details'
  ],
  roles: ['UX Designer', 'Copywriter'],
  client: 'Client Name - Industry (Location)',
  deliverables: [
    'Deliverable 1',
    'Deliverable 2'
  ],
  timeline: '6 Weeks',
  tools: ['Figma', 'Web Research']
}`}
            </pre>
          </div>
        </div>

        {/* Requirements Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-heading mb-8 text-center">Content & Asset Requirements</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-text-heading mb-6">📝 Content Requirements</h3>
              <div className="space-y-4">
                {[
                  'Problem framing: 2-3 paragraphs explaining the challenge',
                  'Project overview: Context, roles, deliverables, timeline, tools',
                  'Goals & challenges: Clear lists of objectives and obstacles',
                  'Research: Process, key quote, and takeaways',
                  'Strategy: Design approach with 4-6 highlights',
                  'Reflections: Outcomes, achievements, lessons, client feedback'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-text-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-light/5 to-primary-light/10 rounded-2xl p-8 border border-primary-light/20">
              <h3 className="text-xl font-bold text-text-heading mb-6">🖼️ Asset Requirements</h3>
              <div className="space-y-4">
                {[
                  'Hero image for portfolio grid',
                  '2-3 mockup images showing key screens/designs',
                  'Final design image',
                  'All images should be high-quality PNGs',
                  'Consistent naming convention',
                  'Organized in dedicated project folder'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-light rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-text-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technical Notes */}
        <div className="mb-16">
          <div className="bg-background-section border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-text-heading mb-6">⚡ Technical Notes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-text-heading mb-1">Icons</h4>
                  <p className="text-text-body text-sm">Use Font Awesome icon names (e.g., 'FaBullseye')</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-text-heading mb-1">Paths</h4>
                  <p className="text-text-body text-sm">All file paths absolute from /assets/</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-text-heading mb-1">Slugs</h4>
                  <p className="text-text-body text-sm">Project slugs lowercase with hyphens</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Example Files */}
        <div className="mb-16">
          <div className="bg-background-section rounded-2xl p-8 shadow-lg border border-border">
            <h2 className="text-2xl font-bold text-text-heading mb-6">📁 Example File Structure</h2>
            <div className="bg-background-subtle rounded-lg p-6 font-mono text-sm">
              <div className="text-primary">
                <div className="text-text-body">src/lib/caseStudies/</div>
                <div className="ml-4 text-primary-light">caseMyProject.ts</div>
                <div className="text-text-body mt-4">public/assets/my-project/</div>
                <div className="ml-4 text-primary-dark">MyProjectHero.png</div>
                <div className="ml-4 text-primary-dark">MyProjectMock1.png</div>
                <div className="ml-4 text-primary-dark">MyProjectMock2.png</div>
                <div className="ml-4 text-primary-dark">MyProjectFinal.png</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-background border border-primary/20">
            <h2 className="text-2xl font-bold mb-4 text-background">Need Help?</h2>
            <p className="text-background/80 mb-6">
              Have questions about the format or structure? Don't hesitate to reach out.
            </p>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-background/20 rounded-full">
              <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <p className="text-sm text-background/80 mt-4">Contact Sami with any questions</p>
          </div>
        </div>
      </div>
    </main>
  )
}