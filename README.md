[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/9wGHIExr)
# Blog Posts React App

## Description
In this project, you will create a simple blog posts app using React. The app will fetch data from the JSONPlaceholder API, which provides a collection of placeholder posts and users. You'll practice working with components, props, and API requests.

## Learning Objectives
- Develop a React application using Vite as the project setup tool.
- Create and structure React components effectively.
- Fetch and manage data from an external API using `useEffect`.
- Pass data between components using props.
- Dynamically render a list of posts.

---

## Instructions

### 1. Set Up Your Project
- Initialize a new React project using Vite.
- Familiarize yourself with the basic folder structure and files that Vite sets up for you.

### 2. Create Components
- **`BlogPostList` Component:** This will be responsible for rendering a list of blog posts. It should receive the posts data as props and map through them to render individual `BlogPost` components.
- **`BlogPost` Component:** This will display the content of a single blog post, including its title, body, and the author's name. The post data should be passed down as props.
- **`Post` Component (Optional):** If you want to extend the project, you can create a `Post` component that shows the detailed view of a single post, triggered when a user clicks on a post title.

### 3. Fetch Data from the API
- Use the `useEffect` hook to fetch posts data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts) when the `BlogPostList` component mounts.
- Store the fetched data in a state variable using `useState`.
- Ensure you handle loading states and potential errors during the fetch process.

### 4. Passing Data via Props
- Pass the fetched posts data from your main component (e.g., `App`) down to the `BlogPostList` component as props.
- Inside `BlogPostList`, further pass the individual post data to the `BlogPost` component.

### 5. Rendering the Posts
- Inside the `BlogPostList` component, map over the posts array and render a `BlogPost` component for each post.
- Make sure that each post has a unique `key` prop to help React optimize rendering.

### 6. Optional Enhancements
- Display additional user information by fetching and incorporating user data from the [JSONPlaceholder users API](https://jsonplaceholder.typicode.com/users).
- Add basic styling to improve the visual appearance of your blog posts app.
- Implement a "Load More" feature to fetch and display more posts as needed.

---

## Expected Output
By the end of this project, you should have a functioning React app that displays a list of blog posts fetched from an external API. You'll have practiced working with components, props, and React's state management tools (`useState` and `useEffect`).

---

## Additional Resources
- [React Documentation](https://react.dev/) - For reference and further reading.
- [Vite Documentation](https://vitejs.dev/guide/) - To understand how to work with Vite.
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) - For API reference and additional data fetching endpoints.