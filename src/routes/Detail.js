import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  
  let [alert, setAlert] = useState(true);

  let [count, setCount] = useState(0);

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id; //props(data.js이죠).shoes 안에 id중 param의 값과 같으면 출력
  });

  useEffect(() => {
    //페이지가 업데이트 될 때마다 실해됨 (예를들어 버튼이 눌리면 이 부분이 실행됨)
    //페이지가 렌더링 된 후에 실행됨
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  });
  // useEffect(()=>{ 실행할코드 })  재랜더링마다 실행됨

  // useEffect(()=>{ 실행할코드 }, [])   컴포넌트 mount시(로드 시) 1회만 실행

  // useEffect(()=>{  
  //   return ()=>{
  //     실행할코드         useEffect 안의 코드 실행전에 실행됨
  //   }
  // })

  // useEffect(()=>{  컴포넌트 unmount시 1회 실행
  //   return ()=>{
  //     실행할코드
  //   }
  // }, [])
  return (
    <div className="container">
      {alert === true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
