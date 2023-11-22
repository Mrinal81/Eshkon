import {useState} from 'react'
import {client} from '../../lib/contentful/client'
import PostCard from '../../components/posts/PostCard'
import Search from '../../components/Search'
const Posts = ({posts}) => {
  const [searchResults, setSearchResults] = useState(posts);

  const handleSearch = async (query) => {
    if (query.trim() === '') {
      // Reset to all posts when the search query is empty
      setSearchResults(posts);
      return;
    }

    const searchClient = algoliasearch('YOUR_APP_ID', 'YOUR_SEARCH_ONLY_API_KEY');
    const searchIndex = searchClient.initIndex('your_blog_posts_index');

    try {
      const { hits } = await searchIndex.search(query);
      setSearchResults(hits);
    } catch (error) {
      console.error('Error searching with Algolia:', error);
    }
  };

  return (
    <section className='section'>
      <div className="container">
        <ul className="unorderedlist">
          {posts.map((post,i)=>(
            <PostCard key={post.fields.slug} post={post}/>
          ))}
        </ul>
      </div>
    </section>
  )
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'post' })
console.log(response)
  return {
    props: {
      posts: response.items,
      revalidate: 60
    }
  }
}
export default Posts