import axios from 'axios';

const GITHUB_USERNAME = process.env.GITHUB_USERNAME; // No "NEXT_PUBLIC_"
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function fetchGitHubProjects() {
    const headers = {
        Authorization: `token ${GITHUB_TOKEN}`,
    };

    const reposResponse = await axios.get(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
        { headers }
    );

    const repos = reposResponse.data;

    const projects = await Promise.all(
        repos.map(async (repo) => {
            try {
                const readmeResponse = await axios.get(
                    `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/readme`,
                    { headers }
                );
                const readmeContent = Buffer.from(
                    readmeResponse.data.content,
                    'base64'
                ).toString('utf-8');

                return {
                    name: repo.name,
                    description: repo.description || 'No description available.',
                    readme: readmeContent,
                    url: repo.html_url,
                };
            } catch (error) {
                console.error(`Failed to fetch README for ${repo.name}:`, error);
                return null;
            }
        })
    );

    return projects.filter((project) => project !== null);
}
