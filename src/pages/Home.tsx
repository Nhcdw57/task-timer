import { Link } from "react-router-dom";


export default function Home() {
    return (
        <>
            <div className="row mt-4">
                <div className="col-4">
                    <div className="card" style={{width: "18rem;"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Go to SSO race Tracker</h5>
                                <p className="card-text"></p>
                                <Link to={'/star-stable-online'} className="btn btn-primary">Go to SSO</Link>
                            </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card" style={{width: "18rem;"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Go to Task Timer</h5>
                                <p className="card-text"></p>
                                <a href="#" className="btn btn-primary">Go to Task Timer</a>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}