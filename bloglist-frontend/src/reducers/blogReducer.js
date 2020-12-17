import blogService from '../services/blogs';
import { setNotification } from './notificationReducer';

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_BLOG': {
      return [...state, action.data];
    }
    case 'INIT_BLOGS': {
      return action.data;
    }
    case 'LIKE_BLOG': {
      const id = action.data.id;
      const blogToLike = state.find((b) => b.id === id);
      const changedBlog = {
        ...blogToLike,
        likes: blogToLike.likes + 1,
      };
      return state.map((b) => (b.id !== id ? b : changedBlog));
    }
    case 'REMOVE_BLOG': {
      const id = action.data.id;
      return state.filter((b) => b.id !== id);
    }
    default:
      return state;
  }
};

export const createBlog = (data, user) => {
  return async (dispatch) => {
    let newBlog = await blogService.create(data);
    newBlog = {
      ...newBlog,
      user: {
        username: user.name,
      },
    };
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog,
    });
    dispatch(
      setNotification({
        notification: `A new blog: ${newBlog.title} by ${newBlog.author} was added`,
        style: 'success',
      })
    );
  };
};

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs,
    });
  };
};

export const likeBlog = (id, likedBlog) => {
  return async (dispatch) => {
    await blogService.update(id, likedBlog);
    dispatch({
      type: 'LIKE_BLOG',
      data: likedBlog,
    });
    dispatch(
      setNotification({
        notification: `You liked: ${likedBlog.title} by ${likedBlog.author}`,
        style: 'success',
      })
    );
  };
};

export const removeBlog = (blog) => {
  return async (dispatch) => {
    await blogService.remove(blog.id);
    dispatch({
      type: 'REMOVE_BLOG',
      data: blog,
    });
    dispatch(
      setNotification({
        notification: `${blog.title} by ${blog.author} was removed.`,
        style: 'success',
      })
    );
  };
};

export default blogReducer;
