import React from 'react'

const styles = {
  userName: {
    fontSize: '0.5em',
    wordWrap: 'break-word'
  }
};

export default (props) => {
  const { userName } = props;


  return (
    <div style={styles.userName}>{userName}</div>
  )
}
