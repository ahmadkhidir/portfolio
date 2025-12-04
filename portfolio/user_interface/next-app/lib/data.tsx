import { ProjectProps, ServiceProps } from "./types";


export const projects: ProjectProps[] = [
  {
    id: 1,
    image: "/images/web.jpg",
    title: "HealthConnect Pro",
    overview: "A comprehensive healthcare management platform that streamlines patient care, appointment scheduling, and medical record management. Built with modern web technologies to ensure security, scalability, and ease of use.",
    stacks: ["React", "TypeScript", "Node.js", "MongoDB"],
    content: `
# HealthConnect Pro - Healthcare Management System

## Project Overview
HealthConnect Pro represents a breakthrough in healthcare management technology, designed to address the complex challenges faced by modern healthcare facilities. This enterprise-grade solution seamlessly integrates various aspects of healthcare administration and patient care into a unified platform.

### Core Features
- Advanced Patient Management System
  - Real-time vital signs monitoring
  - Comprehensive medical history tracking
  - Automated alert systems for critical conditions
  - Custom patient care plans
  - Family portal access

- Intelligent Scheduling System
  - AI-powered appointment optimization
  - Multi-facility resource management
  - Emergency slot allocation
  - Automated reminder system
  - Staff rotation management

- Data Analytics and Reporting
  - Predictive analytics for patient outcomes
  - Resource utilization insights
  - Treatment efficacy analysis
  - Compliance reporting
  - Cost analysis dashboards

## Technical Architecture
The system is built on a microservices architecture ensuring high availability and scalability:

### Frontend
- React with TypeScript for type-safe development
- Redux for state management
- Material-UI for consistent design
- WebSocket for real-time updates
- Progressive Web App capabilities

### Backend
- Node.js with Express for API services
- MongoDB for flexible data storage
- Redis for caching
- RabbitMQ for message queuing
- Docker containerization

### Security Implementation
- HIPAA-compliant infrastructure
- End-to-end encryption
- Role-based access control
- Regular penetration testing
- Automated backup systems

## Impact Metrics
- 70% reduction in scheduling conflicts
- 45% decrease in wait times
- 90% patient satisfaction rate
- 50% reduction in paperwork
- $2M annual cost savings for average facility

## Future Roadmap
- AI-powered diagnosis assistance
- Telemedicine integration
- Blockchain for medical records
- IoT device integration
- International expansion

The platform currently serves 200+ healthcare facilities across North America, managing over 500,000 patient records with 99.99% uptime.`
  },
  {
    id: 2,
    image: "/images/seo.png",
    title: "SmartGrid Analytics",
    overview: "An enterprise-level power grid management system utilizing AI and IoT sensors to optimize energy distribution and prevent outages.",
    stacks: ["Python", "TensorFlow", "AWS", "React"],
    content: `
# SmartGrid Analytics - Intelligent Power Distribution System

## System Overview
SmartGrid Analytics revolutionizes power grid management through advanced AI and IoT integration. This platform processes real-time data from thousands of sensors to optimize power distribution and predict potential failures before they occur.

### Technical Implementation
- Distributed sensor network processing 100,000 data points per second
- Machine learning models for load prediction and fault detection
- Real-time visualization of grid status and analytics
- Automated load balancing and power routing
- Predictive maintenance scheduling

## Core Technologies
- Custom-built neural networks for power flow optimization
- Distributed computing architecture handling 10TB daily data
- Real-time analytics processing with Apache Kafka
- Blockchain integration for secure energy trading
- Cloud-based disaster recovery system

### Achievement Metrics
- 40% reduction in power outages
- 25% improvement in energy distribution efficiency
- $50M annual savings in maintenance costs
- 99.999% system reliability
- 30% reduction in carbon emissions

## Innovation Highlights
- Patent-pending AI algorithms
- Revolutionary grid stabilization techniques
- Industry-first predictive maintenance system
- Advanced cyber-security protocols
- Renewable energy integration framework

Currently deployed across 5 major power utilities, serving over 10 million households.`
  },
  {
    id: 3,
    image: "/images/ml.svg",
    title: "QuantumTrade AI",
    overview: "A sophisticated algorithmic trading platform leveraging quantum computing principles and deep learning for high-frequency trading and risk management.",
    stacks: ["Python", "TensorFlow", "AWS", "C++"],
    content: `
# QuantumTrade AI - Next-Generation Trading Platform

## Platform Overview
QuantumTrade AI combines quantum-inspired algorithms with deep learning to revolutionize financial trading. This cutting-edge platform processes market data at unprecedented speeds, identifying trading opportunities in microseconds.

### Core Capabilities
- Ultra-low latency trading execution (sub-millisecond)
- Multi-market data analysis
- Advanced risk modeling
- Pattern recognition in market microstructure
- Automated portfolio rebalancing

## Technical Architecture
- Quantum-inspired optimization algorithms
- Neural network ensemble for market prediction
- Custom FPGA hardware acceleration
- High-throughput market data processing
- Real-time risk assessment system

### Performance Metrics
- 99.99% trading accuracy
- $500M daily trading volume
- 0.1ms average execution time
- Risk prediction accuracy of 92%
- Processing 1M+ market events per second

## Risk Management
- Real-time portfolio stress testing
- Automated circuit breakers
- Multi-factor risk models
- Regulatory compliance automation
- Fraud detection systems

### Market Impact
- Successfully deployed in 10 major exchanges
- Managing $5B+ in assets
- Achieved 40% annual returns
- Zero downtime in 3 years
- Featured in Financial Times

Currently used by top-tier investment firms and hedge funds globally.`
  },
  {
    id: 4,
    image: "/images/mobile.png",
    title: "LogisticsX",
    overview: "An AI-powered logistics and supply chain management platform optimizing delivery routes, warehouse operations, and inventory management across global supply chains.",
    stacks: ["React Native", "Python", "TensorFlow", "MongoDB"],
    content: `
# LogisticsX - Intelligent Supply Chain Platform

## Platform Overview
LogisticsX transforms traditional logistics operations through AI-driven optimization and real-time tracking. This comprehensive platform manages everything from warehouse operations to last-mile delivery.

### Key Features
- Real-time fleet tracking and management
- AI-powered route optimization
- Automated warehouse management
- Inventory prediction and optimization
- Blockchain-based supply chain verification

## Technical Implementation
- Machine learning for demand forecasting
- IoT integration for real-time tracking
- Computer vision for warehouse automation
- Natural language processing for customer service
- Advanced analytics dashboard

### Performance Impact
- 50% reduction in delivery times
- 35% cost savings in operations
- 99.9% delivery accuracy
- 45% decrease in fuel consumption
- 60% improvement in warehouse efficiency

## Innovation Features
- Autonomous warehouse robots integration
- Dynamic route optimization
- Predictive maintenance system
- Smart contract implementation
- Environmental impact tracking

### Scale and Reach
- Operating in 25 countries
- Managing 1000+ vehicles
- Processing 100,000 deliveries daily
- 5M+ square feet of warehouse space
- 99.99% system uptime

Currently serving major retailers and logistics companies worldwide.`
  },
]

