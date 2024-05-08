import React from 'react';

function Map(props) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d289.5421746141521!2d8.7198228750145!3d47.49810520766295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a997124b3a3c9%3A0x5987fd36c95768e7!2sBerufsbildungsschule%20Winterthur%3A%20Abteilung%20Informatik!5e0!3m2!1sde!2sch!4v1715066035380!5m2!1sde!2sch"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                    p: 2,
                    border: '2px solid grey',
                    textAlign: 'center',
                    marginX: 'auto',
                    marginTop: 4,
                    marginBottom: 4,
                    maxWidth: 325,
                    height: 450
                }}
            ></iframe>
        </div>
    );
}

export default Map;
