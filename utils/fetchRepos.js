import axios from 'axios';

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
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
                // Fetch the project config file
                const configResponse = await axios.get(
                    `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/contents/.project-config.json`,
                    { headers }
                );

                const configContent = JSON.parse(
                    Buffer.from(configResponse.data.content, 'base64').toString('utf-8')
                );

                // Skip if display is false or config is missing required fields
                if (!configContent.display) return null;

                return {
                    name: configContent.title || repo.name,
                    description: configContent.description || repo.description || 'No description available.',
                    readme: configContent.readme || null,
                    url: configContent.url || repo.html_url,
                };
            } catch (error) {
                console.error(`Failed to fetch config for ${repo.name}:`, error);
                return null;
            }
        })
    );

    return projects.filter((project) => project !== null);
}
