import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import GitHubIcon from '@mui/icons-material/GitHub';

const SolutionCard = ({problem, solution, githubUrl}) => {
    const {ref, inView} = useInView({
        triggerOnce: true, // Animate only once when in view
        threshold: 0.1,     // Trigger when 10% of card is visible
    });

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: 50}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.6, ease: 'easeOut'}}
            className="bg-white shadow-lg rounded-2xl p-6 mb-8 max-w-3xl mx-auto"
            style={{borderColor: '#ff6600', borderWidth: '2px'}}
        >
            <h2 className="text-2xl font-bold text-black mb-3">
                Problem
            </h2>
            <p className="text-black mb-4 leading-relaxed">{problem}</p>
            <h2 className="text-2xl font-bold text-black mb-3">
                Solution
            </h2>
            <p className="text-black mb-6 leading-relaxed">{solution}</p>
            {githubUrl && (
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 shadow-md"
                >
                    <GitHubIcon className="mr-2"/>
                    View on GitHub
                </a>
            )}
        </motion.div>
    );
};

export default SolutionCard;