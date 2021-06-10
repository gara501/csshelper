const Content = ({data}) => {

  return (
    <div className="content">
      <div className="content__header">
        <h2>{data && data.name}</h2>
        <p>{data && data.description}</p>
      </div>
      <div className="content__items">
      { data.items && data.items.map(item => (
        <>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <img src={item.example} alt="" />
        </>
      ))}
      </div>
    </div>
  )
}

export default Content;