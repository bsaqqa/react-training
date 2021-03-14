import './App.scss';
import { ArticalTitle } from './components/ArticleB';
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




// for(var i = 0 ; i< 5; i= i+ 2){

// }
// Array.forEach((elm,index)=>{
//   //elm
// });

// let myArr = Arr.map(elm=>{
//   return elm +1;
// });


function App() {
  return (
    <div >
      <div className="flex">
        {articalsData.map((e,index)=>{
            <button onClick={()=> handleButton(e.id)}>Click Here</button>

            return <MyArtical key={'art-'+index} 
                      title={e.title} body={e.body} />
        })}
      </div>
      <ArticalTitle title="Hello, World" />
      <img src={logo}  width={50} />
      <img src={require('./assets/logo.png').default}  width={50} />
      <br/>
      <button onClick={()=> handleButton}>Click Here</button>
    </div>
  );
}
const handleButton = (id)=>{ 
  alert('Hi')
};

export default App;
