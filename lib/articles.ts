export interface Article {
  slug: string
  title: string
  id: string
  excerpt: string
  content: string
  date: string
  category?: string
  image?: string
}

// Sample articles data
// In a real application, you would fetch this from a CMS, database, or markdown files
const articlesData: Article[] = [
  {
    slug: 'research-on-design-systems',
    title: 'RESEARCH ON DESIGN SYSTEMS',
    id: 'DOC_001',
    excerpt: 'An exploration of design systems and their impact on modern digital interfaces. This research examines the principles, methodologies, and practical applications of systematic design approaches.',
    content: `Design systems have become fundamental to modern digital product development. They provide a structured approach to creating consistent, scalable, and maintainable interfaces.

This research examines the core principles that underpin effective design systems, including atomic design methodology, component-based architecture, and the relationship between design tokens and implementation.

Through case studies and practical analysis, we explore how organizations leverage design systems to improve collaboration between designers and developers, reduce redundancy, and create more cohesive user experiences.

The findings suggest that successful design systems require careful planning, ongoing maintenance, and a commitment to documentation and education within the organization.`,
    date: '2024-01-15',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop',
  },
  {
    slug: 'essay-on-minimalism',
    title: 'ESSAY ON MINIMALISM',
    id: 'DOC_002',
    excerpt: 'A philosophical examination of minimalism in design and its cultural significance. This essay explores the relationship between reduction, clarity, and meaning in visual communication.',
    content: `Minimalism represents more than an aesthetic choice - it is a philosophy of reduction that seeks to eliminate the unnecessary in favor of the essential.

In design, minimalism challenges us to question every element, every line, every color. What remains after we strip away the decorative? What emerges when form follows function with uncompromising clarity?

This essay explores the historical roots of minimalism, from the Bauhaus movement to Swiss design, and examines how contemporary practitioners continue to find meaning in restraint.

The power of minimalism lies not in what is removed, but in what remains: the essential message, the core function, the fundamental truth of the design.`,
    date: '2024-02-20',
    category: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop',
  },
  {
    slug: 'typography-and-readability',
    title: 'TYPOGRAPHY AND READABILITY',
    id: 'DOC_003',
    excerpt: 'A research study on the relationship between typographic choices and reading comprehension. This work analyzes how typeface selection, spacing, and layout affect the reading experience.',
    content: `Typography is the foundation of written communication, yet its impact on readability and comprehension is often underestimated.

This research investigates how different typographic variables - typeface selection, line length, line height, letter spacing, and contrast - affect reading speed, comprehension, and user satisfaction.

Through controlled experiments and user testing, we measure the performance of various typographic configurations across different contexts: long-form articles, technical documentation, and digital interfaces.

The results provide evidence-based guidelines for typographic choices that optimize readability while maintaining aesthetic integrity. These findings have practical implications for designers, publishers, and anyone involved in creating written content.`,
    date: '2024-03-10',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop',
  },
  {
    slug: 'color-theory-in-digital-media',
    title: 'COLOR THEORY IN DIGITAL MEDIA',
    id: 'DOC_004',
    excerpt: 'An analysis of color psychology and its application in digital design. This research explores how color choices influence user perception, emotion, and behavior in digital interfaces.',
    content: `Color is one of the most powerful tools in a designers arsenal, capable of evoking emotion, guiding attention, and communicating meaning without words.

This research delves into the psychological foundations of color perception, examining how different hues, saturations, and values affect human cognition and emotional response.

We analyze case studies from successful digital products, exploring how strategic color choices contribute to brand identity, usability, and user engagement. The study also addresses accessibility considerations, particularly color contrast requirements for users with visual impairments.

The findings reveal that effective color usage requires understanding both the psychological impact of colors and the technical constraints of digital displays, creating a balance between aesthetic appeal and functional clarity.`,
    date: '2024-04-05',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop',
  },
  {
    slug: 'information-architecture-modern-web',
    title: 'INFORMATION ARCHITECTURE IN THE MODERN WEB',
    id: 'DOC_005',
    excerpt: 'A comprehensive study of information architecture principles and their evolution in contemporary web design. This research examines how structure and organization impact user navigation and content discovery.',
    content: `Information architecture forms the invisible skeleton of every digital experience, determining how users navigate, understand, and interact with content.

This research traces the evolution of information architecture from its origins in library science to its current application in complex digital ecosystems. We examine how the principles of categorization, hierarchy, and navigation have adapted to the unique challenges of web and mobile interfaces.

Through user testing and analytical studies, we explore how different organizational structures affect user behavior, task completion rates, and overall satisfaction. The research addresses both traditional hierarchical models and emerging patterns like faceted navigation and card-based layouts.

The study concludes that effective information architecture requires a deep understanding of user mental models, content relationships, and the specific context of use, creating structures that feel intuitive rather than imposed.`,
    date: '2024-05-12',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    slug: 'ethics-in-user-experience-design',
    title: 'ETHICS IN USER EXPERIENCE DESIGN',
    id: 'DOC_006',
    excerpt: 'A critical examination of ethical considerations in UX design practice. This essay addresses dark patterns, user manipulation, privacy concerns, and the designers responsibility to users.',
    content: `As user experience design becomes increasingly influential in shaping human behavior, the ethical implications of design decisions demand serious consideration.

This essay examines the tension between business objectives and user welfare, exploring how design choices can either empower or manipulate users. We analyze case studies of dark patterns - design techniques that intentionally deceive or coerce users - and their impact on trust and user autonomy.

The discussion extends to privacy concerns, data collection practices, and the responsibility designers bear in protecting user information. We also address accessibility and inclusion, questioning who benefits from design decisions and who is excluded.

The essay argues that ethical UX design requires transparency, respect for user autonomy, and a commitment to creating experiences that genuinely serve user needs rather than exploiting psychological vulnerabilities for commercial gain.`,
    date: '2024-06-18',
    category: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
  },
  {
    slug: 'motion-design-and-microinteractions',
    title: 'MOTION DESIGN AND MICROINTERACTIONS',
    id: 'DOC_007',
    excerpt: 'Research on the role of animation and motion in digital interfaces. This study investigates how microinteractions enhance usability, provide feedback, and create delightful user experiences.',
    content: `Motion design has evolved from decorative animation to a fundamental component of effective interface design, providing feedback, guiding attention, and enhancing usability.

This research examines the psychological and perceptual foundations of motion in digital interfaces, exploring how animation affects user understanding, task performance, and emotional response.

We analyze various types of microinteractions - loading states, transitions, hover effects, and feedback animations - measuring their impact on perceived performance, clarity of communication, and overall user satisfaction.

The study reveals that well-designed motion can significantly improve usability by providing clear feedback, reducing cognitive load, and creating a sense of continuity. However, motion must be purposeful and subtle; excessive or unnecessary animation can distract and frustrate users.

The findings provide practical guidelines for implementing motion design that enhances rather than hinders the user experience.`,
    date: '2024-07-22',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
  },
  {
    slug: 'cognitive-load-in-interface-design',
    title: 'COGNITIVE LOAD IN INTERFACE DESIGN',
    id: 'DOC_008',
    excerpt: 'An investigation into cognitive load theory and its application to interface design. This research explores how design choices affect mental effort and information processing.',
    content: `Cognitive load theory provides a framework for understanding how humans process information, with direct implications for interface design and user experience.

This research applies cognitive load theory to digital interfaces, examining how design choices - from information density to interaction complexity - affect the mental effort required to use a system.

We explore three types of cognitive load: intrinsic (inherent complexity of the task), extraneous (unnecessary complexity introduced by poor design), and germane (mental effort that contributes to learning and understanding).

Through controlled experiments, we measure how different design approaches affect task completion time, error rates, and user satisfaction. The study examines techniques for reducing extraneous load while optimizing germane load to support learning and mastery.

The findings demonstrate that thoughtful design can significantly reduce cognitive load, making interfaces more intuitive and less mentally taxing for users.`,
    date: '2024-08-30',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5da04ad?w=600&h=400&fit=crop',
  },
  {
    slug: 'semiotics-in-digital-communication',
    title: 'SEMIOTICS IN DIGITAL COMMUNICATION',
    id: 'DOC_009',
    excerpt: 'A theoretical exploration of signs, symbols, and meaning in digital interfaces. This essay examines how visual elements communicate meaning and how cultural context shapes interpretation.',
    content: `Semiotics, the study of signs and symbols, offers valuable insights into how meaning is constructed and communicated through digital interfaces.

This essay explores how visual elements - icons, colors, typography, layout - function as signs that users interpret based on cultural codes, personal experience, and contextual cues.

We examine the relationship between signifiers (the visual form) and signifieds (the meaning), exploring how designers can create interfaces that communicate effectively across different cultural contexts and user groups.

The discussion addresses the challenges of universal design versus culturally specific communication, questioning whether truly universal symbols exist or if all meaning is culturally constructed.

The essay argues that understanding semiotics helps designers create more intentional, meaningful interfaces that respect cultural diversity while maintaining clarity and usability.`,
    date: '2024-09-15',
    category: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
  },
  {
    slug: 'responsive-design-evolution',
    title: 'RESPONSIVE DESIGN EVOLUTION',
    id: 'DOC_010',
    excerpt: 'A historical analysis of responsive design principles and their adaptation to an increasingly diverse device landscape. This research traces the evolution from fixed layouts to fluid, adaptive interfaces.',
    content: `Responsive design has fundamentally transformed how we approach web development, moving from fixed-width layouts to fluid, adaptive interfaces that work across countless device configurations.

This research traces the evolution of responsive design from its early adoption to current best practices, examining how techniques and philosophies have evolved alongside changing technology and user expectations.

We explore the technical foundations - fluid grids, flexible images, and media queries - as well as the design principles that guide responsive implementations. The study addresses challenges like performance optimization, content prioritization, and maintaining design integrity across breakpoints.

The research also examines emerging approaches like container queries, intrinsic web design, and the shift toward component-based responsive strategies that prioritize flexibility and maintainability.

The findings suggest that responsive design is not merely a technical requirement but a fundamental shift toward designing systems that adapt gracefully to diverse contexts and user needs.`,
    date: '2024-10-08',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
  },
]

export async function getArticles(): Promise<Article[]> {
  // Simulate async data fetching
  return Promise.resolve([])
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getArticles()
  return articles.find((article) => article.slug === slug) || null
}

