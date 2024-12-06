import { useEffect, useState } from 'react';
import ExpandableSection from '../components/ExpandableSection';
import ExpandableBlock from '../components/ExpandableBlock';
import { fetchGitHubProjects } from '../utils/fetchRepos';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

export default function Projects() {
    const [githubProjects, setGithubProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projects = await fetchGitHubProjects();
                setGithubProjects(projects);
            } catch (err) {
                setError('Failed to load GitHub projects.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <section className="w-3/4 mx-auto">
            {githubProjects.length === 0 ? (
                <p>No projects available.</p>
            ) : (
                <ExpandableSection title="">
                    {githubProjects.map((project) => {
                        const readmeSubtitle = project.readme
                            ? project.readme.split('\n')[0] // Use the first line of the README
                            : 'No description available.';
                        return (
                            <ExpandableBlock
                                key={project.name}
                                title={project.name}
                                subtitle={readmeSubtitle}
                                startDate="Dynamic" // Replace with meaningful date if available in the API
                                endDate="Present"
                                location={
                                    <a
                                        href={project.url}
                                        className="hover:underline flex items-center"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="w-4 h-4 mr-1" /> {/* GitHub icon */}
                                        GitHub
                                    </a>
                                }
                                credentialID={null}
                                credentialLink={null}
                                duration={null}
                            >
                                {project.readme && (
                                    <pre className="bg-gray-100 p-2 rounded text-xs mt-2 overflow-auto">
                                        {project.readme}
                                    </pre>
                                )}
                            </ExpandableBlock>
                        );
                    })}
                </ExpandableSection>
            )}
        </section>
    );
}
