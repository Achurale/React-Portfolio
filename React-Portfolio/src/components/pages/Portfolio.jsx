import './portfolio.css'

function Portfolio() {
    return(
        <main>
            <h2>Portfolio</h2>
            <div class="container">
                <div class="row">
                    {/* Column 1 */}
                    <div class="col">
                        {/* Row 1 */}
                        <div class="card">
                            <a href="https://github.com/Achurale/DnD-Character-Maker" target="_blank" rel="noopener noreferrer">
                                <img src="./character-maker.png" class="coolHover"></img>
                                <div class="hidden">
                                    <div class="container">
                                        <h3>
                                            D&D Character Maker
                                        </h3>
                                        <p>
                                            The start of a character creator for Dungeons and Dragons.
                                            Although it doesn't have much, I would like to toy around with it some more.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Row 2 */}
                        <div class="card">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="./placholder2.png" class="coolHover"></img>
                                <div class="hidden">
                                    <div class="container">
                                        <h3>
                                            Placeholder
                                        </h3>
                                        <p>
                                            Keep an eye out for more things I may make!
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Row 3 */}
                        <div class="card">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="./placholder2.png" class="coolHover"></img>
                                <div class="hidden">
                                    <div class="container">
                                        <h3>
                                            Placeholder
                                        </h3>
                                        <p>
                                            Keep an eye out for more things I may make!
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>

                    {/* Column 2 */}
                    <div class="col">
                        {/* Row 1 */}
                        <div class="card">
                            <a href="https://github.com/Achurale/Note-Taker-4000" target="_blank" rel="noopener noreferrer">
                                <img src="./currency-converter.png" class="coolHover"></img>
                                <div class="hidden">
                                    <div class="container">
                                        <h3>
                                            Traveler's Assistant
                                        </h3>
                                        <p>
                                            A helpful tool for those traveling abroad.
                                            It helps exchange currency, translate different languages, and even lets you take down notes.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Row 2 */}
                        <div class="card">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="./placholder2.png" class="coolHover"></img>
                                <div class="hidden">
                                    <div class="container">
                                        <h3>
                                            Placeholder
                                        </h3>
                                        <p>
                                            Keep an eye out for more things I may make!
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Row 3 */}
                        <div class="card">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="./placholder2.png" class="coolHover"></img>
                                <div class="hidden">
                                    <div class="container">
                                        <h3>
                                            Placeholder
                                        </h3>
                                        <p>
                                            Keep an eye out for more things I may make!
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        
                    </div>
                </div>
                {/* <div class="card">
                    Hello this is my card
                </div>

                <div class="card">
                    Hello this is my card
                </div>

                <div class="card">
                    Hello this is my card
                </div>

                <div class="card">
                    Hello this is my card
                </div>

                <div class="card">
                    Hello this is my card
                </div>

                <div class="card">
                    Hello this is my card
                </div> */}
            </div>
        </main>
    )
}

export default Portfolio