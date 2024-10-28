import { Experience } from "./components/experiences/experienceCard";
import { Project } from "./components/projects/projectsCard";
import Travel1 from './assets/images/projects/travel/travel1.png'
import Travel2 from './assets/images/projects/travel/travel2.png'
import Travel3 from './assets/images/projects/travel/travel3.png'
import Travel4 from './assets/images/projects/travel/travel4.png'
import Kp1 from './assets/images/projects/letskaypoh/kp1.png'
import Kp2 from './assets/images/projects/letskaypoh/kp2.png'
import Kp3 from './assets/images/projects/letskaypoh/kp3.png'
import El1 from './assets/images/projects/elon/el1.png'
import El2 from './assets/images/projects/elon/el2.png'
import Irecognise1 from './assets/images/projects/iRecognise/ir1.png'
import Irecognise2 from './assets/images/projects/iRecognise/ir2.png'
import Irecognise3 from './assets/images/projects/iRecognise/ir3.png'
import Irecognise4 from './assets/images/projects/iRecognise/ir4.png'
import Irecognise5 from './assets/images/projects/iRecognise/ir5.png'
import gsfb1 from './assets/images/projects/foodbuddy/gs1.png'
import gsfb2 from './assets/images/projects/foodbuddy/gs2.png'
import gsfb3 from './assets/images/projects/foodbuddy/gs3.png'
import tbp1 from './assets/images/tbp/tulips.jpeg'
import tbp2 from './assets/images/tbp/xuangub.jpg'
import tbp3 from './assets/images/tbp/roses.jpg'

export enum portfolio {
    SoftwareEngineering = 'Software Engineering',
    Design = 'Design',
    Entrepreneurship = 'Entrepreneurship',
    // Photography = 'Photography'
}

export const tbpPics = [
    tbp1, tbp2, tbp3
]

export const tbpUrl = 'https://www.thebloomingpalettesg.com'

export const designExperience: Experience[] = [
    {
        company: 'The Blooming Palette',
        date: '2020 Aug - Present',
        desc: 'Creative director, marketing, customer service and operations engineer.',
        role: 'Head Florist, Founder',
        url: 'https://www.instagram.com/thebloomingpalette'
    },
    {
        company: "Beng's Flowers",
        date: '2020-2021',
        desc: "Designed marketing collaterals for Beng's Flowers Instagram, boosting engagement and social media presence through bite sized information presented in the form of aesthetic instagram posts.",
        role: 'Marketing Content Designer',
        url: 'https://www.instagram.com/bengsflowers'
    },
    {
        company: "NTU Crescent Hall",
        date: '2020-2021',
        desc: "Led the Publicity & Media sub-committee of 10 members, designed marketing collaterals for events, managed socials, event photography and photo editing.",
        role: 'Publicity & Media Director',
    },
]

export const floristExperience: Experience[] = [
    {
        company: 'The Blooming Palette',
        date: '2020 Aug - Present',
        desc: 'Creative director, marketing, customer service and operations engineer.',
        role: 'Head Florist, Founder',
    },
]

export const sweExperience: Experience[] = [
    {
        company: 'Goldman Sachs',
        date: '2023 - Present',
        desc: 'Core contributor in the development of the newest generation of the distributed scheduling platform. Designed functional, modern and user centric features to expose the ecosystem in the UI, streamlining user workflow for scheduling millions of jobs by allowing users to perform tasks via the UI.',
        role: 'Frontend Engineer, Core Engineering',
        techStack: ['React', 'TypeScript', 'Redux', 'RXJS', 'Storybook']
    },
    {
        company: 'Goldman Sachs',
        date: '2022 May - 2022 Jul',
        desc: 'Generated Grafana dashboards to display metrics for system reliability monitoring using prober data obtained via Prometheus and queried with PromQL in Thanos.',
        role: 'Software Engineer Intern, Core Engineering',
        techStack: ['React', 'TypeScript', 'Redux', 'RXJS']
    },
    {
        company: 'GovTech Singapore',
        date: '2022 Jan - 2022 May',
        desc: 'Benchmarked computer vision algorithms including YOLO and Mask RCNN using the Detectron2 framework. Designed a full-stack desktop GUI for scraping Google images using Puppeteer, ElectronJS, ReactJS and NodeJS which helped to ease and speed up collection of images for training of machine learning models.',
        role: 'AI Engineer Intern, DSAID Platform',
        techStack: ['Detectron2', 'Computer Vision', 'React', 'TypeScript', 'ElectronJS']
    },
    {
        company: 'NinjaVan',
        date: '2021 May - 2021 July',
        desc: 'Pioneered the end-to-end development of a full-stack web application project to automate the manual Claims submission process, boosting the efficiency of the Finance department and facilitated the submission process for Ninja Van employees.',
        role: 'FullStack Engineer, Tooling & Automations',
        techStack: ['React', 'TypeScript', 'Next.js', 'Go']
    },
]

export const projects: Project[] = [
    {
        title: "Let's Kaypoh",
        imgUrls: [Kp1, Kp2, Kp3],
        desc: 'A mobile optimised web application to rally the neighbourhood kampung spirit to check in on the isolated elderly in Singapore, as part of the Build For Good hackathon organised by Open Government Products. Emerged as one of the 5 winning teams in the finale.',
        url: 'https://letskaypoh-frontend.vercel.app/',
        techStack: ['React', 'TypeScript', 'Vite', 'Python', 'Flask', 'MongoDB'],
        moreInfo: 'https://www.build.gov.sg/lets-kaypoh'
    },
    {
        title: 'Travel.io',
        imgUrls: [Travel1, Travel2, Travel3, Travel4],
        desc: 'Travel.io is an travel web application that helps busy travellers plan their itinerary based on their destination and duration of stay. Data obtained was scraped from TripAdvisor, TikTok and Airbnb.',
        techStack: ['React', 'TypeScript', 'Python', 'Flask', 'MongoDB', 'BeautifulSoup', 'Plotly'],
        url: 'https://youtu.be/B_oDP7XlETI?si=0y0T7aAkooTgptQv'
    },
    {
        title: "Outdoor Kaki",
        imgUrls: [Kp1, Kp2, Kp3],
        desc: 'An AI powered mobile optimised web application to encourage active ageing through gamification of exercise corner exercises and form checking with pose estimators. Built as part of GovTech DSAID internal hackathon and emerged as Champions & Voters Choice.',
        techStack: ['React', 'JavaScript', 'Computer Vision', 'Mediapipe Pose'],
    },
    {
        title: 'ElonSearch',
        imgUrls: [El1, El2],
        desc: 'An AI powered surveillance application',
        techStack: ['React', 'TypeScript', 'Python', 'Plotly', 'Solr'],
        url: 'https://youtu.be/oS0gVOeVdR8?si=d_DhYSah_ZX4uWAX'
    },
    {
        title: 'iRecognise',
        imgUrls: [Irecognise2, Irecognise1, Irecognise3, Irecognise4, Irecognise5],
        desc: 'NTU FYP: An AI powered surveillance application',
        techStack: ['React', 'TypeScript', 'Python', 'Flask', 'MongoDB', 'AWS S3 Bucket', 'OpenCV', 'Deepface'],
        url: 'https://youtu.be/TaXVs3rlhDo?si=LMjURxWYa1z5orEs'
    },
    {
        title: 'Food Buddy',
        imgUrls: [gsfb1, gsfb2, gsfb3,],
        desc: 'Food delivery aggregation application to save delivery fees',
        techStack: ['React', 'JavaScript', 'AWS Lambda', 'AWS DynamoDB', 'Redux'],
    },
    
]
