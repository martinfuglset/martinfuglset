import ExpandableSection from '../components/ExpandableSection';
import ExpandableBlock from '../components/ExpandableBlock';
import { fetchGitHubProjects } from '../utils/fetchRepos';

export default function Projects({ githubProjects }) {
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
                                startDate="Dynamic"
                                endDate="Present"
                                location={
                                    <a
                                        href={project.url}
                                        className="text-blue-500 hover:underline flex items-center"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                }
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

export async function getServerSideProps() {
    const githubProjects = await fetchGitHubProjects();
    return {
        props: { githubProjects },
    };
}
