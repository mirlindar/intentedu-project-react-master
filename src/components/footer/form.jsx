function Form() {
    return(
        <div class="col-md-4">
            <h2>Contact Us!</h2>
            <h5>Send us a message</h5>
            <form action="/action_page.php">
                <input type="text" id="fname" name="fname" value="Full Name" /><br />
                <br />
                <input type="email" id="email" name="email" value="Your Email" /><br /><br />
                <textarea id="w3review" name="w3review" rows="4" cols="50">
                Intent Intent Intent Intent Intent.</textarea>
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default Form;