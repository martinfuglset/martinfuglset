import axios from 'axios';

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME; // Set in your .env.local
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export async function fetchGitHubProjects() {
    const headers = {
        Authorization: `token ${GITHUB_TOKEN}`,
    };

    // Fetch repositories
    const reposResponse = await axios.get(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
        { headers }
    );

    const repos = reposResponse.data;

    // Fetch README for each repo
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
                return null; // Skip repositories with errors
            }
        })
    );

    return projects.filter((project) => project !== null); // Filter out failed repos
}
