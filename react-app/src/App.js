import './App.css';
import { ArticalTitle} from './components/ArticleB';
import MyArtical from './components/ArticleB';
import logo from './assets/logo.png';

let articalsData = [
  {
    'title': "New Blog Title",
    "body": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
  },
  {
    'title': "New Blog Title2",
  },
  {
    'title': "New Blog Title3",
    "body": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
  },
];


function App() {
  return (
    <div >
      <div className="flex">
        {articalsData.map((e,index)=>{
            return <MyArtical key={'art-'+index} 
                      title={e.title} body={e.body} />
        })}
      </div>
      <ArticalTitle title="Hello, World" />
      <img src={logo}  width={50} />
      <br/>
      <button onClick={handleButton}>Click Here</button>
    </div>
  );
}
const handleButton = ()=>{ 
  alert('Hi')
};

export default App;
