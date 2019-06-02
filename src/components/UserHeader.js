import React from 'react';

class UserHeader extends React.Component {
    render(){
        return (
            <div>{this.props.userId}</div>
        )
    }
}

export default UserHeader;