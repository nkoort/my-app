import React from 'react';
import User from './User/User';
import PageCounter from './pagesCounter/pagesCounter';
import Preloader from '../Common/Preloader/preloader';

// const FindUsers = (props) => {
//   let getUsers = () => {
//   if (props.users.length === 0) {
//     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//       props.setUsers(response.data.items);
//       console.log(response);
//     });
//   }};
//   let user = props.users.map(u => <User users={u} follow={props.follow} unfollow={props.unfollow} />)
//   return (
//     <div>
//       <button onClick={getUsers}>GET USERS</button>
//       {user}
//     </div>
//   );
// };
// export default FindUsers;

class FindUsers extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  render() {
    console.log(this.props.isAuth)
    return (
    <>
      {this.props.isFetching ? <Preloader /> : null}
      <div>
        <PageCounter state={this.props} onPageChanged={this.onPageChanged}/>
        {this.user()}
      </div>
    </>
    )
  }
  
  onPageChanged = (p) => {
    this.props.getUsers(p, this.props.pageSize);
  }

  // getUsers = () => {
  //   if (this.props.users.length === 0) {
  //     usersAPI.getUser().then(response => {
  //         this.props.setUsers(response.data.items);
  //       }
  //       )
  //   }
  // }
  
  user = () =>this.props.users.map(u => 
                          <User 
                              users={u} 
                              follow={this.props.follow} 
                              unfollow={this.props.unfollow}
                              followInProgress={this.props.followInProgress}
                              toggleFollowInProgress={this.props.toggleFollowInProgress}/>)

}


export default FindUsers;