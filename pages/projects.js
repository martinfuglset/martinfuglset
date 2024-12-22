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
                    {githubProjects.map((project) => (
                        <ExpandableBlock
                            key={project.name}
                            title={project.name}
                            subtitle={project.description}
                            location={
                                <a
                                    href={project.url}
                                    className="hover:underline flex items-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            }
                        />
                    ))}
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
