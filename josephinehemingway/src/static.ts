import { Experience } from "./components/experiences/experienceCard";
import { Project } from "./components/projects/projectsCard";
import Travel1 from './assets/images/projects/travel/travel1.png'
import Travel2 from './assets/images/projects/travel/travel2.png'
import Travel3 from './assets/images/projects/travel/travel3.png'
import Travel4 from './assets/images/projects/travel/travel4.png'
import Travel5 from './assets/images/projects/travel/travel5.png'
import Travel6 from './assets/images/projects/travel/travel6.png'
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
import ok1 from './assets/images/projects/outdoorkaki/ok1.png'
import ok2 from './assets/images/projects/outdoorkaki/ok2.png'
import ok3 from './assets/images/projects/outdoorkaki/ok3.png'
import ok4 from './assets/images/projects/outdoorkaki/ok4.png'
import ok5 from './assets/images/projects/outdoorkaki/ok5.png'
import ok6 from './assets/images/projects/outdoorkaki/ok6.png'
import ok7 from './assets/images/projects/outdoorkaki/ok7.png'
import hfgw1 from './assets/images/projects/healthy/hfgw1.png'
import hfgw2 from './assets/images/projects/healthy/hfgw2.png'
import hfgw3 from './assets/images/projects/healthy/hfgw3.png'
import hfgw4 from './assets/images/projects/healthy/hfgw4.png'
import hfgw5 from './assets/images/projects/healthy/hfgw5.png'
import hfgw6 from './assets/images/projects/healthy/hfgw6.png'
import hfgw7 from './assets/images/projects/healthy/hfgw7.png'
import hfgw8 from './assets/images/projects/healthy/hfgw8.png'
import notecard from './assets/images/projects/others/notecard.png'
import admin from './assets/images/projects/others/admin.png'

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
        desc: 'As the creative director, I design floral arrangements and all sorts of marketing materials ranging from event and product photography, Instagram posts, website design, gift cards and more. We design floral products for corporate gifting, events, weddings and all other occasions.',
        role: 'Head Florist, Founder',
        url: 'https://www.instagram.com/thebloomingpalette',
        techStack: ['Canva', 'Adobe Photoshop', 'Adobe Lightroom']
    },
    {
        company: "Beng's Flowers",
        date: '2020-2021',
        desc: "Designed marketing collaterals for Beng's Flowers Instagram, boosting engagement and social media presence through bite sized information presented in the form of aesthetic instagram posts.",
        role: 'Marketing Content Designer',
        url: 'https://www.instagram.com/bengsflowers',
        techStack: ['Canva']
    },
    {
        company: "NTU Crescent Hall",
        date: '2020-2021',
        desc: "Led the Publicity & Media sub-committee of 10 members, designed marketing collaterals for events, managed socials (Instagram, Facebook), event photography and photo editing.",
        role: 'Publicity & Media Director, 6th Crescent Hall Council',
        techStack: ['Procreate', 'Canva', 'Adobe Photoshop', 'Adobe Lightroom']
    },
    {
        company: "Hey, You've Got Mail!",
        date: '2020-2021',
        desc: "Designed cards, scrapbook pages and activity books for the elderly home to tackle elderly isolation in Singapore. Designed a limited edition floral card to raise funds during Valentine's day in collaboration with The Blooming Palette.",
        role: 'Volunteer',
        techStack: ['Procreate'],
        url: 'https://www.instagram.com/p/CZvq2BqPo5k/?img_index=1'
    },
    {
        company: "AIA Singapore",
        date: '2019',
        desc: "Designed EDMs, newsletters, marketing brochures and flyers for clients and stakeholders of AIA. Organised an introductory workshop for how to design on Canva for the Corporate Solutions Sales & Marketing team.",
        role: 'Administrative Assistant',
    },
]


