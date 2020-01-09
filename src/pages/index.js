import React from "react"

import Layout from "../components/layout"
import PostList from "../components/PostList"
import { graphql, useStaticQuery } from "gatsby"
const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            author
            date(formatString: "MMMM Do,YYYY")
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
export default () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges
  return (
    <Layout>
      <PostList posts={posts}></PostList>
    </Layout>
  )
}
