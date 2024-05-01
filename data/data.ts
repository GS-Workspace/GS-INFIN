// Need to be updated with the actual data from the API

export interface LinkButton {
  text: string
  url: string
  color: string
  textColor?: string
}

export interface ParagraphContent {
  title?: string
  avatar?: Avatar
  content: string[]
  id: number
  type: string
}

export interface Avatar {
  url: string
  name: string
  title: string
}

export interface BlockContentType {
  title: string
  color: string
  id: number
  direction?: string
  shortTitle?: string
  image?: string
  textColor?: string
  linkButton?: LinkButton
  paragaphContents?: ParagraphContent[]
  notes?: string[]
  avatar?: Avatar
  images?: string[]
  type?: string
  note?: string
}

export const cardContents: BlockContentType[] = [
  {
    title: 'The Insufficient Status Quo for Businesses',
    color: '#FFFFFF',
    id: 1,
    direction: 'left',
    image: '/images/business_1.png',
    type: 'default',
    textColor: '#121212',
    shortTitle: 'Business',
    linkButton: {
      text: 'THE INFIN FOR BUSINESS',
      url: '/',
      color: '#FFCD00'
    },
    paragaphContents: [
      {
        title: 'For employers',
        content: [
          'It’s hard to evaluate individual contributions in a team environment because some employees are more visible. Similarly, some employees may take more credit than others. Meanwhile, the ones who are actually driving the company’s success may be flying completely under the radar. And then, employers have to decide on bonuses and promotions based on limited information and often with resentment from the employees. It’s frustrating.'
        ],
        id: 4e31,
        type: 'default'
      },
      {
        title: 'Use The INFIN’s insights to',
        content: [
          'Determine the individual contribution \nand ROI of every employee',
          'Improve team dynamics and \ncompany culture',
          'Identify underperformers and better utilize employee strengths',
          'Invest with better alignment of ROI, \nlabor spend, and business objectives'
        ],
        id: 124e12,
        type: 'list'
      }
    ]
  },
  {
    title: 'Fairness and Objective Data for Individuals',
    color: '#E8E8E8',
    id: 2,
    type: 'default',
    direction: 'Left',
    textColor: '#121212',
    shortTitle: 'Individuals',
    image: '/images/individuals_2.png',
    linkButton: {
      text: 'THE INFIN FOR Individuals',
      url: '/',
      color: '#121212',
      textColor: '#FFFFFF'
    },
    paragaphContents: [
      {
        title: 'For employers',
        content: [
          'It’s hard to evaluate individual contributions in a team environment because some employees are more visible. Similarly, some employees may take more credit than others. Meanwhile, the ones who are actually driving the company’s success may be flying completely under the radar. And then, employers have to decide on bonuses and promotions based on limited information and often with resentment from the employees. It’s frustrating.'
        ],
        id: 42213412431,
        type: 'default'
      },
      {
        title: 'Use The INFIN’s insights to',
        content: [
          'Determine the individual contribution \nand ROI of every employee',
          'Improve team dynamics and \ncompany culture',
          'Identify underperformers and better utilize employee strengths',
          'Invest with better alignment of ROI, \nlabor spend, and business objectives'
        ],
        id: 124412412,
        type: 'list'
      }
    ]
  },
  {
    title: 'Fairness and Objective',
    color: 'black',
    id: 3,
    type: 'objective',
    shortTitle: 'REVIEWS',
    textColor: '#FFFFFF',
    notes: [
      'The INFIN’s data is an objective, flexible, dynamic, and real-time alternative to the limited and speculative information normally available to employers and individuals.',
      'The old maxim of “knowledge is power” applies here for both employers and employees. Don’t let individual performance and recognition be lost in the cloud of office politics. The INFIN gives a voice to each individual and a fuller picture to the employer.'
    ],
    paragaphContents: [
      {
        content: [
          '[The INFIN] immediately identified the healthy and high performing teams, comfortable with task conflict, versus the dysfunctional and ineffective teams unable to withstand constructive feedback. Healthy and high performing teams were able to eliminate ambiguity and subjectivity in recognizing and rewarding individual contributions. Dysfunctional and ineffective teams were unable to do so. The INFIN’s insights were invaluable in identifying the root causes of the dysfunction and ineffectiveness.'
        ],
        avatar: {
          url: '/images/carla.png',
          name: 'Carla M.',
          title: 'Business Change Manager at DRGinvest'
        },
        id: 131e134,
        type: 'paragraph'
      },
      {
        content: [
          'We appreciated its focus on fairness and objective data, it has completely changed how we handle employee evaluations and promotions. It also supports and motivates a true merit-based culture, eliminating the usual office politics. This platform has enabled our leadership team to better recognize the daily efforts of our employees, making sure that recognition and promotion opportunities are justly given. Thank you!'
        ],
        avatar: {
          url: '/images/tyler.png',
          name: 'Tyler H.',
          title: 'CEO of Nuclear Holding Group'
        },
        id: 12412412,
        type: 'paragraph'
      }
    ]
  },
  {
    title: 'Ready to get started',
    color: '#FFCD00',
    shortTitle: 'GET STARTED',
    id: 4,
    type: 'demo',
    images: ['/images/bot1.png', '/images/bot2.png'],
    linkButton: {
      text: 'Schedule a live demo',
      url: '/',
      color: '#FFFFFF'
    },
    note: 'What can The INFIN do for you?'
  }
]
