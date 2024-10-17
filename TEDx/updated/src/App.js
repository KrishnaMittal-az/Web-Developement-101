import React from 'react';
import './index.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to TEDxGLAU</h1>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#speakers">Speakers</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <section id="about" className="scroll-horizontal">
                <div className="content">
                    <h2>About TEDxGLAU</h2>
                    <p>This is the TEDx event for GLA University. Bringing ideas worth spreading to life.</p>
                </div>
            </section>

            <section id="speakers" className="diagonal-scroll">
                <div className="content">
                    <h2>Previous Speakers</h2>
                    <div className="image-grid">
                        <div className="image-placeholder">Image 1</div>
                        <div className="image-placeholder">Image 2</div>
                        <div className="image-placeholder">Image 3</div>
                    </div>
                </div>
            </section>

            <section id="events" className="parallax">
                <div className="content">
                    <h2>Upcoming Events</h2>
                    <div id="event-list">
                        {/* TED API data will be dynamically loaded here */}
                    </div>
                </div>
            </section>

            <footer>
                <p>© 2024 TEDxGLAU</p>
            </footer>
        </div>
    );
}

export default App;
