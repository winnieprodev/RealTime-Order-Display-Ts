import { useEffect, useState, useMemo } from "react";
import { Row, Col, CustomInput } from 'reactstrap';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Products, Searchbar } from "components";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:4000";
const pageSize = [10, 25, 50];

const OrderList: React.FC<{}> = () => {
  const [orderList, setOrderList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSelect, setPageSelect] = useState(0);
  const [selectPrice, setSelectPrice] =  useState([100,10000]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("order_event", response => {
      setOrderList(prevState => {
        const prevOrderList = prevState;
        if (prevOrderList.length) {
          let stack:any = [];
          response.map((order:any) => {
            let flg = false;
            prevOrderList.map((item:any) => {
              if (item.id === order.id) {
                item.event_name = order.event_name;
                flg = true;
              }
            });
            if (!flg) {
              stack.push(order)
            }
          })
          let orderListNewTemp = prevOrderList.concat(stack);
          return orderListNewTemp;
        } else {
          return response;
        }
      });
      
      console.log(response)
    });
  }, [])

  const filteredOrderList = () => {
    return orderList?.filter(
      ( order:any ) =>
        (searchValue === "" || (order.customer.toLowerCase().includes(searchValue.toLowerCase()) || order.item.toLowerCase().includes(searchValue.toLowerCase()) || order.destination.toLowerCase().includes(searchValue.toLowerCase()) || order.event_name.toLowerCase().includes(searchValue.toLowerCase()))) && order.price >= selectPrice[0] && order.price <= selectPrice[1],
    ) || []
  };

  const onSetSelectedPage = (event:any, index:number) => {
    event.preventDefault();
    setCurrentPage(index - 1);
  }

  const onChangePageNum = (event:any) => {
    setPageSelect(parseInt(event.target.value, 10));
    setCurrentPage(0);
  }

  const onChangeSearchVal = (newValue:string) => {
    setSearchValue(newValue);
    setCurrentPage(0);
  }

  const onRangePrice = (event:any, newValue:any) => {
    setSelectPrice(newValue);
  };
  
  return (
    <>
      <Row>
        <Col className="align-self-center">
          <CustomInput  
            type="select"
            id="exampleCustomSelect"
            name="customSelect"
            className="float-right"
            style={{width: '60px'}}
            onChange={onChangePageNum}
          >
            <option value="0">10</option>
            <option value="1">25</option>
            <option value="2">50</option>
          </CustomInput>
        </Col>
        <Col className="align-self-center">
          <Typography id="range-slider" className="text-white">
            Select Price Range:
          </Typography>
          <Slider
            min={0}
            max={10000}
            value={selectPrice}
            onChange={onRangePrice}
            valueLabelDisplay="auto"
          />
        </Col>
        <Col className="align-self-center">
          <Searchbar value={searchValue} onChange={onChangeSearchVal} />
        </Col>
      </Row>
      <Products>
        {
          filteredOrderList().slice(currentPage * pageSize[pageSelect], (currentPage + 1) * pageSize[pageSelect]).map(({id, customer, item, destination, price, event_name}, index)=> {
            let no = currentPage * pageSize[pageSelect] + index + 1;
            return (
              <Products.ProductItem info={{no: no, id: id, customer: customer, cook: item, destination: destination, price: price, state: event_name}} onClick={() => alert("this is just for test")} />
            )
          })
        }
      </Products>
      
      <Pagination count={Math.ceil(filteredOrderList().length / pageSize[pageSelect])} variant="outlined" shape="rounded" color="secondary" page={currentPage + 1} onChange={(event, page) => onSetSelectedPage(event, page)} ></Pagination>
    </>
  );
};

export default OrderList;
