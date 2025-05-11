import {useEffect, useState} from 'react';
import SolutionCard from '../components/SolutionCard';
import Base from "../components/Base";

const SolutionsPage = () => {
    const [showTopButton, setShowTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowTopButton(true);
            } else {
                setShowTopButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const solutions = [
        {
            problem: "React state updates not reflecting immediately in UI.",
            solution: "Use useEffect to handle side effects after state updates or leverage useCallback for memoized functions. This ensures your UI stays in sync with state changes seamlessly.",
            githubUrl: "https://github.com/example/react-state-solution"
        },
        {
            problem: "CORS error when fetching data from an external API.",
            solution: "Set up a proxy server or fetch data server-side to bypass CORS restrictions. Libraries like `http-proxy-middleware` can simplify this process.",
            githubUrl: null
        },
        {
            problem: "Slow rendering of large lists in React.",
            solution: "Implement virtualization with `react-window` or `react-virtualized` to render only visible items, boosting performance for large datasets.",
            githubUrl: "https://github.com/example/react-virtualization"
        },
        {
            problem: "Managing complex state in large React applications.",
            solution: "Use state management libraries like Redux or Zustand to centralize state and improve scalability. Context API with useReducer is also a lightweight alternative.",
            githubUrl: "https://github.com/example/react-state-management"
        }
    ];

    return (
        <Base>
            <div style={{marginTop: '120px'}}
                 className="min-h-screen bg-white py-12 px-4 relative">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-black mb-12 bg-clip-text text-transparent">
                    Awesome <span style={{color: "#ff6200"}}>Developer</span> Solutions
                </h1>
                <div className="space-y-8">
                    {solutions.map((item, index) => (
                        <div key={index}>
                            <SolutionCard
                                problem={item.problem}
                                solution={item.solution}
                                githubUrl={item.githubUrl}
                            />
                        </div>
                    ))}
                </div>
                {showTopButton && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-orange-300 text-white p-4 rounded-full shadow-lg hover:from-orange-600 hover:to-orange-400"
                        aria-label="Back to Top"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                    </button>
                )}
            </div>
        </Base>
    );
};

export default SolutionsPage;