export const floristExperience: Experience[] = [
    {
        company: 'The Blooming Palette',
        date: '2020 Aug - Present',
        desc: 'Creative director, marketing, customer service and operations engineer. I wear a lot of hats here, I learn how to manage business operations and logistics, liaise with clients, design and market my products. I also try to streamline administrative operations by developing automations and tools that I can use on the fly.',
        role: 'Head Florist, Founder',
    },
]

export const sweExperience: Experience[] = [
    {
        company: 'Goldman Sachs',
        date: '2023 Jul - Present',
        desc: 'Core contributor in the development of the newest generation of the distributed scheduling platform. Designed functional, modern and user centric features to expose the ecosystem in the UI, streamlining user workflow for scheduling millions of jobs by allowing users to perform tasks via the UI.',
        role: 'Frontend Engineer, Core Engineering',
        techStack: ['React', 'TypeScript', 'Redux', 'RXJS', 'Storybook']
    },
    {
        company: 'Goldman Sachs',
        date: '2022 May - 2022 Jul',
        desc: 'Generated Grafana dashboards to display metrics for system reliability monitoring using prober data obtained via Prometheus and queried with PromQL in Thanos.',
        role: 'Software Engineer Intern, Core Engineering',
        techStack: ['React', 'TypeScript', 'Redux', 'RXJS', 'Grafana', 'Go']
    },
    {
        company: 'GovTech Singapore',
        date: '2022 Jan - 2022 May',
        desc: 'Benchmarked computer vision algorithms including YOLO and Mask RCNN using the Detectron2 framework. Designed a full-stack desktop GUI for scraping Google images using Puppeteer, ElectronJS, ReactJS and NodeJS which helped to ease and speed up collection of images for training of machine learning models.',
        role: 'AI Engineer Intern, DSAID Platform',
        techStack: ['Detectron2', 'Computer Vision', 'React', 'TypeScript', 'ElectronJS', 'YOLO', 'MaskRCNN', 'Puppeteer', 'ElectronJS', 'NodeJS']
    },
    {
        company: 'NinjaVan',
        date: '2021 May - 2021 July',
        desc: 'Pioneered the end-to-end development of a full-stack web application project to automate the manual Claims submission process, boosting the efficiency of the Finance department and facilitated the submission process for Ninja Van employees.',
        role: 'FullStack Engineer, Tooling & Automations',
        techStack: ['React', 'TypeScript', 'Next.js', 'Go', 'Kafka', 'Docker']
    },
]

