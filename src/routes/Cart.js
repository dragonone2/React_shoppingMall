import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { changeName, plusNum, plus } from './../store.js';


function Cart() {

    let state = useSelector((state)=>{return state}) //Redux store에서 가져와줌
    let dispatch = useDispatch()    //store.js에 요청하는 함수

  return (
    <div>
        <h6>{state.user.age}</h6>
        <button onClick={()=>{dispatch(plusNum(100))}}>버튼</button>
      <Table>
        <thead>
          <tr> 
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
            {
                state.cart.map((a,i)=>
                <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td><button onClick={()=>{
                    dispatch(plus(state.cart[i].id))
                }}>+</button></td>
              </tr> 
                )
            }
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
