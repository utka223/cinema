import { React } from 'react';
import "../styles/location.scss";

function Location() {
    return(
        <>
            <div className='location'>
                <h1>Our location</h1>
                <div className='info-map'>
                    <p>
                        Located in the heart of the city,
                        our cinema is easily accessible by
                        public transport and offers convenient parking,
                        nearby landmarks, and a variety of amenities
                        for a comfortable and enjoyable visit.
                    </p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d655736.3802195285!2d13.806364099335497!3d50.058754615539016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b939c0970798b%3A0x400af0f66164090!2z0J_RgNCw0LPQsA!5e0!3m2!1sru!2scz!4v1775848370159!5m2!1sru!2scz"
                        width="600"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </>
    )
}

export default Location;