export const projects: Project[] = [
    {
        title: "Let's Kaypoh",
        imgUrls: [Kp1, Kp2, Kp3],
        desc: (
            'A responsive web application to rebuild the kampung spirit in neighbourhoods by encouraging low-touch interactions to check in on the wellbeing of nearby isolated elderly in Singapore. This project was built as part of the Build For Good hackathon organised by Open Government Products, and we emerged as one of the 5 winning teams in the finale.'
        ),
        url: 'https://letskaypoh-frontend.vercel.app/',
        techStack: ['React', 'TypeScript', 'Vite', 'Python', 'Flask', 'MongoDB', 'Google Maps API'],
        moreInfo: 'https://www.build.gov.sg/lets-kaypoh'
    },
    {
        title: 'Travel.io',
        imgUrls: [Travel1, Travel2, Travel3, Travel4, Travel5, Travel6],
        desc: 'Travel.io is a travel web application that helps busy travellers plan their itinerary based on their destination and duration of stay. In this application, sentiment analysis of TikTok Videos and TripAdvisor reviews was performed to refine recommendations, and K-Means clustering algorithm was used to group nearby places of interest for itinerary planning. Data obtained was scraped from TripAdvisor, TikTok and Airbnb.',
        techStack: ['React', 'TypeScript', 'Python', 'Flask', 'MongoDB', 'BeautifulSoup', 'Plotly', 'Google Maps API', 'KMeans Clustering', 'Sentiment Analysis', 'NLP'],
        url: 'https://youtu.be/B_oDP7XlETI?si=0y0T7aAkooTgptQv'
    },
    {
        title: 'ElonSearch',
        imgUrls: [El1, El2],
        desc: "A mini 'search engine' on Elon Musk related content from Twitter and Reddit, indexed with Solr. Equipped with sentiment analysis on each content and word cloud data visualisation to gauge general sentiment of search results.",
        techStack: ['React', 'TypeScript', 'Python', 'Plotly', 'Solr', 'Sentiment Analysis'],
        url: 'https://youtu.be/oS0gVOeVdR8?si=d_DhYSah_ZX4uWAX'
    },
    {
        title: 'iRecognise',
        imgUrls: [Irecognise2, Irecognise1, Irecognise3, Irecognise4, Irecognise5],
        desc: 'NTU FYP: An AI powered security application for surveillance use cases to promptly detect registered persons in the database. iRecognise is equipped with face detection and recognition on live camera footage or uploaded pre-recorded videos, realtime alerting features, a customisable UI dashboard and supports the connection of multiple realtime IP cameras for streaming. The Deepface open-source face recognition model was used for various facial analysis tasks on processed video frames, and a Telegram Bot was developed for dispatching realtime alerts.',
        techStack: ['React', 'TypeScript', 'Python', 'Flask', 'MongoDB', 'AWS S3 Bucket', 'OpenCV', 'Deepface', 'Telegram Bot API', 'Figma'],
        url: 'https://youtu.be/TaXVs3rlhDo?si=LMjURxWYa1z5orEs'
    },
    {
        title: 'Food Buddy',
        imgUrls: [gsfb1, gsfb2, gsfb3,],
        desc: 'A web application built to aggregate food delivery orders during lunchtime to enable busy employees to save on delivery fees to the same office, pre-plan meals and facilitate the claims reimbursement process. Built as part of GS Summer Internship Hackathon 2022.',
        techStack: ['React', 'JavaScript', 'AWS Lambda', 'AWS DynamoDB', 'AWS S3', 'Redux'],
    }, 
]

export const mobileProjects: Project[] = [
    {
        title: "Outdoor Kaki",
        imgUrls: [ok1, ok2, ok3, ok4, ok5, ok6, ok7],
        desc: 'An AI powered, mobile optimised web application to encourage active ageing through gamification of exercise corner equipments and form checking of exercises using pose detection estimators. The Mediapipe Blazepose pose estimator model was used to detect user movements and record repetition count. Built as part of GovTech DSAID internal hackathon and emerged as Champions & Voters Choice.',
        techStack: ['React', 'JavaScript', 'Computer Vision', 'Mediapipe Pose', 'OpenCV', 'NodeJS'],
    },
    {
        title: "Healthy Go Where",
        imgUrls: [hfgw1, hfgw2, hfgw3, hfgw4, hfgw5, hfgw6, hfgw7, hfgw8],
        desc: "The project that started it all. A mobile application to suggest healthy recipes or healthy eateries based on a user's current location.",
        techStack: ['Flutter', 'Firebase', 'Google Maps API', 'Dart'],
        url: 'https://youtu.be/0seUY4VPpFg?si=0-36Mjd8ShAcRv_P'
    },
]

export const otherProjects: Project[] = [
    {
        title: "Notecard Generator",
        imgUrls: [notecard],
        desc: 'A Telegram Bot to generate notecards to streamline operations for The Blooming Palette.',
        techStack: ['OpenCV', 'AWS Lambda', 'Telegram Bot API'],
    },
    {
        title: "Telegram Admin Assistant",
        imgUrls: [admin],
        desc: 'A Telegram Bot to update sales and expenses Google Sheets database on the go, expediting administrative workflow for multiple users to insert order and expense records easily.',
        techStack: ['Telegram Bot API', 'Google Apps Script', 'Excel VBA'],
    },
]