import RichText from '../RichText'

const PostBody = ({ post }) => {
  const { content } = post.fields
console.log(content);
  return (
    <div className='details'>
      <RichText className="richtext" content={content} />
    </div>
  )
}

export default PostBody