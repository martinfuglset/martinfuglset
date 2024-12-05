import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getMarkdownContent(filename) {
  const filePath = path.join(process.cwd(), filename); // process.cwd() points to the project root
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content } = matter(fileContent); // Extract raw content
    return content;
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return null;
  }
}
