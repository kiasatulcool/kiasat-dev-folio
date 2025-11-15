import { Project } from "@/types/project";
import petConnectImg from "@/assets/pet-connect.jpg";
import tutorConnectImg from "@/assets/tutor-connect.jpg";
import stayTunedImg from "@/assets/stay-tuned.jpg";

export const projects: Project[] = [
  {
    id: "pet-connect",
    title: "Pet-Connect",
    description: "A pet adoption and connection platform connecting pet lovers with animals in need of homes.",
    longDescription: "Pet-Connect is a comprehensive platform designed to facilitate pet adoption and foster connections between pet lovers and animals seeking homes. The platform features user authentication, detailed pet profiles with images, advanced search and filter capabilities, and a messaging system for potential adopters to connect with pet owners or shelters.",
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    features: [
      "User authentication and profile management",
      "Post and browse pet listings with photos",
      "Advanced search with filters (breed, age, location)",
      "Favorites and saved searches",
      "Secure messaging between users",
      "Responsive design for all devices"
    ],
    githubUrl: "https://github.com",
    imageUrl: petConnectImg
  },
  {
    id: "tutor-connect",
    title: "Tutor-Connect",
    description: "A platform connecting tutors with students for personalized learning experiences.",
    longDescription: "Tutor-Connect bridges the gap between educators and learners by providing a comprehensive platform for tutoring services. Features include detailed tutor profiles with qualifications, subject expertise, and reviews, a booking system with calendar integration, real-time messaging, and payment processing for seamless transactions.",
    tech: ["Python", "Django", "PostgreSQL", "React", "TailwindCSS"],
    features: [
      "Tutor profiles with qualifications and reviews",
      "Student dashboard for managing sessions",
      "Real-time booking and scheduling system",
      "Integrated messaging and video calls",
      "Payment processing and invoicing",
      "Rating and review system"
    ],
    githubUrl: "https://github.com",
    imageUrl: tutorConnectImg
  },
  {
    id: "template-project",
    title: "Your Next Project",
    description: "This could be your next amazing project. Add more projects here to showcase your work.",
    longDescription: "This is a template card for future projects. Replace this with your actual project details including technologies used, features implemented, and links to live demos and source code.",
    tech: ["Add", "Your", "Tech", "Stack"],
    features: [
      "Add your project features here",
      "Each feature should highlight key functionality",
      "Make it compelling and clear"
    ],
    imageUrl: stayTunedImg
  }
];
