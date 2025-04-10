import { createContext, useContext, useState, ReactNode } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

const GET_POSTS = gql`
  query GetPosts {
    posts {
      edges {
        node {
          id
          title(format: RENDERED)
          content(format: RENDERED)
          excerpt(format: RENDERED)
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          tags {
            nodes {
              name
            }
          }
          slug
        }
      }
    }
  }
`;

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $content: String!) {
    createPost(input: { title: $title, content: $content }) {
      post {
        id
        title
        content
      }
    }
  }
`;

interface PostContextProps {
  posts: any[];
  loading: boolean;
  error: any;
  createPost: (title: string, content: string) => Promise<void>;
}

const PostContext = createContext<PostContextProps | undefined>(undefined);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const { loading, error, data } = useQuery(GET_POSTS);
  const [createPostMutation] = useMutation(CREATE_POST, {
    refetchQueries: [{ query: GET_POSTS }],
  });

  const createPost = async (title: string, content: string) => {
    try {
      await createPostMutation({ variables: { title, content } });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const posts = data?.posts?.edges.map((edge: any) => edge.node) || [];

  return (
    <PostContext.Provider value={{ posts, loading, error, createPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};