import './contact.css'

function Contact() {
    return(
        <main>
            <form id="contact">
                <h2>Contact Me</h2>
                <input type="text" placeholder='email'></input>
                <input type="text" placeholder='name'></input>
                <textarea placeholder='The contact me field is currently disabled'></textarea>
                <button>Submit</button>
            </form>
            <div id="contactInfo">
                <h2>Contact Info</h2>
                <ul>
                    <li>Email: chuyirlee@gmail.com</li>
                    <li>Phone Number: -</li>
                </ul>
            </div>
        </main>
    )
}

export default Contact