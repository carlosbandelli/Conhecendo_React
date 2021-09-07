import './styles.css'

export const PostCard = ({title,cover,body,id}) =>  //----> 3ªº usando destructuring - pegando post diretamento de props
    //const post = props.post --> 1ª forma de fazer
    //const {post} = props --> 2ª forma de fazer usando destructuring
    (
        <div className="post">
          <img src={cover} alt={title}/>
          <div  className="post-content">
            <h1>{title} {id}</h1>
            <p>{body}</p>
          </div>
        </div>
    )
