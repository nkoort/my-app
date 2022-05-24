import React from 'react';
import style from "./pagesCounter.module.css";


const PageCounter = (props) => {
  let pagesCount = Math.ceil(props.state.totalUsersCount / props.state.pageSize);
  let current = props.state.currentPage;
  let pagesList = []
  
  
  if (pagesCount > 10) {
    if (current < 5) {
        for (let i = 1; i <= 5; i++) {
          pagesList.push(i);
        }
    } else if (current >= 5 && current <= pagesCount -5) {
        for (let i = current -4; i <current; i ++) {
          pagesList.push(i);
          pagesList[0] = 1;
        }
        for (let i = current; i - 4 <= current; i++) {
          pagesList.push(i);
        }
    } else if (current > pagesCount -5) {
      for (let i = current - 5; i < current; i++) {
        pagesList.push(i);
        pagesList[0] = 1;
      }
      for (let i = current; i != pagesCount; i++) {
        pagesList.push(i);
        pagesList[0] = 1;
        pagesList[-1] = pagesCount;
      }
      
    }
    pagesList.push(pagesCount);
  }

  const selected = (p) => props.state.currentPage === p && style.selectedPage;
  const first = () => pagesList[4] <= current ? style.first :style.other;
  const last = () => pagesCount-4 >= current ? style.last : style.other;
  
  return (
    <div className={style.selected}>
          {pagesList.map( p => { return <span className={`${selected(p)} ${first()} ${last()}`}
            onClick={(e) => {props.onPageChanged(p)}}>{p}</span>})}
        </div>
  );
};

export default PageCounter;
