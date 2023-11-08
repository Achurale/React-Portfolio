import './resume.css'

function Resume() {
    return(
        <main>
            <div id="resume">
                <h2>
                    I have worked with
                </h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>
            </div>
            <a href="./MyResume.pdf" download="Chuyi Lee Resume 2022" target="_blank" rel="noreferrer">
                <button id="resumeDL">Download my resume</button>
            </a>
        </main>
    )
}

export default Resume