export const services: ServiceProps[] = [
  {
    heading: "AI/ML Solutions",
    content: "I create intelligent systems that solve complex problems using machine learning and AI algorithms. Whether it's predictive modeling or natural language processing, I bring data-driven insights to life with precision and efficiency."
  },
  {
    heading: "Full-Stack Development",
    content: "I build robust, scalable applications from front to back, ensuring seamless integration and optimal performance. My expertise spans both client-side and server-side technologies, allowing me to deliver complete, end-to-end solutions."
  },
  {
    heading: "Front-End Development",
    content: "I craft responsive, user-friendly interfaces with modern tools like React, Next.js, and Vue. My focus is on creating engaging, intuitive designs that enhance user experiences and drive interaction."
  },
  {
    heading: "Back-End Development",
    content: "I design and implement efficient back-end systems, ensuring high performance, security, and scalability. Using technologies like Node.js, Django, and Flask, I deliver solid back-end architectures that power seamless applications."
  },
  {
    heading: "API Development",
    content: "I specialize in designing and building RESTful APIs and GraphQL services that are fast, scalable, and maintainable. My goal is to ensure your applications can communicate smoothly with external services and data sources, providing a solid interface for users and other systems."
  },
  {
    heading: "Web Optimization",
    content: "I optimize websites for speed, performance, and SEO. By analyzing and fine-tuning every aspect, I ensure fast load times and improved user engagement, making your website work smarter, not harder."
  },
  {
    heading: "Mobile Development",
    content: "I create powerful mobile applications for both Android and iOS, using tools like React Native and Flutter. I focus on delivering seamless, high-performance mobile experiences that align with your business goals."
  },
  {
    heading: "System Architecture",
    content: "I design scalable, high-performance architectures that ensure systems are robust, maintainable, and future-proof. From cloud integration to microservices, I create architectures that grow with your business."
  }
]