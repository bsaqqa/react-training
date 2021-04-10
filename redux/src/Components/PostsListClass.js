import React,{Component} from 'react';
import Post from './Post.js';
import store from '../redux/store';


class PostsList extends Component {
    // getChiledContext(){
    //     return {
    //         store: this.props.store
    //     }
    // }

    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        // const {store} = this.context;
        this.store = store;
        // console.log(this.context);
    }
    componentDidMount() {
        this.store.subscribe(function(){
            this.forceUpdate();
        }.bind(this));
    }

    render() {
        let {posts} = this.store.getState();

        return (
            <div>
                <ul>
                    {posts.map((post, index) =>(
                        <Post key={index} data={post}/>
                    ))}
                </ul>
            </div>
        )
    }
}


// export default function PostsList() {
//     // const forceUpdate = useForceUpdate();

//     // const unsubscribe = store.subscribe(() =>{
//     //     posts = store.getState().postsContainer.posts || [];
//     //     console.log('State after dispatch: ', posts)
//     //     forceUpdate();
//     // })
//     // const store = useContext('store');
//     let {posts} = store.getState() || [];
//     store.subscribe(()=>{
//         console.log('store updated', store.getState());
//     });
//     return (
//         <div>
//             <ul>
//                 {posts.map(post =>(
//                     <Post key={post.id} data={post}/>
//                 ))}
//             </ul>
//         </div>
//     );
// }


// PostsList.contextTypes = {
//     store: React.PropTypes.object
// }

export default PostsList;