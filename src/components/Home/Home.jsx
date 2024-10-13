import { Link } from 'react-router-dom';
import './Home.module.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title"><div>Welcome</div><span>to the JAVA DB Quizes</span> </h1>
            <nav className="home-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz3">

                            <article className='changing-color'> <img src="/vite1.png" alt="uml" className="nav-icon" /> Java OOP</article>

                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz">

                            <article className='changing-color'> <img src="/vite.png" alt="uml" className="nav-icon" /> MySQL</article>

                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz2">

                            <article className='changing-color'>  <img src="/springdata.png" alt="Quiz Icon" className="nav-icon" /> Spring Data </article>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
