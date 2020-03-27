const path = require('path');

exports.createPages = async function({ actions, graphql }) {
  const {createPage} = actions

  const { data } = await graphql(`
    query {
      blogs: allContentfulTutorialBlog{
        edges{
          node{
            slug
          }
        }
        }
      }
  `)

  data.blogs.edges.forEach(({node})=> {
    createPage({
      path:`blog/${node.slug}`,
      component:path.resolve("./src/templates/blogPageTemplate.js"),
      context:{
        slug:node.slug
      }
    })
  })
}