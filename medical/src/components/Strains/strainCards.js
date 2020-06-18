import react from 'react';
import { useState, useEffect } from 'react'




function StrainCards() {

    fetch("https://brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com/strains", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "brianiswu-otreeba-open-cannabis-v1.p.rapidapi.com",
		"x-rapidapi-key": "1329c33f5dmshd8d569b40720847p153a4fjsn88ef2266672c"
	}
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });

    return (



        null



    )









}

export default StrainCards;
