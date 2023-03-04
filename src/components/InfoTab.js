import stadium from '../images/stadium-icon-14.jpg'
function InfoTab({fixture}) {
  return (
    <div className="container d-flex align-items-center justify-content-center rounded-bottom border-bottom border-start border-end border-black pt-5 pb-5">
      <div className="d-flex col-8 flex-sm-row align-items-center justify-content-between p-10">
        <div >
        <i className="fa fa-calendar m-2"></i>
          <span>{new Date(fixture.date).toLocaleDateString()}</span>
        </div>
        <div >
        <i className="fa fa-user m-2" aria-hidden="true"></i>
          <span>{fixture.referee}</span>
        </div>
        <div >
            <img className = "m-2" style={{width:'1rem',height:'1rem'}} src={stadium} alt="stadium" />
          <span>{fixture.venue.name}</span>
        </div>
        <div >
            <i className="fa fa-map-marker m-2" />
          <span>{fixture.venue.city}</span>
        </div>
      </div>
    </div>
  );
}
export default InfoTab;
