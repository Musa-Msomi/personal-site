import { useState } from 'react'
// Import all images
import azure from '../assets/azure.png'
import blazor from '../assets/blazor.png'
import bootstrap from '../assets/bootstrap.png'
import csharp from '../assets/csharp.png'
import docker2 from '../assets/docker2.png'
import efcore from '../assets/efcore.jpg'
import git from '../assets/git.png'
import netcore from '../assets/netcore.png'
import postman from '../assets/postman.png'
import rabbitmq from '../assets/rabbitmq.png'
import redis from '../assets/redis.png'
import sqlserver from '../assets/sqlserver.png'
import swagger from '../assets/swagger.png'
import vscode from '../assets/vscode.png'
import visualstudio from '../assets/visualstudio.png'
import argo from '../assets/argo.png'
import eks from '../assets/eks.png'
import kafka from '../assets/kafka.png'
import aws from '../assets/aws.png'
import rancher from '../assets/rancher.png'
import postgres from '../assets/postgres.png'
import github from '../assets/github.png'
const techImages = [
    { src: csharp, name: 'C#' },
    { src: netcore, name: '.NET Core' },
    { src: sqlserver, name: 'SQL Server' },
    { src: efcore, name: 'Entity Framework Core' },
    { src: git, name: 'Git' },
    { src: azure, name: 'Azure' },
    { src: blazor, name: 'Blazor' },
    { src: bootstrap, name: 'Bootstrap' },
    { src: docker2, name: 'Docker' },
    { src: rabbitmq, name: 'RabbitMQ' },
    { src: redis, name: 'Redis' },
    { src: swagger, name: 'Swagger' },
    { src: postman, name: 'Postman' },
    { src: visualstudio, name: 'Visual Studio' },
    { src: vscode, name: 'VS Code' },
    {src:github, name:'GitHub'},
    {src:argo, name: 'Argo'},
    {src:eks, name:'Amazon EKS'},
    {src:aws, name:'AWS'},
    {src:kafka, name:'Apache Kafka'},
    {src:rancher, name:'Rancher'},
    {src:postgres, name:'PostgreSQL'}
]

function TechStack() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState<number | null>(null)
    const itemsPerView = window.innerWidth < 768 ? 3 : 5 // Show 3 on mobile, 5 on desktop

    // Rest of your existing functions stay the same
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerView >= techImages.length ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? techImages.length - itemsPerView : prevIndex - 1
        )
    }

    // Your existing visibleItems logic stays the same
    const visibleItems = [...techImages.slice(currentIndex)]
        .concat(currentIndex > techImages.length - itemsPerView ?
            techImages.slice(0, itemsPerView - (techImages.length - currentIndex)) : [])
        .slice(0, itemsPerView)

    return (
        <div className="w-full py-8 md:py-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">
                Technologies I Work With
            </h3>
            <div className="relative">
                {/* Previous button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full 
              p-2 md:p-3 shadow-lg hover:bg-white transition-all duration-300 hover:shadow-xl
              focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 md:h-6 md:w-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                {/* Tech stack items */}
                <div className="flex justify-center items-center gap-4 md:gap-8 px-8 md:px-16">
                    {visibleItems.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center"
                            onMouseEnter={() => setIsHovered(index)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            <div
                                className={`
                    w-14 h-14 md:w-20 md:h-20 rounded-full bg-white shadow-lg 
                    p-3 md:p-4 flex items-center justify-center 
                    transition-all duration-300
                    ${isHovered === index ?
                                        'shadow-xl transform scale-110 bg-blue-50' :
                                        'hover:shadow-xl hover:scale-105'
                                    }
                  `}
                            >
                                <img
                                    src={tech.src}
                                    alt={tech.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <span className={`
                  mt-2 md:mt-3 text-xs md:text-sm font-medium text-center
                  transition-all duration-300
                  ${isHovered === index ? 'text-blue-600' : 'text-gray-600'}
                `}>
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Next button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full 
              p-2 md:p-3 shadow-lg hover:bg-white transition-all duration-300 hover:shadow-xl
              focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 md:h-6 md:w-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

                {/* Dots indicator */}
                <div className="flex justify-center mt-4 md:mt-8 space-x-1 md:space-x-2">
                    {Array.from({ length: Math.ceil(techImages.length / itemsPerView) }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i * itemsPerView)}
                            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 
                  ${Math.floor(currentIndex / itemsPerView) === i ?
                                    'bg-blue-500 w-3 md:w-4' :
                                    'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack