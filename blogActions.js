// blogActions.js

import fs from 'fs';

const writeBlog = (filePath, userBlog) => {
  try {
    fs.writeFileSync(filePath, userBlog);    
  } catch (error) {
    console.error( error);
  }
};

const publishBlog = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log(content);
    return content;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { writeBlog, publishBlog };
