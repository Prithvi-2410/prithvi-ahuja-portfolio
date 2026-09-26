export const projectsData = [
  {
    id: "01",
    title: "CrowdSense AI",
    category: "AI / COMPUTER VISION",
    shortDescription: "An AI-powered crowd monitoring and risk detection system using YOLO, OpenCV and FastAPI, paired with a React dashboard for video analysis, real-time statistics and visual analytics.",
    technologies: ["YOLO", "OpenCV", "FastAPI", "React", "Python"],
    visualType: "cv_dashboard",
    githubUrl: "https://github.com/prithvi-2410",
    liveUrl: null,
    figmaUrl: null,
    primaryUrl: "https://github.com/prithvi-2410",
    details: {
      problem: "Manual monitoring of dense crowds in public spaces and events is prone to delayed emergency response, human oversight, and dangerous stampede risks.",
      whatIBuilt: "Engineered an end-to-end computer vision pipeline using YOLOv8 for multi-person tracking, spatial density heatmapping, and real-time risk assessment streamed over WebSockets to a React control room dashboard.",
      keyFeatures: [
        "Real-time bounding box detection & crowd count tracking",
        "Spatial density estimation & movement vector analysis",
        "Automated crowd risk indicator (Safe, Moderate, Critical)",
        "React analytics dashboard with historical chart analysis"
      ],
      challenges: "Optimizing YOLO frame processing rates to achieve sub-50ms inference latency on live video feeds while preventing UI re-render lag.",
      results: "Successfully processed multi-camera streams with high accuracy crowd count telemetry and instant anomaly triggers."
    }
  },
  {
    id: "02",
    title: "Spotify Clone",
    category: "WEB / INTERACTIVE UI",
    shortDescription: "A responsive Spotify-inspired interface with mood-based playlist selection, GSAP-powered motion, theme switching and backend CRUD concepts using PHP/MySQL.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP", "PHP", "MySQL"],
    visualType: "spotify_player",
    githubUrl: "https://github.com/prithvi-2410/SpotifyClone",
    liveUrl: "https://prithvi-2410.github.io/SpotifyClone/",
    figmaUrl: null,
    primaryUrl: "https://prithvi-2410.github.io/SpotifyClone/",
    details: {
      problem: "Digital audio web interfaces often lack liquid-smooth animation states and reactive visual feedback tailored to user listening moods.",
      whatIBuilt: "Crafted a pixel-perfect Spotify experience leveraging GSAP timeline animations for seamless album switching, custom audio visualizer waves, and a PHP/MySQL CRUD back-end for custom playlist storage.",
      keyFeatures: [
        "GSAP-powered fluid layout transitions and playback motion",
        "Mood-driven playlist filtering & dynamic ambient lighting",
        "Custom audio player controls with real-time waveform",
        "PHP & MySQL database integration for playlist management"
      ],
      challenges: "Synchronizing complex audio state timelines with multi-element GSAP micro-animations without dropping frame rates.",
      results: "Delivered a highly interactive web music app deployed publicly on GitHub Pages."
    }
  },
  {
    id: "03",
    title: "HealthBot",
    category: "AI / HEALTH TECHNOLOGY",
    shortDescription: "An AI-powered health-awareness web application combining a disease information library with an AI chatbot for interactive health guidance and prevention information.",
    technologies: ["HTML", "CSS", "JavaScript", "Gemini AI", "Tailwind"],
    visualType: "health_bot",
    githubUrl: "https://github.com/prithvi-2410",
    liveUrl: "https://healthbot-five.vercel.app/",
    figmaUrl: null,
    primaryUrl: "https://healthbot-five.vercel.app/",
    details: {
      problem: "Accessing quick, accurate, and structured medical information can be intimidating for users navigating dense medical jargon.",
      whatIBuilt: "Designed and built HealthBot, integrating Google Gemini AI API with a curated medical knowledge repository to answer health queries and recommend preventive care steps.",
      keyFeatures: [
        "Gemini AI-powered conversational health assistance",
        "Interactive disease encyclopedia with instant search",
        "Structured preventive care & wellness guidelines",
        "Symptom triage advice with clear disclaimer boundaries"
      ],
      challenges: "Engineering robust prompt constraints to ensure the bot delivers helpful educational guidance while strictly emphasizing professional medical consults.",
      results: "Built a fast, intuitive health interface deployed live on Vercel."
    }
  },
  {
    id: "04",
    title: "AI Resume Builder",
    category: "GENERATIVE AI / UI-UX",
    shortDescription: "An AI-assisted resume experience focused on helping users structure professional information and generate polished resume content.",
    technologies: ["Figma", "UI/UX", "Generative AI", "React", "Tailwind"],
    visualType: "resume_builder",
    githubUrl: "https://github.com/prithvi-2410",
    liveUrl: null,
    figmaUrl: "https://www.figma.com/proto/ngGWqXfFdRBeeeLHVcprjV/AI-RESUME-BUILDER?node-id=2-2&p=f&t=kuwpUYhGQcCZZIKM-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",
    primaryUrl: "https://www.figma.com/proto/ngGWqXfFdRBeeeLHVcprjV/AI-RESUME-BUILDER?node-id=2-2&p=f&t=kuwpUYhGQcCZZIKM-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2",
    details: {
      problem: "Drafting high-impact, action-oriented resume bullet points aligned with modern recruiter ATS requirements is frustrating for candidates.",
      whatIBuilt: "Architected a full UI/UX prototype and interactive editor interface that allows users to input raw work notes and receive AI-enhanced action statements.",
      keyFeatures: [
        "Dual-pane split editor with real-time resume preview",
        "AI bullet point generator & tone enhancer",
        "Drag-and-drop section reordering & typography themes",
        "Exportable high-fidelity layout prototype in Figma"
      ],
      challenges: "Balancing powerful AI assistance options with a clean, uncluttered visual canvas that respects editorial typography.",
      results: "Created a published interactive Figma prototype demonstrating end-to-end product design."
    }
  },
  {
    id: "05",
    title: "Weather Forecast App",
    category: "API / WEB APPLICATION",
    shortDescription: "A responsive weather application using API-driven data, location-based information and a clean forecast interface.",
    technologies: ["JavaScript", "REST APIs", "HTML5", "CSS3", "Chart.js"],
    visualType: "weather_app",
    githubUrl: "https://github.com/prithvi-2410",
    liveUrl: "https://weatherforcast-eight.vercel.app/",
    figmaUrl: null,
    primaryUrl: "https://weatherforcast-eight.vercel.app/",
    details: {
      problem: "Excessive ads and cluttered forecast widgets obscure essential temperature, humidity, and precipitation data on common weather tools.",
      whatIBuilt: "Developed a minimal atmospheric weather dashboard consuming live OpenWeather REST APIs with automatic geolocation detection.",
      keyFeatures: [
        "Geolocation-based current weather auto-detect",
        "Hourly temperature trend lines & precipitation graphs",
        "7-day extended forecast carousel with atmospheric visuals",
        "Air Quality Index (AQI) & UV intensity indicators"
      ],
      challenges: "Managing state for multi-city search queries while ensuring graceful API fallback handling for missing location data.",
      results: "Delivered a lightweight, highly responsive weather web dashboard deployed on Vercel."
    }
  },
  {
    id: "06",
    title: "Android Smart Travel Assistant",
    category: "ANDROID / APPLICATION",
    shortDescription: "An Android travel assistant concept combining maps, location services, Firebase and travel-focused utilities.",
    technologies: ["Java", "XML", "Firebase", "Google Maps SDK", "Room DB"],
    visualType: "travel_assistant",
    githubUrl: "https://github.com/prithvi-2410",
    liveUrl: null,
    figmaUrl: null,
    primaryUrl: "https://github.com/prithvi-2410",
    details: {
      problem: "Travelers frequently experience connectivity dropouts and must switch between separate apps for itineraries, route maps, and offline notes.",
      whatIBuilt: "Created a native Android smart travel assistant using Room Database for reliable offline data access and Google Maps SDK for custom route guidance.",
      keyFeatures: [
        "Google Maps SDK integration with custom pin clustering",
        "Offline-first itinerary planner backed by Room DB",
        "Firebase authentication & cloud sync for trip notes",
        "Interactive travel packing list & emergency contacts"
      ],
      challenges: "Optimizing map marker memory usage and handling Room DB async thread queries smoothly on Android UI looper threads.",
      results: "Built a mobile application concept tailored for seamless travel planning."
    }
  }
];
