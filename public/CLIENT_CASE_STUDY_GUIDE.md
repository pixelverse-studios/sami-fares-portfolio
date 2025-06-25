# Case Study Template for Sami Fares Portfolio

## Instructions for AI Assistance

**Dear Client,**

This template contains the exact data structure needed for your case study submission. You can copy this entire file and paste it into any AI assistant (like ChatGPT, Claude, etc.) along with your project information.

**How to use this with AI:**

1. **Copy this entire template**
2. **Paste it into your AI chat** along with a message like:
   "Please help me fill out this case study template using information about my [project name] project. Here's the template: [paste template]. Here's my project information: [describe your project, goals, process, outcomes, etc.]"
3. **The AI will help you structure your content** to match this exact format
4. **Review and refine** the AI-generated content to ensure accuracy
5. **Send the completed structure** to Sami

This ensures your case study will integrate perfectly into the portfolio system!

---

## Required Data Structure

```typescript
const problemFraming = [
  'String describing the main problem or challenge',
  'Additional context about the problem',
  'Why this problem needed solving'
]

const projectOverview = {
  context: [
    'Background paragraph about the project',
    'Your role and collaboration details'
  ],
  roles: ['Role 1', 'Role 2'], // e.g., ['UX Designer', 'Copywriter']
  client: 'Client Name - Industry (Location)',
  deliverables: [
    'Deliverable 1',
    'Deliverable 2'
  ],
  timeline: 'X Weeks',
  tools: ['Tool1', 'Tool2'] // e.g., ['Figma', 'Web Research']
}

const goalsAndChallenges = {
  goals: [
    'Primary goal 1',
    'Primary goal 2'
  ],
  challenges: [
    'Challenge 1',
    'Challenge 2'
  ],
  description: [
    'Paragraph expanding on goals and challenges'
  ]
}

const researchAndDiscovery = {
  description: [
    'Research methodology and findings',
    'Discovery process details'
  ],
  quote: 'Quote from research participant or stakeholder',
  author: 'Quote Author Name',
  takeaways: [
    'Key insight 1',
    'Key insight 2'
  ]
}

const strategyAndDesign = {
  description: [
    'Design strategy and approach',
    'Implementation details'
  ],
  highlights: [
    {
      header: 'Feature Name',
      Icon: 'FaIconName', // Font Awesome icon name
      description: 'Feature description'
    }
  ],
  mockups: [
    {
      imgs: ['/assets/[project-folder]/image1.png'],
      explanation: 'Description of what the mockups show'
    }
  ]
}

const finalReflections = {
  description: [
    'Project outcomes and reflection'
  ],
  subHeader: 'Final [Something] Design',
  url: 'https://project-url.com', // optional
  achievments: [
    'Achievement 1',
    'Achievement 2'
  ],
  lessons: [
    'Lesson learned 1',
    'Lesson learned 2'
  ],
  feedback: 'Client testimonial quote',
  client: 'Client Title, Company Name',
  img: ['/assets/[project-folder]/final-image.png']
}

// Optional: Link to other case studies
const additionalCases = [
  {
    title: 'Other Case Study Name',
    img: '/assets/other-project/image.png',
    route: '/works/other-project-slug'
  }
]

export default {
  problemFraming,
  projectOverview,
  goalsAndChallenges,
  researchAndDiscovery,
  strategyAndDesign,
  finalReflections,
  additionalCases // optional
}
```