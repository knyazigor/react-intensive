function RequestList({ requests }) {
  return (
    <>
      <h4>Request History</h4>
      <ul>
        { requests.map((el, i) => <li key={`item-${i}`}>{ el }</li>) }
      </ul>
    </>
  )
}

export default RequestList;
