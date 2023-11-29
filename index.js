// exampleUsage.js

import { writeBlog, publishBlog } from './blogActions.js';
import readlineSync from 'readline-sync';

const filePath = 'myblog.txt';

// Get user's blog input using readline
const userBlog = readlineSync.question('Enter your blog: ');

// Write the blog to the file
writeBlog(filePath, userBlog);

// Publish and display the blog content from the file
publishBlog(filePath);

