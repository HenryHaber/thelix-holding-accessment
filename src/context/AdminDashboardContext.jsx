import React, { createContext, useContext, useState, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import Loading from '../Loading';

// GraphQL Queries
const USERS_QUERY = gql`
  query GetUsers {
    users {
      edges {
        node {
          firstName
          email
          avatar {
            url
          }
          lastName
          name
          roles {
            nodes {
              name
            }
          }
          username
          slug
          userId
        }
      }
    }
  }
`;

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

const GET_PRODUCTS = gql`
  query GetProducts {
  products(first: 200) {
    edges {
      node {
        id
        name
        description(format: RENDERED)
        slug
        ... on SimpleProduct {
          id
          name
          price
          excerpt
        }
        image {
          uri
          sourceUrl
        }
      }
    }
  }
}
`;

// Create Context
const AdminDashboardContext = createContext();

// Provider Component
export const AdminDashboardProvider = ({ children }) => {
  const { data: usersData, loading: usersLoading, error: usersError } = useQuery(USERS_QUERY);
  const { data: postsData, loading: postsLoading, error: postsError } = useQuery(GET_POSTS);
  const { data: productsData, loading: productsLoading, error: productsError } = useQuery(GET_PRODUCTS);
  const [createPost] = useMutation(CREATE_POST);

  const [dashboardData, setDashboardData] = useState({
    products: [],
    posts: [],
    users: [],
    createPost: () => {},
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (usersData && postsData && productsData) {
      setDashboardData({
        products: productsData.products.edges,
        posts: postsData.posts.edges,
        users: usersData.users.edges,
        createPost,
        loading: false,
        error: null,
      });
    }

    if (usersError || postsError) {
      setDashboardData({
        products: [],
        posts: [],
        users: [],
        createPost,
        loading: false,
        error: usersError || postsError || productsError,
      });
    }
  }, [usersData,productsData, postsData, usersError, postsError]);

  if (usersLoading || postsLoading || productsLoading) return <Loading />;
  if (usersError || postsError || productsError) return <p>Error: {usersError?.message || postsError?.message}</p>;

  return (
    <AdminDashboardContext.Provider value={dashboardData}>
      {children}
    </AdminDashboardContext.Provider>
  );
};

// Custom Hook to Use the Context
export const useAdminDashboard = () => {
  const context = useContext(AdminDashboardContext);
  if (!context) {
    throw new Error(
      "useAdminDashboard must be used within an AdminDashboardProvider"
    );
  }
  return context;
};