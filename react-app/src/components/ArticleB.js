

export const ArticalTitle = ({title}) => (<h1>{title}</h1>);

const ArticleB = ({title, body})=> (
    <article className="artical">
      <ArticalTitle title={title}/>
      { body? <p>{body}</p>: '' }
    </article>);


export default ArticleB;