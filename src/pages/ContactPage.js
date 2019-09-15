import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <div>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                    <title>phone</title>
                    <path fill="#ffffff" d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
                </svg>
                <a href="tel:0048608414676">+48 608 414 676</a>
            </div>
            <div>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="#ffffff" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                </svg>
                <a href="mailto:monika.dembek@gmail.com">monika.dembek@gmail.com</a>
            </div>
            {/* <form id="form" class="form">
                <div className="form__group">
                    <input type="text" placeholder="Topic" id="topic" name="topic" className="form__input" required />
                    <label for="topic" className="form__label">Topic</label>
                </div>
                <div className="form__group">
                    <input type="email" id="email" placeholder="E-mail" name="email" className="form__input" required />
                    <label for="email" className="form__label">E-mail</label>
                </div>
                <div className="form__group">
                    <textarea id="message" placeholder="Message..." name="message" className="form__textarea" required></textarea>
                    <label for="message" className="form__label">Message</label>
                </div>
                <input type="submit" value="Send" className="btn--square" />
                <span id="status" className="form__status"></span>
            </form> */}
        </div>
    );
}

export default ContactPage;