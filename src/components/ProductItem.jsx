function ProductItem ({pokemon:{name, type, type_2, hp, attack, defense, sp_atk, sp_def, speed, image_url}}) {

  return (
    <>
      <div className="card m-3 shadow" style={{width: 23 + 'rem'}}>
        <div className="bg-light" >
          <img src={`${image_url}`} className="card-img-top" alt={`${name}`} style={{height: 230 + 'px', objectFit:'scale-down'}}/>
        </div>
        <div className="card-body">
          <h2 className="card-title text-center">{name}</h2>
          <h4>Base Stats</h4>
          <ul className="list-unstyled ps-3">
            <li className="fw-bold d-flex"><span className="text-secondary me-3">Type:</span>
              <img src={`${type}`} style={{width: 50 + 'px'}}/>
              <img className={`${!type_2 ? 'd-none': 'd-block'}`} src={`${type_2}`} style={{width: 50 + 'px'}}/>
            </li>
            <li className="fw-bold"><span className="text-secondary me-2">HP:</span>{hp}</li>
            <li className="fw-bold"><span className="text-secondary me-2">Attack:</span>{attack}</li>
            <li className="fw-bold"><span className="text-secondary me-2">Defense:</span>{defense}</li>
            <li className="fw-bold"><span className="text-secondary me-2">Sp. Atk:</span>{sp_atk}</li>
            <li className="fw-bold"><span className="text-secondary me-2">Sp. Def:</span>{sp_def}</li>
            <li className="fw-bold"><span className="text-secondary me-2">Speed:</span>{speed}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ProductItem