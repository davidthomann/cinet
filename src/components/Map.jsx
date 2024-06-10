import React from 'react';

function Map(props) {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d289.5421746141521!2d8.7198228750145!3d47.49810520766295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a997124b3a3c9%3A0x5987fd36c95768e7!2sBerufsbildungsschule%20Winterthur%3A%20Abteilung%20Informatik!5e0!3m2!1sde!2sch!4v1715066035380!5m2!1sde!2sch"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
                width: "100%",
                height: "80vh",
                position: "relative",
                border: "none"
            }}
        ></iframe>
    );
}

export default Map;
