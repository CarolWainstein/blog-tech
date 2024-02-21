# Personal Technology Blog

This is a personal technology blog built using React. The blog focuses on various topics related to technology, programming, and personal development. It includes different pages such as Home, About Me, 404 Page, and Individual Blog Post pages.

## Technologies Used

The following technologies were used to build this blog:

- **React**: The front-end of the blog is built using React, a JavaScript library for building user interfaces.
- **React Router**: Used for client-side routing in the application to navigate between different pages.
- **React Icons**: Utilized for adding icons to the navigation menu, including GitHub, LinkedIn, and Instagram icons.
- **React Markdown**: Used to render markdown content for blog posts, allowing for easy formatting and styling.
- **CSS Modules**: Used for styling components with scoped CSS, ensuring styles do not clash across different components.

## Pages

### Home Page

The home page displays a list of blog posts fetched from a JSON file. Each post is rendered as a card, showing the title, excerpt, and a link to the full post.

### About Me Page

The About Me page provides information about the author of the blog. It includes a brief introduction, a photo, and a description of the author's background and interests.

### 404 Page

The 404 page is displayed when a user navigates to a non-existent URL. It includes a friendly message, an image, and a button to navigate back to the home page.

### Individual Blog Post Page

Each individual blog post has its own page, displaying the full content of the post. It also includes a section with links to other recommended posts based on the current post's content.

## Routes Configuration

The routing for the application is configured using React Router. Here's a simplified version of the `routes.js` file:

```jsx
function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu/>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/sobremim" element={<SobreMim/>}/>
        </Route>
        
        <Route path="posts/:id" element={<Post/>}/>
        <Route path="*" element={<NaoEncontrada/>}/>
      </Routes>

      <Rodape/>
    </BrowserRouter>
  );
}
```
